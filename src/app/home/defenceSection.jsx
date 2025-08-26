import Image from "next/image";

const DefenseSection = () => {

  return(
    <section className="py-[60px] xl:pb-[160px] xl:pt-[90px] xl:pb-[180px] 2xl:pt-[110px] 2xl:pb-[220px] 3xl:pt-[130px] 3xl:pb-[260px] ">
      <div className="flex items-center gap-12 md:gap-8 xl:gap-16 2xl:gap-20 3xl:gap-[120px] flex-col lg:flex-row">
        <Image 
          src="/images/sheild-1.jpg"
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
  )
}
export default DefenseSection;