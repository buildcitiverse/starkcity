// eslint-disable-next-line react-hooks/exhaustive-deps
"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectedItemData } from "@/src/redux/slices/selectedItemSlice";

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
    { x: 0.361, y: 0.268 }, // 16
    { x: 0.408, y: 0.24 },  // 17
    { x: 0.434, y: 0.24 },  // 18
    { x: 0.46, y: 0.24 },   // 19
    { x: 0.407, y: 0.365 }, // 20
    { x: 0.291, y: 0.52 },  // 21
    { x: 0.327, y: 0.478 }, // 22
    { x: 0.327, y: 0.514 }, // 23
    { x: 0.327, y: 0.549 }, // 24
    { x: 0.373, y: 0.478 }, // 25
    { x: 0.373, y: 0.514 }, // 26
    { x: 0.373, y: 0.549 }, // 27
    { x: 0.417, y: 0.478 }, // 28
    { x: 0.417, y: 0.514 }, // 29
    { x: 0.417, y: 0.549 }, // 30
    { x: 0.462, y: 0.478 }, // 31
    { x: 0.462, y: 0.514 }, // 32
    { x: 0.462, y: 0.549 }, // 33
    { x: 0.314, y: 0.62 },  // 34
    { x: 0.373, y: 0.615 }, // 35
    { x: 0.373, y: 0.652 }, // 36
    { x: 0.373, y: 0.687 }, // 37
    { x: 0.417, y: 0.615 }, // 38
    { x: 0.417, y: 0.652 }, // 39
    { x: 0.417, y: 0.687 }, // 40
    { x: 0.462, y: 0.615 }, // 41
    { x: 0.462, y: 0.652 }, // 42
    { x: 0.462, y: 0.687 }, // 43
    { x: 0.375, y: 0.735 }, // 44
    { x: 0.414, y: 0.76 },  // 45
    { x: 0.46, y: 0.8 },    // 46
    { x: 0.531, y: 0.464 }, // 47
    { x: 0.57, y: 0.464 },  // 48
    { x: 0.61, y: 0.464 },  // 49
    { x: 0.599, y: 0.559 }, // 50
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
        // Calculate canvas size to fit the parent element
        const canvasWidth = parent.clientWidth;
        const canvasHeight = parent.clientHeight;

        // Calculate image size considering zoom level
        const imageWidth = imageSize.width * zoomLevel;
        const imageHeight = imageSize.height * zoomLevel;

        // Adjust pan position to ensure image remains within canvas boundaries
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
          drawIcon(ctx, calculatePointPosition(iconPosition));
        };
      }
    }
  }, [canvasSize, imageSize, zoomLevel, panPosition, iconPosition]);

  const drawIcon = (ctx: CanvasRenderingContext2D, position: Point) => {
    ctx.beginPath();
    ctx.arc(position.x, position.y, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#003300";
    ctx.stroke();
  };

  // const drawIcon = (ctx: CanvasRenderingContext2D, position: Point) => {
  //   const iconImg = new Image();
  //   iconImg.src = "/assets/gif/f038e447d4da414485dd0c5f1356b911.gif";
  //   iconImg.onload = () => {
  //     const iconWidth = 57;
  //     const iconHeight = 57;
  //     ctx.drawImage(iconImg, position.x - iconWidth / 2, position.y - iconHeight / 2, iconWidth, iconHeight);
  //   };
  // };

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
    const index = Number(dataSelectedItem?.location || 1)
    setIconPosition(originalPoints[index - 1]);
  },[dataSelectedItem?.location])

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
      <Box position="absolute" top={0} right={0}>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </Box>
    </Box>
  );
};

export default CanvasWithImageAndIcon;
