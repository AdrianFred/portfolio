import React from "react";
import rainy from "../components/images/rainydays.png";
import blogg from "../components/images/blogg.png";
import csm from "../components/images/CSM1.png";

const Experience = () => {
  return (
    <div name="experience" className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1400px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-14 text-red-500 underline text-2xl text-center">
          <p>My Projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-auto gap-24">
          {/* RainyDays */}
          <div>
            <div>
              <img src={rainy} alt="RainyDays store" className="w-60 h-[380px] rounded-lg" />
            </div>
            <div className="max-w-[250px] pt-4 ">
              <p className="text-red-400 text-xl pb-2 underline">RainyDays Webstore</p>
              <p className="min-h-[150px]">
                My project throughout the year, were we made changes as we learned. A store with WP Rest API, HTML/CSS/JS
              </p>
              <div className="flex justify-around mt-2">
                <a href="https://github.com/Noroff-FEU-Assignments/cross-course-project-AdrianFred" className="">
                  <button className="w-24 h-8 bg-red-500">Github</button>
                </a>
                <a href="https://courageous-cobbler-9fa224.netlify.app/" className="">
                  <button className="w-24 h-8 bg-red-500">Live Site</button>
                </a>
              </div>
            </div>
          </div>

          {/* CSM */}
          <div>
            <div>
              <img src={csm} alt="CMS Website" className="w-60 h-[380px] rounded-lg" />
            </div>
            <div className="max-w-[250px] pt-4">
              <p className="text-red-400 text-xl pb-2 underline">C-Science Museum</p>
              <p className="min-h-[150px]">A semester project where we made a informatic website for a museum, to let people/kids know the time</p>
              <div className="flex justify-around mt-2">
                <a href="https://github.com/AdrianFred/SemesterPr" className="">
                  <button className="w-24 h-8 bg-red-500">Github</button>
                </a>
                <a href="https://cheery-liger-27a858.netlify.app/" className="">
                  <button className="w-24 h-8 bg-red-500">Live Site</button>
                </a>
              </div>
            </div>
          </div>

          {/* Bloggy */}
          <div>
            <div>
              <img src={blogg} alt="Bloggy Website" className="w-60 h-[380px] rounded-lg" />
            </div>
            <div className="max-w-[250px] pt-4">
              <p className="text-red-400 text-xl pb-2 underline">Bloggy Interviews</p>
              <p className="min-h-[150px]">
                Our exam project were we made a blog website what we learned troughtout the year, Made with HTML/CSS/JS and WP Rest API
              </p>
              <div className="flex justify-around mt-2">
                <a href="https://github.com/Noroff-FEU-Assignments/project-exam-1-AdrianFred">
                  <button className="w-24 h-8 bg-red-500">Github</button>
                </a>
                <a href="https://lucid-dijkstra-106755.netlify.app/" className="">
                  <button className="w-24 h-8 bg-red-500">Live Site</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
