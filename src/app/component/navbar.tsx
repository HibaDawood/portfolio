import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-red-200 z-10 sticky top-0">
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-600 mb-4 md:mb-0">
            <Image
              src={"/assests/picture/logo-imd.png"}
              alt="H alphabet logo"
              width={100}
              height={100}
              className="w-[50px]"
            />

            <span className="ml-3 text-xl">Hiba Muhammad dawood</span>
          </div>
          <nav
            className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base
           justify-center font-bold"
          >
            <Link href={"/"} className="mr-5 hover:text-red-900">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-red-900">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-red-900">
              Skills
            </Link>
            <Link href={"#Project"} className="mr-5 hover:text-red-900">
              Projects
            </Link>
            <Link href={"#Contact"} className="-mr-5 hover:text-red-900">
              Contact
            </Link>
          </nav>
         
        </div>
      </header>
    </div>
  );
};

export default Navbar;
