import Marquee from "react-fast-marquee";

const MerqueeSection = () => {

  return(
    <section className="py-[70px] xl:py-[90px] 2xl:py-[110px] 3xl:py-[130px] overflow-x-hidden">
      <Marquee direction="right">
        <div className="text-big-title md:text-big-title-md xl:text-big-title-xl 2xl:text-big-title-2xl 3xl:text-big-title-3xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent flex items-center">WE SHAPE THE FUTURE <div className="opacity-0">--</div> WE SHAPE THE FUTURE <div className="opacity-0">--</div></div>
      </Marquee>
      <Marquee>
        <div className="text-big-title md:text-big-title-md xl:text-big-title-xl 2xl:text-big-title-2xl 3xl:text-big-title-3xl bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent flex items-center">INNOVATION & EXCELLENCE <div className="opacity-0">--</div> INNOVATION & EXCELLENCE <div className="opacity-0">--</div></div>
      </Marquee>
    </section>
  )
}
export default MerqueeSection;