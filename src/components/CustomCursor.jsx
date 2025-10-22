// src/components/CustomCursor.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Move cursor
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Hover effects
    const handleMouseEnter = (e) => {
      if (e.target.matches('button, a, [role="button"]')) {
        gsap.to(cursor, { scale: 1.5, duration: 0.3 });
        gsap.to(follower, { scale: 3, duration: 0.3 });
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('button, a, [role="button"]')) {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
        gsap.to(follower, { scale: 1, duration: 0.3 });
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-[#777C6D] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
        className="fixed w-6 h-6 border-2 border-[#777C6D] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
