import Link from 'next/link';
import Image from "next/image";
import SiteContainer from './SiteContainer';

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

const Header = () => {
  return(
    <header className="absolute top-0 left-0 w-full py-10">
      <SiteContainer>
        <div className='flex items-center justify-between'>
          <Link href="/">
            <Image 
              src="/images/logo.svg"
              height={33}
              width={182}
              alt="Nurotec"
            />
          </Link>

          <div className='flex items-center gap-12'>
            {
              navLinks.map((item, index) => (
                <Link href={item.link} key={index + item.label} className='text-white-60 text-navlink 2xl:text-[18px] hover:text-white'>{item.label}</Link>
              ))
            }
          </div>
        </div>
      </SiteContainer>
    </header>
  )
}

export default Header;