import React from "react";
import HungerHead from "../assets/portfolio/HungerHead.jpg";
import AmazonClone from "../assets/portfolio/AmazonClone.jpg";
import YouTubeClone from "../assets/portfolio/YouTubeClone.jpg";
import NetflixClone from "../assets/portfolio/NetflixClone.jpg";
import MovieSearching from "../assets/portfolio/MovieSearching.jpg";
import MealSearch from "../assets/portfolio/MealSearch.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: AmazonClone,
      demolink: "https://elaborate-pika-65b009.netlify.app/",
      codelink: "",
      details: "Amazon Clone App",
    },
    {
      id: 2,
      src: HungerHead,
      demolink: "",
      codelink: "",
      details: "HungerHead Food Delivering App",
    },
    {
      id: 3,
      src: YouTubeClone,
      demolink: "",
      codelink: "",
      details: "YouTube Clone",
    },
    {
      id: 4,
      src: NetflixClone,
      demolink: "",
      codelink: "",
      details: "Netflix Clone",
    },
    {
      id: 5,
      src: MovieSearching,
      demolink: "",
      codelink: "",
      details: "Movie Searching App",
    },
    {
      id: 6,
      src: MealSearch,
      demolink: "",
      codelink: "",
      details: "Meal Searching App",
    },
  ];
  // Handler function to redirect to a URL
  const redirectToURL = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b w-full from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, demolink, codelink, details }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex flex-col items-center">
                <div className="mt-2">
                  <p className="text-yellow-400">{details}</p>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => redirectToURL(demolink)}
                    className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                  |
                  <button
                    onClick={() => redirectToURL(codelink)}
                    className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105"
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
