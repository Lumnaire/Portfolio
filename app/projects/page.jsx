"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/snappy.png",
    category: "FullStack",
    name: "Snappy",
    description:
      "Created with React, TypeScript, React Context API, React Router, TanStack, Shadcn/ui, Tailwindcss and Appwrite for the backend.",
    link: "https://snappy-lumnaire.vercel.app/",
    github: "/",
  },
  {
    image: "/work/music-player.png",
    category: "Front-end",
    name: "Music Player",
    description:
      "The project covers concepts such as handling audio playback, managing a playlist, implementing play, pause, next, previous & shuffle functionalities",
    link: "https://music-player-lumnaire.vercel.app/",
    github: "/",
  },
];

//remove category duplicates
const uniqueCategories = [
  "All projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("All projects");
  // console.log(category); //This checks if the tabs is working when clicked

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects return all projects, else filter by category
    return category === "All projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* {Tabs} */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="captitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* {tabs content} */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
