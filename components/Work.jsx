"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//swiper react components
import { Swiper, SwiperSlide, SwipperSlide } from "swiper/react";

//swiper styles
import "swiper/css";
import "swiper/css/pagination";

//required modules
import { Pagination } from "swiper/modules";

//components
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
      "The project covers concepts such as audio playback, managing a playlist, implementing play, pause, next, previous & shuffle functionalities",
    link: "https://music-player-lumnaire.vercel.app/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className=" container mx-auto">
        {/* {Text} */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center
        xl:text-alert mb-12 xl:h-[400px] flex flex-col justify-center items-center
        xl:items-start"
        >
          <h2 className="section-title">Projects</h2>
          <p className="subtitle mb-8">
            I specialize more on the front-end side of the web
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* {Slider} */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[530px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* {Show only the first 4 projects for the slides} */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
