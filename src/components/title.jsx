const Title = ({children}) => {

  return(
    <h2 className="w-fit mx-auto bg-[linear-gradient(172deg,#FFF_50.59%,#2E689D_111.17%)] bg-clip-text text-transparent text-center text-main-title md:text-main-title-md xl:text-main-title-xl 2xl:text-main-title-2xl 3xl:text-main-title-3xl ">
      {children}
    </h2>
  )
}
export default Title;