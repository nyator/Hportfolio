import React from 'react';

import { SiGithub, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si";
import { FaRegFilePdf } from "react-icons/fa6";
import {resume} from '../constants/assets';

const socials = [
    {
        link:"https://www.linkedin.com/in/henry-nyator-674392269/",
        label:"linkedin",
        icon: <SiLinkedin size={25} className='icon'/>,
    },
    {
        link:"https://github.com/nyator",
        label:"github",
        icon: <SiGithub size={25} className='icon'/>,
    },
    {
        link:"https://twitter.com/nyator_",
        label:"twitter ",
        icon: <SiTwitter size={25} className='icon'/>,
    },
    {
        link:"https://www.youtube.com/@devbits_",
        label:"youtube ",
        icon: <SiYoutube size={25} className='icon'/>,
    },
    {
        link: resume,
        label:"youtube ",
        icon: <FaRegFilePdf size={25} className='icon'/>,
    },
 
];


const Footer = () => {
  return (
    <div className='bg-[#d8e3ee] h-[10rem] mt-7 items-center justify-center text-center p-5'>
          <h1 className='text-2xl font-bold underline underline-offset-8 decoration-blue-500 -rotate-2 '>
          Henry Nyator 🧑🏻‍💻
          </h1>

          <div className='flex justify-center mt-5 gap-5 '>
          {socials.map((social, index)=>{
            return (
              <a key={index} target='blank' href={social.link}> 
            {social.icon}
             </a>
              )})}
        </div>

    </div>
  )
}

export default Footer