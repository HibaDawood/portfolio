import React from "react";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { MdOutlineDiamond } from "react-icons/md";
import { IoLogoHtml5 } from "react-icons/io";
import { RiNextjsLine } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="skills" className="bg-[#f2d3cc]">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600 ">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[4rem]">
            {/* skill 1 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-red-50 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-red-500 text-white flex-shrink-0 text-2xl"
                  >
                    <IoLogoHtml5 />
                  </div>
                  <h2 className="text-gray-600 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-red-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-gray-600 text-right">100%</p>
                </div>
              </div>
            </div>

            {/* skill 2 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-red-50 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-red-500 text-white flex-shrink-0 text-2xl"
                  >
                    <IoLogoCss3 />
                  </div>
                  <h2 className="text-gray-600 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-red-500 h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-gray-600 text-right">95%</p>
                </div>
              </div>
            </div>

            {/* skill 3 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-red-50 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-red-500 text-white flex-shrink-0 text-2xl"
                  >
                    <TbBrandTypescript />
                  </div>
                  <h2 className="text-gray-600 text-lg title-font font-medium">
                    JavaScript/TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-red-500 h-1 rounded-xl w-[75%]"></div>
                  </div>
                  <p className="font-bold text-gray-600 text-right">75%</p>
                </div>
              </div>
            </div>
            {/* skill 4 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-red-50 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-red-500 text-white flex-shrink-0 text-2xl"
                  >
                    <MdOutlineDiamond />
                  </div>
                  <h2 className="text-gray-600 text-lg title-font font-medium">
                    Graphic Designing
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-red-500 h-1 rounded-xl w-[98%]"></div>
                  </div>
                  <p className="font-bold text-gray-600 text-right">98%</p>
                </div>
              </div>
            </div>
            {/* skill 5 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-red-50 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-red-500 text-white flex-shrink-0 text-2xl"
                  >
                    <RiNextjsLine />
                  </div>
                  <h2 className="text-gray-600 text-lg title-font font-medium">
                    Next.JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-red-500 h-1 rounded-xl w-[50%]"></div>
                  </div>
                  <p className="font-bold text-gray-600 text-right">50%</p>
                </div>
              </div>
            </div>
            {/* skill 6 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-red-50 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-red-500 text-white flex-shrink-0 text-2xl"
                  >
                    <BiLogoTailwindCss />
                  </div>
                  <h2 className="text-gray-600 text-lg title-font font-medium">
                    Tailwind CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-red-500 h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-gray-600 text-right">95%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
