import Header from "../../components/header";
import Title from "@/components/title";
import SiteContainer from "@/components/SiteContainer";

const HeroSection = () => {

  return(
    <section id="home" className="relative h-screen flex items-center justify-center">
      <Header />

      <video 
        autoplay
        muted
        playsinline
        loop
        webkit-playsinline="true"
        x-webkit-airplay="allow"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/images/hero-bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="bg-[linear-gradient(0deg,#000_21.33%,rgba(0,0,0,0)_79.26%)] h-[162px] absolute bottom-0 left-0 w-full z-10" />

      <SiteContainer className="flex items-center justify-center flex-col relative z-10">
        <div className="xl:max-w-[664px] 3xl:max-w-[725px] mx-auto">
          <Title>
            Nurotek powers the foundation of tomorrow’s digital economy
          </Title>
          <div className="text-description text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-white-60 text-center mt-5 mx-auto">
            Nurotek redefines how value is created across digital finance. It's an innovative AI infrastructure where value and intelligence grow together.
          </div>
        </div>

        {/* <button
          className="rounded-[8px] text-button xl:text-[14px] 3xl:text-[20px] 
          py-3 px-8 xl:py-3.5 xl:px-10 3xl:py-4.5 3xl:px-11 mt-10 3xl:mt-14
          bg-[linear-gradient(105deg,#0BC9FD_-58.58%,#25D7F7_3.62%,#2882F0_65.83%)]
          bg-[length:200%_200%] transition-all duration-200
          hover:animate-gradientFlow"
        >
          Launch App
        </button> */}
      </SiteContainer>
    </section>
  )
}
export default HeroSection;