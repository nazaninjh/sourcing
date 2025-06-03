"use client";

import React, {
  useRef,
  useState,
  useEffect,
  ReactNode,
  TouchEvent,
  MouseEvent,
} from "react";
import { isMobile } from "react-device-detect";
import styles from "./carousel.module.scss";
// todo: add custom bullets later
type CarouselProps = {
  children: ReactNode;
  direction?: "ltr" | "rtl";
  allowDesktopDrag?: boolean;
  customArrows?: [ReactNode, ReactNode] | null;
  showBullets?: boolean;
};

const CarouselComponent = ({
  children,
  direction = "rtl",
  allowDesktopDrag = false,
  customArrows = null,
  showBullets = false,
}: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = React.Children.count(children);

  const childRef = useRef<HTMLDivElement | null>(null);
  const maxWrapperWidth = useRef<number>(600);

  console.log(maxWrapperWidth);

  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    if (!childRef.current) return;
    maxWrapperWidth.current = childRef.current.clientWidth;
  }, []);
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  //   move with buttons

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    // make sure index is never negetive or more than total
    const clampedIndex = Math.min(Math.max(index, 0), total - 1);
    const offset =
      direction === "rtl"
        ? -clampedIndex * slideWidth
        : clampedIndex * slideWidth;

    containerRef.current.scrollTo({
      left: offset,
      behavior: "smooth",
    });

    setCurrentIndex(clampedIndex);
  };

  const prev = () => scrollToIndex(currentIndex - 1);
  const next = () => scrollToIndex(currentIndex + 1);

  //   move with touch or mouse
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  const shouldAllowDrag = isMobile;

  // mobile
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!shouldAllowDrag) return;
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!shouldAllowDrag || !isDragging.current) return;
    currentX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!shouldAllowDrag || !isDragging.current) return;
    handleSwipe();
  };

  //  desktop
  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!allowDesktopDrag && !isMobile) return;

    isDragging.current = true;
    startX.current = e.clientX;
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!allowDesktopDrag || !isDragging.current) return;
    currentX.current = e.clientX;
  };

  const onMouseUp = () => {
    if (!allowDesktopDrag || !isDragging.current) return;
    handleSwipe();
  };

  const handleSwipe = () => {
    // how much the user has moved it's mouse | finger
    const deltaX = currentX.current - startX.current;
    // how much she needs to move to go to the next slide
    const threshold = 40;

    if (deltaX < threshold) {
      prev();
    } else if (deltaX > threshold) {
      next();
    }

    isDragging.current = false;
  };

  return (
    <div
      className={styles.carouselWrapper}
      style={{ maxWidth: !isMobile ? `${maxWrapperWidth.current}px` : "100%" }}
    >
      <button
        type="button"
        onClick={prev}
        disabled={currentIndex === 0}
        className={styles.navBtn}
      >
        {customArrows ? customArrows[0] : "▶"}
      </button>

      <div
        className={styles.carousel}
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        <div className={styles.inner}>
          {React.Children.map(children, (child, i) => (
            <div className={styles.slide} key={i} ref={childRef}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={next}
        disabled={currentIndex === total - 1}
        className={styles.navBtn}
      >
        {customArrows ? customArrows[1] : "◀"}
      </button>

      {showBullets && (
        <div className={styles.bullets}>
          {Array.from({ length: total }).map((_, index) => (
            <button
              type="button"
              key={index}
              className={`${styles.bullet} ${currentIndex === index ? styles.active : ""}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselComponent;
