"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const instance = new Lenis({
      autoRaf: false,
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    instance.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      instance.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      instance.destroy();
    };
  }, []);

  return <>{children}</>;
}
