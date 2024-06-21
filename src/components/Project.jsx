import * as React from "react";
import { Link } from "react-router-dom";

import {
  Wreact,
  Wtailwindcss,
  Wnodejs,
  Wjavascript,
  Whtml5,
  Wcss3,
  Wgit,
  Wfigma,
} from "../constants/assets";

import { hoobank, portfolio, stembit } from "../constants/image";

// "bg-indigo-500"
// bg-blue-500

const works = [
  {
    title: "Hoobank",
    tech:[Wreact, Wtailwindcss],
    link: "https://hoo-bank-murex.vercel.app/",
    cover: hoobank,
    background: "bg-blue-500",
  },
  {
    title: "Portfolio",
    tech:[Wreact, Wtailwindcss],
    link: "https://portfolio1-nyators-projects.vercel.app/",
    cover: portfolio,
    background: "bg-indigo-500",
  },
  {
    title: "StemBits App (Coming Soon)",
    tech: [Wreact, Wfigma, Wtailwindcss],
    // link: "",
    cover: stembit,
    background: "bg-blue-500",
  },
];


const Project = () => {
  return (
    <div className="flex flex-col mt-20  items-center justify-center">
      <div className="-rotate-[4deg]">
        <h1 className="text-3xl text-center font-bold transition-all">Projects 📚</h1>
        <div className="w-40 h-2 bg-blue-500 rounded-full"></div>
        <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 ">
          {works.map((item, index) => {
            return (
              <a href={item.link} target="blank" key={index} className="">
                <div className={`${item.background} rounded-md`}>
                  <div class="p-[20px] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
                    <img
                      class="h-full w-full object-contain transition-transform duration-500 group-hover:rotate-1 group-hover:scale-110 rounded-md "
                      src={item.cover}
                      alt={item.title}
                    />
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/50 "></div>
                    <div class="absolute inset-0 flex translate-y-[42%] flex-col items-start justify-center px-9 text-center transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:md:translate-y-[100px] group-hover:translate-y-[60px]">
                      <h1 class="text-lg font-bold text-white">
                        {item.title}
                      </h1>

                      <div className="flex flex-row gap-2">
                      {item.tech.map((img) => {
                        return (
                            <img key={index} src={img} alt="tech" className="w-5 h-5 "/>
                          );
                        })}
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
