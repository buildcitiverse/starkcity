"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectedItemData } from "@/src/redux/slices/selectedItemSlice";
import ButtonMap from "./ButtonMap";

interface Point {
  x: number;
  y: number;
}

const CanvasWithImageAndIcon: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasSize, setCanvasSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const selectedItem = useSelector(selectedItemData);
  const dataSelectedItem = selectedItem.selectedItem;

  const [zoomLevel, setZoomLevel] = useState<number>(0.64);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const originalPoints: Point[] = [
    { x: 0.674, y: 0.27 },  // 1
    { x: 0.614, y: 0.172 }, // 2
    { x: 0.533, y: 0.118 }, // 3
    { x: 0.441, y: 0.123 }, // 4
    { x: 0.365, y: 0.185 }, // 5
    { x: 0.308, y: 0.292 }, // 6
    { x: 0.276, y: 0.43 },  // 7
    { x: 0.275, y: 0.58 },  // 8
    { x: 0.305, y: 0.718 }, // 9
    { x: 0.362, y: 0.827 }, // 10
    { x: 0.437, y: 0.892 }, // 11
    { x: 0.538, y: 0.898 }, // 12
    { x: 0.616, y: 0.842 }, // 13
    { x: 0.677, y: 0.738 }, // 14
    { x: 0.712, y: 0.603 },  // 15
    { x: 0.386, y: 0.27 }, // 16
    { x: 0.428, y: 0.241 },  // 17
    { x: 0.452, y: 0.241 },  // 18
    { x: 0.475, y: 0.241 },   // 19
    { x: 0.427, y: 0.371 }, // 20
    { x: 0.324, y: 0.528 },  // 21
    { x: 0.356, y: 0.484 }, // 22
    { x: 0.356, y: 0.52 }, // 23
    { x: 0.356, y: 0.555 }, // 24
    { x: 0.397, y: 0.484 }, // 25
    { x: 0.397, y: 0.484 }, // 26
    { x: 0.397, y: 0.555 }, // 27
    { x: 0.437, y: 0.484 }, // 28
    { x: 0.437, y: 0.52 }, // 29
    { x: 0.437, y: 0.555 }, // 30
    { x: 0.476, y: 0.484 }, // 31
    { x: 0.476, y: 0.52 }, // 32
    { x: 0.476, y: 0.555 }, // 33
    { x: 0.343, y: 0.629 },  // 34
    { x: 0.397, y: 0.624 }, // 35
    { x: 0.397, y: 0.661 }, // 36
    { x: 0.397, y: 0.698 }, // 37
    { x: 0.437, y: 0.624 }, // 38
    { x: 0.437, y: 0.661 }, // 39
    { x: 0.437, y: 0.698 }, // 40
    { x: 0.476, y: 0.624 }, // 41
    { x: 0.476, y: 0.661 }, // 42
    { x: 0.476, y: 0.698 }, // 43
    { x: 0.399, y: 0.744 }, // 44
    { x: 0.434, y: 0.77 },  // 45
    { x: 0.475, y: 0.81 },    // 46
    { x: 0.538, y: 0.468 }, // 47
    { x: 0.573, y: 0.468 },  // 48
    { x: 0.608, y: 0.468 },  // 49
    { x: 0.599, y: 0.567 }, // 50
    { x: 0.56, y: 0.573 },  // 51
    { x: 0.532, y: 0.618 }, // 52
    { x: 0.525, y: 0.679 }, // 53
    { x: 0.539, y: 0.737 }, // 54
    { x: 0.572, y: 0.772 }, // 55
    { x: 0.611, y: 0.776 }, // 56
    { x: 0.646, y: 0.743 }, // 57
    { x: 0.663, y: 0.688 }, // 58
    { x: 0.659, y: 0.627 }, // 59
    { x: 0.634, y: 0.578 }, // 60
  ];

  const [iconPosition, setIconPosition] = useState<Point>(originalPoints[0]);
  const iconRef = useRef<HTMLImageElement | null>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    const iconImg = new Image();
    iconImg.src = "/assets/icons/drone_1.png";
    iconImg.onload = () => {
      iconRef.current = iconImg;
    };
  }, []);

  const calculatePointPosition = (point: Point) => {
    return {
      x: point.x * imageSize.width * zoomLevel + panPosition.x,
      y: point.y * imageSize.height * zoomLevel + panPosition.y,
    };
  };

  useEffect(() => {
    const handleResize = () => {
      const parent = canvasRef.current?.parentElement;
      if (parent) {
        const canvasWidth = parent.clientWidth;
        const canvasHeight = parent.clientHeight;

        const imageWidth = imageSize.width * zoomLevel;
        const imageHeight = imageSize.height * zoomLevel;

        const maxPanX = Math.max(canvasWidth - imageWidth, 0);
        const maxPanY = Math.max(canvasHeight - imageHeight, 0);
        setPanPosition((prevPosition) => ({
          x: Math.min(prevPosition.x, maxPanX),
          y: Math.min(prevPosition.y, maxPanY),
        }));

        setCanvasSize({ width: canvasWidth, height: canvasHeight });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageSize, zoomLevel]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const img = new Image();
        img.src = "/assets/images/map.jpg";
        img.onload = () => {
          setImageSize({ width: img.width, height: img.height });
          setImageLoaded(true);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, panPosition.x, panPosition.y, imageSize.width * zoomLevel, imageSize.height * zoomLevel);
          if (iconRef.current) {
            drawIcon(ctx, calculatePointPosition(iconPosition));
          }
        };
      }
    }
  }, [canvasSize, imageSize, zoomLevel, panPosition]);

  const drawIcon = (ctx: CanvasRenderingContext2D, position: Point) => {
    if (iconRef.current) {
      const iconWidth = 57;
      const iconHeight = 57;
      ctx.drawImage(iconRef.current, position.x - iconWidth / 2, position.y - iconHeight / 2, iconWidth, iconHeight);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2)); // Increase zoom level by 0.1 up to a maximum of 2
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.64)); // Decrease zoom level by 0.1 down to a minimum of 0.63 (initial zoom)
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    setIsDragging(true);
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (isDragging) {
      const deltaX = event.clientX - dragStart.x;
      const deltaY = event.clientY - dragStart.y;

      setPanPosition((prevPan) => {
        const newPanX = Math.min(
          Math.max(prevPan.x + deltaX, canvasSize.width - imageSize.width * zoomLevel),
          0
        );
        const newPanY = Math.min(
          Math.max(prevPan.y + deltaY, canvasSize.height - imageSize.height * zoomLevel),
          0
        );
        return { x: newPanX, y: newPanY };
      });
      setDragStart({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const index = Number(dataSelectedItem?.location || 1);
    animateIcon(originalPoints[index - 1]);
  }, [dataSelectedItem?.location]);

  const animateIcon = (newPosition: Point) => {
    const duration = 500; // Duration of the animation in milliseconds
    const startTime = performance.now();
    const startPosition = iconPosition;
    const deltaX = newPosition.x - startPosition.x;
    const deltaY = newPosition.y - startPosition.y;

    const step = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const interpolatedX = startPosition.x + deltaX * progress;
      const interpolatedY = startPosition.y + deltaY * progress;
      setIconPosition({ x: interpolatedX, y: interpolatedY });

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(step);
      }
    };

    requestRef.current = requestAnimationFrame(step);
  };

  return (
    <Box position="relative" width="100%" height="100%" overflow="hidden">
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? "grabbing" : "grab", display: imageLoaded ? "block" : "none" }}
      />
      <ButtonMap handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} />
    </Box>
  );
};

export default CanvasWithImageAndIcon;
