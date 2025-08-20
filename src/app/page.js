'use client';
// import Loader from "@/components/loader";
import { useEffect } from "react";
import Lenis from 'lenis';
import HomePage from "./home";


export default function Home() {

  useEffect(() => {
     const lenis = new Lenis({
      autoRaf: true,
      duration: 1.8,  // Increase duration for smoother scrolling
      easing: (t) => 1 - Math.pow(1 - t, 6),  // Custom cubic easing for natural feel
      smooth: true,
      smoothTouch: true,  // Enable smooth scrolling on touch devices
      lerp: 0.04,
    });
    
    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      // console.log(e);
    });
  }, [])

  return (
    <>
      {/* <div id="custom-cursor" className="fixed z-[9999] w-20 h-20 bg-white/10 rounded-full pointer-events-none opacity-0 scale-0 transition duration-300"></div> */}
      <HomePage />
    </>
  );
}
