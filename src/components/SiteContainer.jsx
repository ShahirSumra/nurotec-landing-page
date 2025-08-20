const SiteContainer = ({ children, className }) => {

  return(
    <div
      className={`2xl:max-w-[1380px] 3xl:max-w-[1680px] xl:max-w-[1180px] mx-auto w-full ${className}`}
    >
      {children}
    </div>
  )
}
export default SiteContainer;