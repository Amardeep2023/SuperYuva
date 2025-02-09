import React from 'react';
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import  { useState } from "react";

import { Menu, X } from "lucide-react";

function Navbar() {

  const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
  const icon = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [4, -4],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  
    

  return (
    <>
      <div className='ph:flex  ph:text-sm flex justify-between p-0 shadow-lg bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-purple-200 rounded-sm px-5'>
        <Link to="/">
          <span><img className='w-20 ' src="logooo.png" alt="" /></span>
        </Link>
        <ul className='ph:flex ph:gap-5  flex flex-shrink-0 items-center gap-8'>
          <a href="https://wa.me/919762639241?text=Hi,%20I%20found%20your%20contact%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer">
            <motion.li variants={icon(0.5)} initial="initial" animate="animate">
              <FaWhatsapp className='text-4xl ph:text-3xl text-green-500' />
            </motion.li>
          </a>
          <a href="mailto:superyuvafoundation@gmail.com" target='_blank' rel="noopener noreferrer">
            <motion.li variants={icon(2)} initial="initial" animate="animate">
              <SiGmail className='text-4xl ph:text-3xl text-red-600' />
            </motion.li>
          </a>
          <a href="https://www.instagram.com/superyuva?igsh=amNoNGRqeWdqZzVw" target="_blank" rel="noopener noreferrer">
            <motion.li variants={icon(1.5)} initial="initial" animate="animate">
              <FiInstagram className='text-4xl ph:text-3xl text-pink-600' />
            </motion.li>
          </a>
          <a href="https://www.linkedin.com/in/shriya-pardeshi-72831b2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <motion.li variants={icon(2)} initial="initial" animate="animate">
              <FaLinkedin className='text-4xl ph:text-3xl text-blue-700' />
            </motion.li>
          </a>
          <div className="md:hidden  flex ">
        <button onClick={() => setIsOpen(true)}>
          <Menu className="w-8 h-8 text-gray-700" />
        </button>
      </div>
        </ul>
      </div>

       {/* Navbar (Hidden on Small Screens) */}
       <div className="mt-5 flex justify-around p-0 shadow-lg bg-gradient-to-r from-white via-slate-100 to-slate-200 rounded-sm hidden md:flex">
        <ul className="flex flex-shrink-0 items-center gap-14 text-xl">
          {["about", "inspiration", "work", "achieve", "contact"].map((item) => (
            <Link key={item} to={`/${item}`} onClick={() => setIsOpen(false)}>
              <li className={`${location.pathname === `/${item}` ? "bg-red-100" : "hover:bg-red-100"} px-2 py-1 rounded-md capitalize`}>
                {item.replace("-", " ")}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon (Visible on Small Screens) */}
  

      {/* Sidebar (Hidden by Default) */}
      <div className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close Button */}
        <button className="absolute top-5 right-5" onClick={() => setIsOpen(false)}>
          <X className="w-8 h-8 text-gray-700" />
        </button>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-center gap-5 pt-20 text-xl">
          {["about", "inspiration", "work", "achieve", "contact"].map((item) => (
            <Link key={item} to={`/${item}`} onClick={() => setIsOpen(false)}>
              <li className={`${location.pathname === `/${item}` ? "bg-red-100" : "hover:bg-red-100"} px-2 py-1 rounded-md capitalize`}>
                {item.replace("-", " ")}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Background Overlay (Click to Close Sidebar) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
}

export default Navbar;
