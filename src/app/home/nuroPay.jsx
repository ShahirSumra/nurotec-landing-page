"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NuroPay = () => {
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
    { label: 'Fast Onboarding Across Industries', description: 'Get started quickly with seamless integration tailored to any sector or business model.' },
    { label: 'Accepts Debit, Credit, Crypto & ACH', description: 'One gateway for every transaction method, seamlessly bridging traditional and digital payments.' },
    { label: 'Chargeback-Prevention by Design', description: 'Advanced fraud protection and dispute management keep merchants secure and profitable. Crypto <> Fiat Conversion Convert between crypto and fiat, enabling borderless payments in any currency.' },
    { label: 'Off-Chain Speed, On-Chain Transparency', description: 'Lightning-fast off-chain payments fully tracked and verifiable on-chain.' },
    { label: 'Customizable Next-Gen Loyalty Program', description: 'Tailor rewards with never-before-seen benefits that empower both merchants and customers.' },
    { label: 'Deflationary Loyalty Points', description: 'Every transaction earns loyalty rewards that gain value over time, creating lasting customer engagement.' },
    { label: 'Revenue-Generating for Merchants', description: 'Transform payments from a cost center into a profit engine with built-in yield mechanics.' },
    { label: 'Built-In Retention Model', description: 'Keep customers coming back through smart incentives and loyalty-driven engagement.' },
    { label: 'Cross-Channel Global Marketing', description: 'Expand reach and visibility through integrated, data-driven marketing across channels.' },
    { label: 'Card Issuance', description: 'Offer branded debit or credit cards directly linked to merchant and user ecosystems.' },
    { label: 'Benefit from Network Adoption', description: 'As the ecosystem grows, every participant shares in the upside.' },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="h-screen flex w-full flex-col lg:flex-row lg:border-y lg:border-white/20"
    >
      <div className="order-2 lg:order-1 lg:w-[50%] lg:border-r lg:border-white/20 px-4 md:px-[70px] 3xl:px-[140px] pb-4 md:py-6 lg:py-[60px] flex flex-col">
        <Image 
          src="/images/nuropay-box.png"
          height={91}
          width={91}
          alt=""
          className="h-auto w-[50px] sm:w-[50px] md:w-[56px] lg:w-[72px] xl:w-[82px] 2xl:w-[91px] 3xl:w-[106px]"
        />
        
        <div className="mt-4 md:mt-8 lg:mt-12 mb-10 lg:mb-12 w-fit max-w-[600px] text-wallet-nuropay-title md:text-wallet-nuropay-title-md xl:text-wallet-nuropay-title-xl 2xl:text-wallet-nuropay-title-2xl 3xl:text-wallet-nuropay-title-3xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent">
          NuroPay: The Smarter Payment Gateway for a Connected Economy
        </div>

        <div 
          ref={scrollBoxRef} 
          className="
            flex-1 overflow-hidden pr-2 md:pr-3 lg:pr-4
            max-h-[calc(100vh-500px)]    
            md:max-h-[calc(100vh-500px)] 
            lg:max-h-[calc(100vh-360px)]
          "
        >
          <div ref={scrollContentRef}>
            {pointers.map((item, ind) => (
              <div key={ind + item.label} className="mb-6 md:mb-8 lg:mb-10">
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

      <div className="order-1 lg:order-2 lg:w-[50%] px-4 md:px-8 lg:px-[70px] 3xl:px-[140px] py-4 pt-10 md:py-8 lg:py-[60px] flex items-center lg:justify-center">
        <Image 
          src="/images/payment-gateway.jpg"
          height={224}
          width={335}
          alt=""
          className="h-auto h-auto w-[240px] md:w-[200px] lg:w-[220px] xl:w-[360px] 2xl:w-[468px] 3xl:w-[540px] shrink-0"
        />
      </div>
    </section>
  )
};

export default NuroPay;