"use client";

import { useRef } from "react";
import Spline from '@splinetool/react-spline/next';
import MobileToggle from './components/MobileToggle';
import ScrollButtons from './components/ScrollButtons';

export default function Home() {
  // Helper to dispatch a wheel event to the Spline canvas
  function triggerSplineScroll(deltaY) {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const event = new WheelEvent("wheel", {
        deltaY,
        bubbles: true,
        cancelable: true,
        view: window,
      });
      canvas.dispatchEvent(event);
    }
  }

  return (
    <main style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Spline 
        className="spline-view" 
        scene="https://prod.spline.design/IHC6c9SdAQVPKaEp/scene.splinecode" 
      />
      <MobileToggle />
      <ScrollButtons onScroll={triggerSplineScroll} />
    </main>
  );
}
