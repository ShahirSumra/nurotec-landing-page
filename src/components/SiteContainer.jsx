const SiteContainer = ({ children, className }) => {

  return(
    <div
      className={`px-4 md:px-8 xl:px-4 xl:max-w-[1140px] 2xl:max-w-[1380px] 3xl:max-w-[1680px] xl:max-w-[1180px] mx-auto w-full ${className}`}
    >
      {children}
    </div>
  )
}
export default SiteContainer;