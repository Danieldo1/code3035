import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const HeroBtn = ({onClick}) => {

    const router = useRouter();

    const navigateToMenuPage = () => {
        onClick(true); // Show the loading overlay
        // Delay the navigation
        setTimeout(() => {
          router.push('/menu-page');
        }, 2000); // 2 second delay
      };

  return (
    <div>
         <Link href="/menu-page" onClick={navigateToMenuPage} >
          <button className="relative  inline-flex items-center justify-center px-4 py-2 font-medium text-black transition duration-200 ease-out bg-white border-2 border-black group">
            <span className="absolute  inset-0 w-full h-full transition duration-200 ease-out transform bg-white translate-x-1.5 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute  inset-0 w-full h-full transition duration-200 ease-out bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative z-10 transition duration-200 ease-out group-hover:text-white">
              Explore Bar
            </span>
          </button>
        </Link>
    </div>
  )
}

export default HeroBtn