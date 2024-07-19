import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectedItemData, setSelectedItem } from "@/src/redux/slices/selectedItemSlice";
import ButtonMap from "./ButtonMap";
import { Point, originalPoints } from "./configMapCity";

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
  const dispatch = useDispatch();

  const [zoomLevel, setZoomLevel] = useState<number>(0.75);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const [iconPosition, setIconPosition] = useState<Point>(originalPoints[0]);
  const iconRef = useRef<HTMLImageElement | null>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    const iconImg = new Image();
    iconImg.src = "/assets/gif/ef6ca2026744bdead4ee6c58999c8bca.gif";
    iconImg.onload = () => {
      iconRef.current = iconImg;
      setImageLoaded(true);
    };
    iconImg.onerror = (error) => {
      console.error("Error loading gif:", error);
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

        // Center the image
        setPanPosition({
          x: (canvasWidth - imageWidth) / 2,
          y: (canvasHeight - imageHeight) / 2,
        });
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
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, panPosition.x, panPosition.y, imageSize.width * zoomLevel, imageSize.height * zoomLevel);
          if (iconRef.current && imageLoaded) {
            drawIcon(ctx, calculatePointPosition(iconPosition));
          }
        };
      }
    }
  }, [canvasSize, imageSize, zoomLevel, panPosition, iconPosition, imageLoaded, canvasSize.width, canvasSize.height]);

  const drawIcon = (ctx: CanvasRenderingContext2D, position: Point) => {
    const iconWidth = 57;
    const iconHeight = 57;
    ctx.drawImage(iconRef.current!, position.x - iconWidth / 2, position.y - iconHeight / 2, iconWidth, iconHeight);
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2)); 
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.64));
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



  
  // const index = originalPoints.findIndex(point => point.x === iconPosition.x && point.y === iconPosition.y);
  
  // console.log('iconPosition :>> ', index);

  const animateIcon = (newPosition: Point) => {
    const duration = 500;
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

  // const handleClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
  //   const rect = canvasRef.current?.getBoundingClientRect();
  //   if (rect) {
  //     const mouseX = event.clientX - rect.left;
  //     const mouseY = event.clientY - rect.top;

  //     for (const point of originalPoints) {
  //       const pointPosition = calculatePointPosition(point);
  //       const distance = Math.hypot(mouseX - pointPosition.x, mouseY - pointPosition.y);

  //       if (distance < 10) {
  //         animateIcon(point);
  //         break;
  //       }
  //     }
  //   }
  // };

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
        // onClick={handleClick}
        style={{ cursor: isDragging ? "grabbing" : "grab", display: imageLoaded ? "block" : "none" }}
      />
      <ButtonMap handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} />
    </Box>
  );
};

export default CanvasWithImageAndIcon;
