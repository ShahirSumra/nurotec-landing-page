import SiteContainer from "@/components/SiteContainer";
import Header from "../../components/header";
import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";

const ProductCards = [
  {
    title: 'Nuro chain',
    description: 'A high-performance blockchain built for speed, scalability, and trustless innovation. Designed to be energy-efficient and future-proof, Nuro Chain is the foundation for next-gen finance, commerce, and AI integration.',
    icon: '/images/link.png'
  },
  {
    title: 'Nuro Wallet',
    description: 'Your secure digital vault. The Nuro Wallet combines ease-of-use with next-gen security, giving you control over digital assets, loyalty rewards, and cross-chain tokens, all in one intuitive interface.',
    icon: '/images/link.png'
  },
  {
    title: 'Nuro Pay',
    description: 'Revolutionizing payments. Nuro Pay enables merchants and users to transact instantly with fiat or crypto, anywhere in the world. Secure, low-fee, and global by design.',
    icon: '/images/link.png'
  },
]

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

const navLinks = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'About',
    link: '/about'
  },
  {
    label: 'Why',
    link: '/why'
  },
  {
    label: 'Whitepaper',
    link: '/Whitepaper'
  },
]

const HomePage = () => {

  return(
    <main>
      <section className="bg-[url('/images/top-bg.jpg')] bg-cover h-screen flex items-center justify-center">
        <Header />

        <SiteContainer className="flex items-center justify-center flex-col">
          <Title>
            The Future of Money <br />
            and Intelligence is Decentralized
          </Title>

          <div className="text-description-xl text-white-60 text-center mt-5 max-w-[664px] mx-auto">
            A new economic and AI infrastructure where value and intelligence grow together, borderless, censorship-resistant, and owned by no one.
          </div>

          <button
            className="rounded-[8px] bg-[linear-gradient(105deg,#0BC9FD_-58.58%,#25D7F7_3.62%,#2882F0_65.83%)] text-button-2xl py-3.5 px-10 mt-10"
          >
            Launch App
          </button>
        </SiteContainer>
      </section>

      <section className="pt-[130px] pb-[110px]">
        <SiteContainer>
          <Title>
            Bringing the utilities <br /> that matters.
          </Title>

          <div className="flex gap-5 mt-10">
            {
              ProductCards.map((item, index) => (
                <div className="bg-[url('/images/product-card-bg.png')] bg-[length:100%_100%] h-[320px] w-full flex flex-col items-center justify-center p-8" key={index  +  item.title}>
                  <Image 
                    src={item.icon}
                    height={50}
                    width={50}
                    alt={item.title}
                  />

                  <div className="mt-10 mb-3.5 text-product-title-2xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">{item.title}</div>

                  <div className="text-product-description-2xl text-white-50 text-center">{item.description}</div>
                </div>
              ))
            }
          </div>
        </SiteContainer>
      </section>

      <section className="py-[114px]">
        <SiteContainer>
          <Title>Guarding What Matters Most</Title>

          <div className="grid grid-cols-3 gap-5 mt-10">
            {
              FeturesCards.map((item, i) => (
                <div className="bg-[url('/images/features-card-bg.png')] rounded-[18px] bg-[length:100%_100%] px-[30px] py-[38px]" key={item.title + i}>
                  <Image 
                    src={item.icon}
                    height={36}
                    width={36}
                    alt=""
                  />

                  <div className="text-features-title-2xl text-white mt-10 max-w-[252px] h-[52px]">{item.title}</div>
                  <Link href={item.link} className="flex items-center gap-2 text-white-50 mt-3.5 hover:text-white">
                    Learn More 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clipPath="url(#clip0_1_98)">
                        <path d="M11.8769 7.4147L5.20174 0.739632C5.04736 0.585121 4.84126 0.5 4.62151 0.5C4.40175 0.5 4.19566 0.585121 4.04127 0.739632L3.54968 1.23109C3.22981 1.55133 3.22981 2.07182 3.54968 2.39157L9.15501 7.99689L3.54347 13.6084C3.38908 13.7629 3.30383 13.9689 3.30383 14.1885C3.30383 14.4084 3.38908 14.6144 3.54347 14.769L4.03505 15.2604C4.18956 15.4149 4.39553 15.5 4.61529 15.5C4.83504 15.5 5.04114 15.4149 5.19553 15.2604L11.8769 8.5792C12.0317 8.4242 12.1167 8.21725 12.1162 7.99726C12.1167 7.7764 12.0317 7.56958 11.8769 7.4147Z" fill="white" fillOpacity="0.5"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_98">
                          <rect width="15" height="15" fill="white" transform="translate(0.210022 0.5)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              ))
            }
          </div>
        </SiteContainer>
      </section>

      <section className="pb-[110px]">
        <SiteContainer>
          <div className="flex gap-[100px] justify-between">
            <div className="max-w-[485px]">
              <Image 
                src="/images/link-image.png"
                height={135}
                width={255}
                alt=""
                className="mb-[68px]"
              />
              <div className="text-cross-chain-title-2xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent">
                Seamless cross chain functionalities with other chains
              </div>

              <div className="text-description-xl max-w-[430px] text-white-60 mt-4">
                A new economic and AI infrastructure where value and intelligence grow together, borderless, censorship-resistant, and owned by no one.
              </div>
            </div>

            <Image 
              src="/images/boxes.png"
              height={538}
              width={684}
              alt=""
            />
          </div>
        </SiteContainer>
      </section>

      <section className="py-[110px] overflow-x-hidden">
        <div className="-ml-10 text-big-title-2xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent">WE SHAPE THE FUTURE</div>
        <div className="text-right -mr-[100px] text-big-title-2xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent">INNOVATION & EXCELLENCE</div>
      </section>

      <section className="pt-[110px] pb-[220px]">
        <div className="flex items-center gap-20">
          <Image 
            src="/images/sheild.png"
            height={422}
            width={701}
            alt=""
          />

          <div className="max-w-[559px]">
            <Image 
              src="/images/nurolink-icon.png"
              height={91}
              width={91}
              alt=''
            />
            <div className="text-cross-chain-title-2xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent mt-[68px]">AI-Driven Security for Unmatched Protection</div>
            <div className="text-description-xl max-w-[430px] text-white-60 mt-4">
              Smart, adaptive, and autonomous: Nurotek’s AI-powered defense anticipates threats before they happen. Backed by decentralized blockchain security, your assets and transactions stay protected at every layer.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#060606] pt-[60px] pb-[46px]">
        <div className="relative w-full h-[300px]">
          <Image
            src="/images/nurotec-big-text.png"
            alt="Big Text"
            fill
            className="object-contain" 
            priority
          />
        </div>
        <div className="border-t border-t-white-10 mb-12"></div>
        <SiteContainer>
          <div className="flex items-center justify-between">
            <Image
              src="/images/nurotec-white.svg"
              alt="Big Text"
              height={17}
              width={138}
              className="object-contain" 
              priority
            />
            <div className='flex items-center gap-12'>
              {
                navLinks.map((item, index) => (
                  <Link href={item.link} key={index + item.label} className='text-white-60 text-navlink 2xl:text-[18px] hover:text-white'>{item.label}</Link>
                ))
              }
            </div>
          </div>

        </SiteContainer>
      </section>
    </main>
  )
}
export default HomePage;