import React from 'react';

import { SiGithub, SiLinkedin, SiTwitter, SiYoutube,  } from "react-icons/si";
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


const Navbar = () => {
  return (
    <nav className='py-10 flex justify-between'>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-blue-500 -rotate-2 '>
          Henry Nyator 🧑🏻‍💻
        </h1>

        <div className='flex items-center gap-5 '>
          {socials.map((social, index)=>{

           const Icon = social.icon

            return (
              <a key={index} target='blank' href={social.link}> 
            {Icon}
             </a>
              )})}
        </div>

        
    </nav>
  )
}

export default Navbar