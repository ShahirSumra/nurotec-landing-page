import HeroSection from "./heroSection";
import ProductCards from "./productCards";
import NuroWallet from "./nuroWallet";
import NuroPay from "./nuroPay";
import NuroAi from "./nuroAi";
import MerqueeSection from "./merqueeSection";
import Footer from "./footer";
import DefenseSection from "./defenceSection";

const HomePage = () => {

  return(
    <main>

      <HeroSection />

      <ProductCards />

      {/* <Features /> */}

      <NuroWallet />

      <NuroPay />

      <NuroAi />

      <MerqueeSection />

      <DefenseSection />

      <Footer />
    </main>
  )
}
export default HomePage;

{/* <section className="pb-[80px] xl:pb-[90px] 2xl:pb-[110px] 3xl:pb-[130px]">
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
</section> */}