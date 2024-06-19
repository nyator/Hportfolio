import React from 'react'
 
// import { SiCss3, SiHtml5, SiJavascript, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si"

// import { SiReact } from "@icons-pack/react-simple-icons";

import { react, tailwindcss, nodejs, javascript, html5, css3 } from '@/constants/image';

const sks = [
    {
        label: "React",
        icon : react,
    },
    {
        label: "Tailwind",
        icon : tailwindcss,
    },
    {
        label: "React Native",
        icon : react ,
    },
    {
        label: "Node",
        icon : nodejs,
    },
    {
        label: "Javascript",
        icon : javascript,
    },
    {
        label: "HTML",
        icon : html5,
    },
    {
        label: "CSS",
        icon : css3,
    },
];


const Skills = () => {
  return (
    <div className='flex flex-col mt-20  items-center justify-center'>
        <div className='rotate-6'>
            <h1 className='text-3xl font-bold transition-all'>Skills 🎨</h1>
            <div className='w-40 h-2 bg-blue-500 rounded-full'></div>
            <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2'></div>
        </div>

        <div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 py-10 '>
          {sks.map((item, index)=>{
            return (
                <div className='bg-[#d8e3ee] h-full w-full rounded-md text-center justify-center items-center p-20'>
                    <h1 key={index} className='text-2xl font-medium'>{item.label}</h1>
                    <img src={item.icon} />
                </div>
              )})}

            </div>
        </div>
    </div> 
    )
}

export default Skills