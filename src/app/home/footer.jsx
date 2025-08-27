import SiteContainer from "@/components/SiteContainer";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    label: 'Home',
    link: '/#home'
  },
  // {
  //   label: 'Whitepaper',
  //   link: '/Whitepaper'
  // },
]

const Footer = () => {

  return(
    <footer className="bg-[#090909] pt-6 xl:pt-12 2xl:pt-10 3xl:pt-[60px] pb-8 xl:pb-[44px] 3xl:pb-[54px] overflow-hidden">
      <div className="relative overflow-hidden w-full h-[110px] md:h-[200px] xl:h-[280px] 2xl:h-[320px] 3xl:h-[375px] flex items-center justify-center">
        <Image
          src="/images/NUROTEK-text.png"
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
          
          <div className="flex items-center gap-6 md:gap-12 mt-6 md:mt-0 flex-col md:flex-row">
            <div className='flex items-center gap-6 xl:gap-10 2xl:gap-12'>
              {
                navLinks.map((item, index) => (
                  <Link href={item.link} key={index + item.label} className='text-white-60 text-navlink xl:text-[16px] 2xl:text-[18px] hover:text-white'>{item.label}</Link>
                ))
              }
            </div>

            <div className="flex items-center gap-3 md:gap-3.5">
              <button 
                className="border border-white-20 rounded-md h-8 w-8 md:h-9 md:w-9 group flex items-center justify-center hover:border-blue transition-colors"
                onClick={() => window.open("_blank", '/')}
              >
                <svg width="26" height="26" className="md:w-[26px] md:h-[26px] w-[22px] h-[22px]" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-white group-hover:fill-blue transition-colors" d="M14.7064 12.042L21.4081 4.41943H19.8202L13.9985 11.0366L9.35219 4.41943H3.99194L11.0197 14.4267L3.99194 22.4194H5.5798L11.7238 15.4298L16.6317 22.4194H21.9919L14.7064 12.042ZM12.5309 14.5145L11.8178 13.5174L6.15242 5.59075H8.5917L13.1652 11.9902L13.8753 12.9873L19.8194 21.3052H17.3802L12.5309 14.5145Z" fill="white"/>
                </svg>
              </button>

              <button 
                className="border border-white-20 rounded-md h-8 w-8 md:h-9 md:w-9 group flex items-center justify-center hover:border-blue transition-colors"
                onClick={() => window.open("_blank", '/')}
              >
                <svg width="26" height="26" className="md:w-[26px] md:h-[26px] w-[22px] h-[22px]" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-white group-hover:fill-blue transition-colors" d="M23.392 23.4002V15.7822C23.392 12.0382 22.5859 9.17822 18.218 9.17822C16.112 9.17822 14.708 10.3222 14.136 11.4142H14.084V9.51622H9.94995V23.4002H14.266V16.5102C14.266 14.6902 14.604 12.9482 16.84 12.9482C19.05 12.9482 19.076 15.0022 19.076 16.6142V23.3742H23.392V23.4002Z" fill="white"/>
                  <path className="fill-white group-hover:fill-blue transition-colors" d="M2.92993 9.51611H7.24593V23.4001H2.92993V9.51611Z" fill="white"/>
                  <path className="fill-white group-hover:fill-blue transition-colors" d="M5.08792 2.6001C3.70992 2.6001 2.59192 3.7181 2.59192 5.0961C2.59192 6.4741 3.70992 7.6181 5.08792 7.6181C6.46592 7.6181 7.58392 6.4741 7.58392 5.0961C7.58392 3.7181 6.46592 2.6001 5.08792 2.6001Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </SiteContainer>
    </footer>
  )
}
export default Footer;