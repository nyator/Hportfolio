import React from 'react'

import { react, tailwindcss, nodejs, javascript, html5, css3, git, figma } from '@/constants/assets';

const sks = [
    {
        id: 1,
        label: "React",
        icon : react,
    },
    {
        id: 2,
        label: "Tailwind",
        icon : tailwindcss,
    },
    {
        id: 3,
        label: "React Native",
        icon : react ,
    },
    {
        id: 3,
        label: "Node",
        icon : nodejs,
    },
    {
        id: 4,
        label: "Javascript",
        icon : javascript,
    },
    {
        id: 5,
        label: "HTML",
        icon : html5,
    },
    {
        id: 6,
        label: "CSS",
        icon : css3,
    },
    {
        id: 7,
        label: "Git",
        icon : git,
    },
    {
        id: 8,
        label: "UI/UX",
        icon : figma,
    },
];


const Skills = () => {
  return (
    <div className='flex flex-col mt-20  items-center justify-center'>
        <div className='rotate-[4deg]'>
            <h1 className='text-3xl text-center font-bold transition-all'>Skills 🎨</h1>
            <div className='w-40 h-2 bg-blue-500 rounded-full'></div>
            <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2'></div>
        </div>

        <div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 py-10 items-center '>
          {sks.map((item) => {
            return (
                <div className='bg-[#d8e3ee] h-full w-full rounded-md flex flex-col text-center justify-center items-center p-5 md:p-20 border-solid border-slate-300 border-[3px] '>
                    <img src={item.icon} className='object-contain'/>
                    <h1 key={item.index} className='text-2xl font-medium'>{item.label}</h1>
                </div>
              )})}

            </div>
        </div>
    </div> 
    )
}

export default Skills