import React, { useEffect, useState, useRef } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1500,
  suffix = '',
  decimals = 0,
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cancelAnimationFrame(animationFrameId);
            const startTime = performance.now();
            const startVal = 0;
            const endVal = value;

            const animate = (currentTime: number) => {
              const elapsedTime = currentTime - startTime;
              if (elapsedTime >= duration) {
                setCurrentValue(endVal);
              } else {
                const progress = elapsedTime / duration;
                // Easing out quad
                const easeProgress = progress * (2 - progress);
                setCurrentValue(startVal + (endVal - startVal) * easeProgress);
                animationFrameId = requestAnimationFrame(animate);
              }
            };

            animationFrameId = requestAnimationFrame(animate);
          } else {
            // Reset to 0 when leaving the section so it animates again when coming back
            setCurrentValue(0);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value, duration]);

  const formatted = currentValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={elementRef}>
      {formatted}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;
