import * as React from "react";
import { Link } from "react-router-dom";

import { react, tailwindcss, nodejs, javascript,  html5,  css3, git, figma, } from "../constants/assest";

import { hoobank } from "../constants/image";

const works = [
  {
    title: "Hoobank",
    tech: [react, tailwindcss],
    link: "https://hoo-bank-murex.vercel.app/",
    cover: hoobank,
    background: "bg-blue-500",
  },
  {
    title: "YKWP",
    tech: [react, tailwindcss],
    link: "https://hoo-bank-murex.vercel.app/",
    cover: hoobank,
    background: "bg-indigo-500",
  },
  {
    title: "StemBits App (Coming Soon)",
    tech: [react, tailwindcss],
    link: "https://hoo-bank-murex.vercel.app/",
    cover: hoobank,
    background: "bg-indigo-500",
  },
];

const Project = () => {
  return (
    <div className="flex flex-col mt-20 md:mt-4 items-center justify-center">
      <div className="-rotate-6">
        <h1 className="text-3xl font-bold transition-all">Projects 📚</h1>
        <div className="w-40 h-2 bg-blue-500 rounded-full"></div>
        <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 ">
          {works.map((item, index) => {
            return (
              <a href={item.link} target="blank" key={index} className="">
                <div className={`${item.background} rounded-md`}>
                  <div class="p-[25px] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
                      <img
                        class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-1 group-hover:scale-110 rounded-md "
                        src={item.cover}
                        alt={item.title} 
                      />
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/50 "></div>
                    <div class="absolute inset-0 flex translate-y-[52%] flex-col items-start justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[100px]">
                      <h1 class="text-3xl font-bold text-white">
                        {item.title}
                      </h1>
                      <div>
                      <img 
                            key={index} 
                            src={react} 
                            alt="tech"/>
                      {/* {works.tech.map((item, index) => 
                        (
                            <img 
                            key={index} 
                            src={react} 
                            alt="tech"/>
                      ))} */}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
