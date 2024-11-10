import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Project = () => {
  return (
    <div id='Project' className='bg-[#f1efe9]'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">
        My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-8 -mt-14">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            src={"/assests/project/cc.png"}
            width={300}
            height={300}
          className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
              Travel-website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              China-Travel
            </h1>
            <p className="leading-relaxed line-clamp-3">
            Explore Chinas wonders with our travel website, designed to offer travelers 
            insightful guides, cultural highlights, and tailored itineraries. 
            </p>
            <Link target='_blank' href={"https://china-travel-website.netlify.app/"}>
            <p className="leading-relaxed text-red-500">
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            src={"/assests/project/project.png"}
            alt="gallery"
            width={300}
            height={300}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">
              Dynamic Resume Builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Dynnamic Resume
            </h1>
            <p className="leading-relaxed line-clamp-3">
            This Dynamic Resume Builder is an interactive web tool that allows users to 
            create and customize resumes seamlessly. Built with TypeScript and HTML, it 
            provides a dynamic and user-friendly experience. 
            </p>
            <Link target='_blank' href={"https://dynamic-resume-builder-dun-iota.vercel.app/"}>
            <p className="leading-relaxed text-red-500">
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
