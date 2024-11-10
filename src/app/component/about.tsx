import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto "
        alt="hero"
        src={"/assests/picture/about.jpg"}
        width={400}
        height={300}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-800">
        About Me
        
      </h1>
      <div className="w-[170px] h-[2px] bg-gray-700"></div>
      <p className="mb-8 leading-relaxed">
        I am Hiba Muhammad Dawood, a dedicated web developer with a strong foundation in HTML, CSS, TypeScript, 
        and Next.js. I am passionate about creating dynamic, responsive, and visually engaging websites that offer 
        seamless user experiences. I focus on bringing innovative ideas to life, from interactive web applications 
        to sophisticated design layouts, ensuring a blend of functionality and aesthetics. With a commitment to 
        continuous learning and improving my technical skills, I am excited to tackle new challenges and push the 
        boundaries of web development.
      </p>
      <div className="flex justify-center">
        <Link href={"#"}>
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none
         hover:bg-red-600 rounded text-lg">
          View CV
        </button>
        </Link>
    
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
