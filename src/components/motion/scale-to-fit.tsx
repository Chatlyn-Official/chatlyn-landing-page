"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Renders a fixed-size design composition (width × height in Figma px) and
 * scales it down uniformly when its container is narrower, so absolutely
 * positioned illustrations keep their exact proportions on mobile.
 */
export function ScaleToFit({
  width,
  height,
  className,
  children,
}: {
  width: number;
  height: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / width));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ height: height * scale, maxWidth: width }}
    >
      <div
        className="absolute top-0 left-1/2 origin-top"
        style={{
          width,
          height,
          transform: `translateX(-50%) scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
