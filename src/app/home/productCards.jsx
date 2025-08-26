"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteContainer from "@/components/SiteContainer";
import Title from "@/components/title";

gsap.registerPlugin(ScrollTrigger);

const ProductCard = [
  {
    title: 'Nuro Chain',
    description: 'A high-performance blockchain with cross-chain interoperability built for speed, scalability, and trustless innovation. Designed to be energy-efficient and future-proof, NuroChain is where finance, borderless commerce, and AI-driven innovation converge to form a cutting-edge digital infrastructure.',
    icon: '/images/link.png'
  },
  {
    title: 'Nuro Wallet',
    description: 'NuroWallet is the self-custodied, AI-driven portal to modern finance, seamlessly uniting ease-of-use, next-gen functionality, security, with total control over assets, payments, rewards, and cross-chain transactions in a single platform.',
    icon: '/images/nuro-wallet.png'
  },
  {
    title: 'Nuro Pay',
    description: 'Revolutionizing payments. NuroPay empowers merchants and users to transact instantly with fiat or crypto, anywhere in the world. Secure, low-fee, and global by design with a customizable loyalty program offering unprecedented rewards benefiting both merchants and users.',
    icon: '/images/credit-card.png'
  },
]

const ProductCards = () => {

  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0]?.parentNode, // the grid wrapper
        start: "top 80%", // when 80% of viewport hits section
      },
    });
  }, []);

  return(
    <section className="py-[70px] xl:py-[90px] 2xl:py-[110px] 3xl:py-[130px]">
      <SiteContainer>
        <div className="max-w-[900px] mx-auto text-center">
          <Title>
            The Ecosystem That Empowers You With Every Action
          </Title>

          <div className="text-description text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-white-60 mt-4">
            The Ecosystem That Will Shape Tomorrow, Brought to You Today
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {ProductCard.map((item, index) => (
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              key={index + item.title}
              className="bg-[url('/images/product-card-bg.png')] bg-[length:100%_100%] h-[260px] xl:h-[280px] 2xl:h-[320px] 3xl:h-[340px] w-full flex flex-col items-center justify-center p-6 2xl:p-8 3xl:p-10"
            >
              <Image
                src={item.icon}
                height={50}
                width={50}
                alt={item.title}
                className="w-[32px] h-[32px] md:h-[44px] md:w-[44px] 2xl:h-[50px] 2xl:w-[50px] 3xl:h-[58px] 3xl:w-[58px]"
              />

              <div className="mt-8 mb-3 xl:mt-10 xl:mb-3.5 3xl:mt-11 3xl:mb-5 text-product-title xl:text-product-title-xl 2xl:text-product-title-2xl 3xl:text-product-title-3xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
                {item.title}
              </div>

              <div className="text-product-description xl:text-[14px] 3xl:text-[16px] text-white-50 text-center">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  )
}
export default ProductCards;