import SiteContainer from "@/components/SiteContainer";
import Header from "../../components/header";
import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import ProductCards from "./productCards";
import Features from "./features";

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

          <div className="text-description text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-white-60 text-center mt-5 xl:max-w-[664px] 3xl:max-w-[725px] mx-auto">
            A new economic and AI infrastructure where value and intelligence grow together, borderless, censorship-resistant, and owned by no one.
          </div>

          <button
            className="rounded-[8px] text-button xl:text-[14px] 3xl:text-[20px] 
            py-3 px-8 xl:py-3.5 xl:px-10 3xl:py-4.5 3xl:px-11 mt-10 3xl:mt-14
            bg-[linear-gradient(105deg,#0BC9FD_-58.58%,#25D7F7_3.62%,#2882F0_65.83%)]
            bg-[length:200%_200%] transition-all duration-200
            hover:animate-gradientFlow"
          >
            Launch App
          </button>
        </SiteContainer>
      </section>

      <ProductCards />

      <Features />

      <section className="pb-[80px] xl:pb-[90px] 2xl:pb-[110px] 3xl:pb-[130px]">
        <SiteContainer>
          <div className="flex xl:gap-[100px] gap-[60px] 3xl:gap-[120px] justify-between flex-col md:flex-row">
            <div className="2xl:max-w-[485px] 3xl:max-w-[600px]">
              <Image 
                src="/images/link-image.png"
                height={135}
                width={255}
                alt=""
                className="mb-11 xl:mb-[58px] 2xl:mb-[68px] 3xl:mb-[78px] h-[100px] w-[167px] xl:h-[120px] xl:w-[226px] 2xl:h-[135px] 2xl:w-[255px] 3xl:h-[155px] 3xl:w-[292.7px]"
              />
              <div className="text-cross-chain-title md:text-cross-chain-title-md xl:text-cross-chain-title-xl 2xl:text-cross-chain-title-2xl 3xl:text-cross-chain-title-3xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent">
                Seamless cross chain functionalities with other chains
              </div>

              <div className="text-description text-[14px] 2xl:text-[16px] 3xl:text-[18px] max-w-[430px] text-white-60 mt-4">
                A new economic and AI infrastructure where value and intelligence grow together, borderless, censorship-resistant, and owned by no one.
              </div>
            </div>

            <Image 
              src="/images/boxes.png"
              height={538}
              width={684}
              alt=""
              className="w-full h-auto md:w-[300px] md:h-[260px] xl:h-auto xl:w-auto"
            />
          </div>
        </SiteContainer>
      </section>

      <section className="pb-[80px] xl:pb-[90px] 2xl:pb-[110px] 3xl:pb-[130px]">
        <SiteContainer>
          <div className="xl:gap-[220px] gap-[60px] 3xl:gap-[320px] md:flex md:items-center">
            <div className="2xl:max-w-[485px] 3xl:max-w-[600px] md:w-50">
              <Image 
                src="/images/wallet.png"
                height={144}
                width={116}
                alt=""
                className="mb-11 xl:mb-[58px] 2xl:mb-[68px] 3xl:mb-[78px] h-[90.58px] w-[78px] xl:h-[124px] xl:w-[96px] 2xl:h-[144px] 2xl:w-[116px] 3xl:h-[215.5px] 3xl:w-[174px]"
              />
              <div className="text-cross-chain-title md:text-cross-chain-title-md xl:text-cross-chain-title-xl 2xl:text-cross-chain-title-2xl 3xl:text-cross-chain-title-3xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent">
                Payment Gateway
              </div>

              <div className="text-description text-[14px] 2xl:text-[16px] 3xl:text-[18px] max-w-[430px] text-white-60 mt-4">
                Nurotek doesn’t lock you in. Our protocol is natively interoperable with leading chains, so you can transfer assets, settle payments, and deploy apps across ecosystems without friction.
              </div>
            </div>

            <Image 
              src="/images/PG.png"
              height={334}
              width={522}
              className="w-full h-auto 
                        max-w-[320px]
                        md:max-w-[300px] 
                        xl:max-w-[424px] 
                        2xl:max-w-[522px] 
                        3xl:max-w-[680px]
                        mt-10 md:mt-0
                        "
            />
            {/* <div className="flex justify-center md:w-50">
            </div> */}
          </div>
        </SiteContainer>
      </section>

      <section className="py-[80px] xl:py-[90px] 2xl:py-[110px] 3xl:py-[130px] overflow-x-hidden">
        <Marquee direction="right">
          <div className="text-big-title md:text-big-title-md xl:text-big-title-xl 2xl:text-big-title-2xl 3xl:text-big-title-3xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent flex items-center">WE SHAPE THE FUTURE <div className="opacity-0">--</div> WE SHAPE THE FUTURE <div className="opacity-0">--</div></div>
        </Marquee>
        <Marquee>
          <div className="text-big-title md:text-big-title-md xl:text-big-title-xl 2xl:text-big-title-2xl 3xl:text-big-title-3xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent flex items-center">INNOVATION & EXCELLENCE <div className="opacity-0">--</div> INNOVATION & EXCELLENCE <div className="opacity-0">--</div></div>
        </Marquee>
      </section>

      <section className="pt-[80px] pb-[80px] xl:pb-[160px] xl:pt-[90px] xl:pb-[180px] 2xl:pt-[110px] 2xl:pb-[220px] 3xl:pt-[130px] 3xl:pb-[260px] ">
        <div className="flex items-center gap-12 md:gap-8 xl:gap-16 2xl:gap-20 3xl:gap-[120px] flex-col md:flex-row">
          <Image 
            src="/images/sheild.png"
            height={422}
            width={701}
            alt=""
            className="w-full h-auto md:w-[564px] xl:w-[680px] 2xl:w-[740px] 3xl:w-[820px] 4xl:w-[920px] 4xl:h-auto"
          />

          <div className="max-w-[559px] px-4 xl:px-0">
            <Image 
              src="/images/nurolink-icon.png"
              height={91}
              width={91}
              alt=''
              className="h-14 w-14 xl:h-16 xl:w-16 2xl:h-[91px] 2xl:w-[91px] 3xl:h-[110px] 3xl:w-[110px]"
            />
            <div className="text-cross-chain-title md:text-cross-chain-title-md xl:text-cross-chain-title-xl 2xl:text-cross-chain-title-2xl 3xl:text-cross-chain-title-3xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent mt-10 xl:mt-12 2xl:mt-[68px]">AI-Driven Security for Unmatched Protection</div>
            <div className="text-description text-[14px] 2xl:text-[16px] 3xl:text-[18px] max-w-[430px] text-white-60 mt-4">
              Smart, adaptive, and autonomous: Nurotek’s AI-powered defense anticipates threats before they happen. Backed by decentralized blockchain security, your assets and transactions stay protected at every layer.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#090909] pt-11 xl:pt-12 2xl:pt-[60px] 3xl:pt-[70px] pb-8 xl:pb-[44px] 3xl:pb-[54px]">
        <div className="relative w-full h-[110px] md:h-[200px] xl:h-[280px] 2xl:h-[320px] 3xl:h-[375px] flex items-center justify-center">
          <Image
            src="/images/nurotec-big-text.png"
            alt="Big Text"
            fill
            className="object-contain" 
            priority
          />
        </div>

        <div className="border-t border-t-white-10 mb-8 xl:mb-10 2xl:mb-12 3xl:mb-14"></div>
        <SiteContainer>
          <div className="flex items-center justify-between flex-col md:flex-row">
            <Image
              src="/images/nurotec-white.svg"
              alt="Big Text"
              height={17}
              width={138}
              className="object-contain" 
              priority
            />
            <div className='flex items-center gap-6 xl:gap-10 2xl:gap-12 mt-10 md:mt-0'>
              {
                navLinks.map((item, index) => (
                  <Link href={item.link} key={index + item.label} className='text-white-60 text-navlink xl:text-[16px] 2xl:text-[18px] hover:text-white'>{item.label}</Link>
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