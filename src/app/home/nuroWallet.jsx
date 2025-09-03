"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NuroWallet = () => {
  const sectionRef = useRef(null);
  const scrollBoxRef = useRef(null);
  const scrollContentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollBox = scrollBoxRef.current;
    const scrollContent = scrollContentRef.current;

    if (!section || !scrollBox || !scrollContent) return;

    // Calculate the actual scroll distance needed
    const scrollDistance = scrollContent.scrollHeight - scrollBox.clientHeight;
    
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => "+=" + (scrollDistance * 2), // Increase scroll duration
      pin: true,
      scrub: 1, // Add smooth scrubbing
      anticipatePin: 1,
      onUpdate: (self) => {
        // Map scroll progress to internal scroll with better easing
        const progress = self.progress;
        const maxScroll = scrollContent.scrollHeight - scrollBox.clientHeight;
        scrollBox.scrollTop = progress * maxScroll;
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  const pointers = [
    { label: 'AI Agent Integration', description: 'An intelligent AI companion that assists with token creation, portfolio insights, security checks, personalized strategies and more.' },
    { label: 'Add Any Network & Cryptocurrency', description: 'Seamlessly expand your wallet to support any blockchain, token, or asset with full flexibility.' },
    { label: 'Built-In Token Launchpad', description: 'Create and launch tokens effortlessly, with ecosystem-wide support and incentives.' },
    { label: 'Intelligent Portfolio Management & Indexes', description: 'Track, optimize, and rebalance your portfolio with AI-powered analytics and automated indexes.' },
    { label: 'DApp Store', description: 'Access a curated ecosystem of decentralized applications directly within your wallet.' },
    { label: 'Decentralized Cross-Chain Swaps', description: 'Swap assets across multiple blockchains instantly, securely and without ever giving up custody.' },
    { label: 'Crypto-to-Fiat Debit Cards', description: 'Spend your crypto anywhere with fiat-compatible debit cards linked directly to your wallet.' },
    { label: 'Integrated Loyalty Program', description: 'Unlock innovative rewards across merchants, with a customizable system designed to benefit both users and businesses.' },
    { label: 'Payment Gateway Integration', description: 'Pay or accept payments in fiat or crypto instantly, anywhere in the world.' },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="h-screen flex w-full flex-col lg:flex-row"
    >
      <div className="lg:xl:w-[50%] px-4 md:px-[70px] 3xl:px-[140px] py-4 lg:py-[60px] flex items-center lg:justify-center">
        {/* <Image 
          src="/images/wallet.jpg"
          height={468}
          width={468}
          alt=""
          className="h-auto w-[240px] md:w-[200px] lg:w-[220px] xl:w-[360px] 2xl:w-[468px] 3xl:w-[540px]"
        /> */}

        <video 
          autoplay="autoPlay" 
          loop="loop" 
          muted="muted" 
          playsinline="playsinline"
          webkit-playsinline="true" 
          className="h-auto w-[240px] md:w-[200px] lg:w-[380px] xl:w-[420px] 2xl:w-[520px] 3xl:w-[700px]"
        >
          <source src="/images/video-2-cropped.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="lg:xl:w-[50%] xl:px-[70px] 3xl:px-[140px] px-4 md:px-[70px] pb-4 lg:py-[60px] flex flex-col">
        <Image 
          src="/images/wallet-box.png"
          height={91}
          width={91}
          alt=""
          className="h-auto w-[50px] sm:w-[50px] md:w-[56px] xl:w-[82px] 2xl:w-[91px] 3xl:w-[106px]"
        />
        
        <div className="mt-4 md:mt-10 mb-10 lg:mb-12 w-fit max-w-[600px] text-wallet-nuropay-title md:text-wallet-nuropay-title-md xl:text-wallet-nuropay-title-xl 2xl:text-wallet-nuropay-title-2xl 3xl:text-wallet-nuropay-title-3xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent">
          NuroWallet: The All-in-One Wallet for Digital Finance that Thinks With You
        </div>

        <div 
          ref={scrollBoxRef} 
          className="flex-1 overflow-hidden pr-2 md:pr-4
            max-h-[calc(100vh-480px)]    
            md:max-h-[calc(100vh-500px)] 
            lg:max-h-[calc(100vh-360px)]
          "
        >
          <div ref={scrollContentRef}>
            {pointers.map((item, ind) => (
              <div key={ind + item.label} className="mb-6 md:mb-10">
                <div className="flex gap-2 text-pointer-label xl:text-pointer-label-xl 2xl:text-pointer-label-2xl 3xl:text-pointer-label-3xl w-fit bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent">
                  {item.label}
                </div>
                <div className="text-pointer-description md:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-white-60 mt-2 md:mt-2.5">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default NuroWallet;