import { useEffect, useRef, useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectedItemData, setSelectedItem } from "@/src/redux/slices/selectedItemSlice";
import ButtonMap from "./ButtonMap";
import { Point, originalPoints, originalPointsObject } from "./configMapCity";
import { listMetaCityMap } from "./config";

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

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const selectedItem = useSelector(selectedItemData);
  const dataSelectedItem = selectedItem.selectedItem;

  const ratioZoom = () => {
    return isLargerThan1000 ? 0.75 : 0.59;
  };

  const [zoomLevel, setZoomLevel] = useState<number>(ratioZoom());
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [initialLoad, setInitialLoad] = useState(true);

  const [iconPosition, setIconPosition] = useState<Point>(originalPoints[0]);
  const iconRef = useRef<HTMLImageElement | null>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    setZoomLevel(ratioZoom());
  }, [isLargerThan1000]);

  useEffect(() => {
    const iconImg = new Image();
    iconImg.src = "/assets/gif/Layer_1.svg";
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

        if (initialLoad) {
          setPanPosition({
            x: (canvasWidth - imageWidth) / 2,
            y: (canvasHeight - imageHeight) / 2,
          });
        }
        setCanvasSize({ width: canvasWidth, height: canvasHeight });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageSize, zoomLevel, initialLoad]);

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
          drawPoints(ctx);
        };
      }
    }
  }, [canvasSize, imageSize, zoomLevel, panPosition]);

  const drawIcon = (ctx: CanvasRenderingContext2D, position: Point) => {
    if (iconRef.current) {
      const iconWidth = 72;
      const iconHeight = 81;
      ctx.drawImage(iconRef.current, position.x - iconWidth / 2, position.y - iconHeight / 2, iconWidth, iconHeight);
    }
  };

  const drawPoints = (ctx: CanvasRenderingContext2D) => {
    for (const point of originalPointsObject) {
      const position = calculatePointPosition(point);

      ctx.save();
      ctx.translate(position.x, position.y);
      ctx.rotate((point.rotation * Math.PI) / 180);

      ctx.beginPath();
      ctx.rect(-point.width / 2, -point.height / 2, point.width, point.height);
      ctx.restore();
    }
  }

  const index = originalPoints.findIndex(point => point.x === iconPosition.x && point.y === iconPosition.y);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (index >= 0 && index <= listMetaCityMap.length) {
      const item = listMetaCityMap[index];
      dispatch(setSelectedItem(item));
    }
  }, [index, dispatch]);

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.75));
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (imageLoaded) {
      setIsDragging(true);
      setDragStart({ x: event.clientX, y: event.clientY });

      if (initialLoad) {
        setInitialLoad(false);
      }
    }
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

  const handleTouchStart = (event: React.TouchEvent<HTMLCanvasElement>) => {
    if (imageLoaded) {
      setIsDragging(true);
      const touch = event.touches[0];
      setDragStart({ x: touch.clientX, y: touch.clientY });

      if (initialLoad) {
        setInitialLoad(false);
      }
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      const touch = event.touches[0];
      const deltaX = touch.clientX - dragStart.x;
      const deltaY = touch.clientY - dragStart.y;

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
      setDragStart({ x: touch.clientX, y: touch.clientY });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const index = Number(dataSelectedItem?.location || 1);
    animateIcon(originalPoints[index - 1]);
  }, [dataSelectedItem?.location]);

  const animateIcon = (newPosition: Point) => {
    const duration = 500;
    const startTime = performance.now();
    const startPosition = iconPosition;
    
    const step = (currentTime: number) => {
      const progress = (currentTime - startTime) / duration;
      const interpolatedX = startPosition.x + (newPosition.x - startPosition.x) * progress;
      const interpolatedY = startPosition.y + (newPosition.y - startPosition.y) * progress;

      setIconPosition({ x: interpolatedX, y: interpolatedY });

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(step);
      }
    };

    requestRef.current = requestAnimationFrame(step);
  };

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      let clickedPointIndex: number | null = null;

      for (let i = 0; i < originalPointsObject.length; i++) {
        const point = originalPointsObject[i];
        const pointPosition = calculatePointPosition(point);

        if (
          mouseX >= pointPosition.x - point.width / 2 &&
          mouseX <= pointPosition.x + point.width / 2 &&
          mouseY >= pointPosition.y - point.height / 2 &&
          mouseY <= pointPosition.y + point.height / 2
        ) {
          clickedPointIndex = i;
          break;
        }
      }

      if (clickedPointIndex !== null) {
        const newPosition = originalPoints[clickedPointIndex];
        animateIcon(newPosition);
      }
    }
  };

  const handleTouchClick = (event: React.TouchEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const touch = event.touches[0];
      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;

      let clickedPointIndex: number | null = null;

      for (let i = 0; i < originalPointsObject.length; i++) {
        const point = originalPointsObject[i];
        const pointPosition = calculatePointPosition(point);

        if (
          touchX >= pointPosition.x - point.width / 2 &&
          touchX <= pointPosition.x + point.width / 2 &&
          touchY >= pointPosition.y - point.height / 2 &&
          touchY <= pointPosition.y + point.height / 2
        ) {
          clickedPointIndex = i;
          break;
        }
      }

      if (clickedPointIndex !== null) {
        const newPosition = originalPoints[clickedPointIndex];
        animateIcon(newPosition);
      }
    }
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
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onTouchStartCapture={handleTouchClick}
        style={{ cursor: isDragging ? "grabbing" : "grab", display: imageLoaded ? "block" : "none" }}
      />
      {isLargerThan1200 && <ButtonMap handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} />}
    </Box>
  );
};

export default CanvasWithImageAndIcon;
