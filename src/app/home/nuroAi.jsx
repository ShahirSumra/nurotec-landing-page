"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NuroAi = () => {
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
    { label: 'Real-Time Market Insights', description: 'Live, AI-driven intelligence across crypto, equities, and global markets.' },
    { label: 'Advanced Analytics & Forecasting', description: 'Predictive models uncover opportunities and risks before the market reacts.' },
    { label: 'AI-Curated Portfolios', description: 'Build, manage, and rebalance portfolios with automated, optimized diversification strategies.' },
    { label: 'Instant Token Creation', description: 'Launch fully functional tokens in seconds, with no coding required.' },
    { label: 'Seamless Transactions & Cross-Chain Swaps', description: 'Execute trades, payments, and swaps instantly while retaining full custody.' },
    { label: 'Integrated Risk Management', description: 'Smart alerts and automated safeguards protect portfolios from volatility.' },
    { label: 'Personalized Strategy Builder', description: 'AI tailors financial strategies to your goals, risk tolerance, and preferences.' },
    { label: 'Smart Transaction Automation', description: 'Predefined rules allow your AI to buy, sell, swap, or launch tokens automatically.' },
    { label: 'Natural Language Commands', description: 'Manage assets, request insights, or launch actions simply by chatting with your AI.' },
    { label: 'Adaptive Learning', description: 'Evolves with your behavior and continuously refines recommendations over time.' },
    { label: 'Integrated Loyalty & Rewards', description: 'Directly connects with merchant ecosystems to maximize benefits across payments and commerce.' },
    { label: 'Lifestyle Integration', description: 'Extends beyond finance to become your intelligent daily companion for digital life management.' },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="h-screen flex w-full flex-col lg:flex-row lg:border-y lg:border-white/20"
    >
      <div className="lg:xl:w-[50%] lg:border-r lg:border-white/20 px-4 md:px-[70px] 3xl:px-[140px] py-4 pt-10 lg:py-[60px] flex items-center lg:justify-center">
        <Image 
          src="/images/nuro-ai.jpg"
          height={422}
          width={422}
          alt=""
          className="h-auto w-[240px] md:w-[200px] lg:w-[220px] xl:w-[360px] 2xl:w-[468px] 3xl:w-[540px]"
        />
      </div>

      <div className="lg:xl:w-[50%] xl:px-[70px] 3xl:px-[140px] px-4 md:px-[70px] pb-4 lg:py-[60px] flex flex-col">
        <Image 
          src="/images/ai-box.png"
          height={91}
          width={91}
          alt=""
          className="h-auto w-[50px] sm:w-[50px] md:w-[56px] xl:w-[82px] 2xl:w-[91px] 3xl:w-[106px]"
        />
        
        <div className="mt-4 md:mt-10 mb-6 md:mb-8 lg:mb-10 w-fit max-w-[600px] text-wallet-nuropay-title md:text-wallet-nuropay-title-md xl:text-wallet-nuropay-title-xl 2xl:text-wallet-nuropay-title-2xl 3xl:text-wallet-nuropay-title-3xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent">
          NuroAI - The Intelligent Financial Agent of the Future
        </div>

        <div 
          ref={scrollBoxRef} 
          className="flex-1 overflow-hidden pr-2 md:pr-4
            max-h-[calc(100vh-460px)]    
            md:max-h-[calc(100vh-500px)] 
            lg:max-h-[calc(100vh-360px)]
          "
        >
          <div ref={scrollContentRef}>
            {pointers.map((item, ind) => (
              <div key={ind + item.label} className="mb-6 md:mb-10">
                <div className="flex gap-2 text-pointer-label xl:text-pointer-label-xl 2xl:text-pointer-label-2xl 3xl:text-pointer-label-3xl w-fit bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent">
                  <span className="h-1 w-1 rounded-full bg-white mt-[7px] md:mt-2 shrink-0" />{item.label}
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

export default NuroAi;