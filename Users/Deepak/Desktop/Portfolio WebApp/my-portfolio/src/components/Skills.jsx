import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import redux from "../assets/redux.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      text: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 2,
      src: css,
      text: "Css",
      style: "shadow-blue-500"
    },
    {
      id: 3,
      src: javascript,
      text: "JavaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 4,
      src: react,
      text: "React",
      style: "shadow-blue-600"
    },
    {
      id: 5,
      src: redux,
      text: "Redux Toolkit",
      style: "shadow-violet-700"
    },
    {
      id: 6,
      src: tailwind,
      text: "Tailwind Css",
      style: "shadow-sky-400"
    },
    {
      id: 7,
      src: github,
      text: "GitHub",
      style: "shadow-gray-400"
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-items-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({id,src,text,style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duraiton-500 py-2 rounded-lg ${style}`}>
            <img src={src} className="w-20 mx-auto" alt='skill'/>
            <p className="mt-4">{text}</p>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
