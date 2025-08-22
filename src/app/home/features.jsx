"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteContainer from "@/components/SiteContainer";
import Title from "@/components/title";

gsap.registerPlugin(ScrollTrigger);

const FeturesCards = [
  {
    title: 'Autonomous Demand Engine (ADE)',
    icon: '/images/link-white.svg',
    link: '/'
  },
{
    title: 'Next Gen AI Wallet',
    icon: '/images/link-white.svg',
    link: '/'
  },
  {
    title: 'Sound Digital Money (SDM):',
    icon: '/images/link-white.svg',
    link: '/'
  },
  {
    title: 'Deflation and Scarcity Mechanisms',
    icon: '/images/link-white.svg',
    link: '/'
  },
  {
    title: 'Protocol-Based Loyalty',
    icon: '/images/link-white.svg',
    link: '/'
  },
  {
    title: 'NuroPay Payment Gateway',
    icon: '/images/link-white.svg',
    link: '/'
  },
]

const Features = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current.length) {
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentNode, // wrapper grid
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <section className="py-[80px] xl:py-[90px] 2xl:py-[110px] 3xl:py-[130px]">
      <SiteContainer>
        <Title>Guarding What Matters Most</Title>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5 mt-10">
          {FeturesCards.map((item, i) => (
            <div
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              key={item.title + i}
              className="bg-[url('/images/features-card-bg.png')] rounded-[18px] bg-[length:100%_100%] px-6 py-8 xl:px-[30px] xl:py-[38px] 3xl:px-[36px] 3xl:py-[44px]"
            >
              <Image
                src={item.icon}
                height={36}
                width={36}
                alt=""
                className="w-7 h-7 md:h-8 md:w-8 2xl:h-9 2xl:w-9 3xl:h-10 3xl:w-10"
              />

              <div className="text-features-title xl:text-features-title-xl 2xl:text-features-title-2xl 3xl:text-features-title-3xl text-white mt-6 xl:mt-8 2xl:mt-10 3xl:mt-12 max-w-[210px] xl:max-w-[230px] 2xl:max-w-[252px] h-[44px] 2xl:h-[52px] 3xl:h-[57px]">
                {item.title}
              </div>

              <Link
                href={item.link}
                className="flex items-center gap-2 text-white-50 mt-3 2xl:mt-3.5 3xl:mt-4 hover:text-white text-learn-more xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-3 w-3 2xl:h-4 2xl:w-4 3xl:h-5 3xl:w-5"
                >
                  <g clipPath="url(#clip0_1_98)">
                    <path
                      d="M11.8769 7.4147L5.20174 0.739632C5.04736 0.585121 4.84126 0.5 4.62151 0.5C4.40175 0.5 4.19566 0.585121 4.04127 0.739632L3.54968 1.23109C3.22981 1.55133 3.22981 2.07182 3.54968 2.39157L9.15501 7.99689L3.54347 13.6084C3.38908 13.7629 3.30383 13.9689 3.30383 14.1885C3.30383 14.4084 3.38908 14.6144 3.54347 14.769L4.03505 15.2604C4.18956 15.4149 4.39553 15.5 4.61529 15.5C4.83504 15.5 5.04114 15.4149 5.19553 15.2604L11.8769 8.5792C12.0317 8.4242 12.1167 8.21725 12.1162 7.99726C12.1167 7.7764 12.0317 7.56958 11.8769 7.4147Z"
                      fill="white"
                      fillOpacity="0.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_98">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.210022 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
};

export default Features;
