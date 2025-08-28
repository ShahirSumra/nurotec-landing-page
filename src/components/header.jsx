// import Link from 'next/link';
// import Image from "next/image";
// import SiteContainer from './SiteContainer';

// const navLinks = [
//   {
//     label: 'Home',
//     link: '/'
//   },
//   {
//     label: 'About',
//     link: '/about'
//   },
//   {
//     label: 'Why',
//     link: '/why'
//   },
//   {
//     label: 'Whitepaper',
//     link: '/Whitepaper'
//   },
// ]

// const Header = () => {
//   return(
//     <header className="absolute top-0 left-0 w-full py-10">
//       <SiteContainer>
//         <div className='flex items-center justify-between'>
//           <Link href="/">
//             <Image 
//               src="/images/logo.svg"
//               height={33}
//               width={182}
//               alt="Nurotec"
//               className='md:h-[33px] md:w-[182px] w-[120px] h-[21.75px]'
//             />
//           </Link>

//           <div className='flex items-center gap-6 xl:gap-10 2xl:gap-12'>
//             {
//               navLinks.map((item, index) => (
//                 <Link href={item.link} key={index + item.label} className='text-white-60 text-navlink xl:text-[16px] 2xl:text-[18px] hover:text-white'>{item.label}</Link>
//               ))
//             }
//           </div>
//         </div>
//       </SiteContainer>
//     </header>
//   )
// }

// export default Header;


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteContainer from "./SiteContainer";

const navLinks = [
  { label: "Home", link: "/#home" },
  // { label: "About", link: "/about" },
  // { label: "Why", link: "/why" },
  // { label: "Whitepaper", link: "/Whitepaper" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full py-6 z-50">
      <SiteContainer>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.svg"
              height={33}
              width={182}
              alt="Nurotec"
              className="md:h-[33px] md:w-[182px] w-[136px] h-[21.75px]"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 xl:gap-10 2xl:gap-12">
            {navLinks.map((item, index) => (
              <Link
                href={item.link}
                key={index + item.label}
                className="text-white-60 text-navlink xl:text-[16px] 2xl:text-[18px] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(true)}
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </SiteContainer>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center gap-8 text-white text-xl z-50 transform transition-all duration-500 ease-in-out
          ${mobileOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        {/* Close Icon */}
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setMobileOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Links */}
        {navLinks.map((item, index) => (
          <Link
            href={item.link}
            key={index + item.label}
            className="hover:text-blue-400 transition transform hover:scale-105"
            onClick={() => setMobileOpen(false)} // close when clicked
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
