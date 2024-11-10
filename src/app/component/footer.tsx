import React from 'react';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import Image from 'next/image';


const Footer = () => {
  return (
    <div className='bg-red-100'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     
    <Image
              src={"/assests/picture/logo-imd.png"}
              alt="H alphabet logo"
              width={100}
              height={100}
              className="w-[50px]"
            />
      <span className="ml-3 text-xl">Hiba M.Dawood</span>
    </div>
    <p className="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2
     sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-semibold">
      © 2024 MY PORTFOLIO
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      
      <Link  
      target='_blank'
      href={" https://www.instagram.com/chengsong722?igsh=YzljYTk1ODg3Zg=="}
      className='text-gray-600 text-3xl hover:text-[#DD2A7B]'
      >
        <BsInstagram />
      </Link>



      <Link  
      target='_blank'
      href={"https://www.linkedin.com/in/hiba-m-dawood/"}
      className='text-gray-600 text-3xl ml-2 hover:text-[#0077B5]'
      >
        <BsLinkedin />

      </Link>
    
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
