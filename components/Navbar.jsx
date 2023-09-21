"use client";

import React from 'react'
import { useState } from 'react';
import {Typography, IconButton } from '@material-tailwind/react';
import Drawer from "react-modern-drawer";
import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
import {GiCancel} from 'react-icons/gi';
import Link from 'next/link';
import 'react-modern-drawer/dist/index.css'

const Navbar = () =>  {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }


  return (

    <div>
      <nav className=" w-full absolute top-0 z-50 bg-[#2F3F93]   ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-7 md:block">
              <Link href={'/'} ><img className="w-14 lg:w-22" src={"https://cdn.discordapp.com/attachments/1078905801017659432/1110839909721317386/image_1.png"} alt=""  width={88} height={56} /></Link>
              <div className="md:hidden flex gap-5 text-white">
                <Link href="whatsapp://send?abid=+971568228740"><BsWhatsapp className="inline w-6 h-6" /></Link>
                <Link href="tel:+971568228740"><BsTelephone className="inline w-6 h-6" /></Link>
                <button className="text-gray-700 rounded-md outline-none focus:border-gray-900 focus:border" onClick={toggleDrawer}>
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" className=" text-white"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" className=" text-white"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden' }`}>
              <ul className="font-medium items-center w-full opacity-90 text-center justify-center space-y-4 md:flex md:space-x-12 md:space-y-0 py-10 md:py-0">
                <li className="text-white hover:text-[#6366F1]"><Link href="/" >Home</Link></li>
                <li className="text-white hover:text-[#6366F1]"><Link href="/about" >About</Link></li>
                <li className="text-white hover:text-[#6366F1]"><Link href="/contact" >Contact</Link></li>
                <li className="text-white hover:text-[#6366F1]"><Link href="https://blog.edumynation.com/"  target="_blank" className="font-medium">Blogs</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <React.Fragment>
        <Drawer direction="right" open={isOpen} onClose={toggleDrawer} style={{backgroundColor:"#2F3F93", padding:"16px"}}>
          {/* <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="indigo"></Typography>
            <IconButton variant="text" color="white" onClick={closeDrawerRight}><GiCancel strokeWidth={2} className="h-5 w-5" /></IconButton>
          </div> */}
          <div className="flex flex-col text-white gap-5">
            <span onClick={() => btnClick('/')}>Home</span>
            <span onClick={() => btnClick('/')}>About</span>
            <span onClick={() => btnClick('/')}>Contact Us</span>
            <span><Link href="https://blog.edumynation.com/" target="_blank" className="font-medium">Blogs</Link></span>
            <Link href={'/'} >Privacy Policies</Link>
            <Link href={'/'} >Terms & Conditions</Link>
            <Link href={'/'} >Registered School</Link>
            <Link href={'/'} >Terms & Conditions For School</Link>
          </div>
        </Drawer>
      </React.Fragment> 
    </div>
  );
}


export default Navbar;