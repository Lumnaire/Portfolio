import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiCheckFill,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 lg:py-10 h-[95vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* {Text} */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1">Hello, my name is Ronald Castromero</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0 mt-3">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>
            {/* {Buttons} */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2 ">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <a href="CV.pdf" download="CV-Ronald">
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
            {/* {Social} */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* {Image} */}
          <div className="hidden lg:flex relative">
            {/* {Badge 1} */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Years Of Experience"
            />
            {/* {Badge 2} */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiCheckFill />}
              endCountNum={4}
              badgeText="Finished Projects"
            />
            {/* {Badge 3} */}
            <Badge
              containerStyles="absolute top-[55%] -right-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={2}
              badgeText="Ongoing Project"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[470px] bg-no-repeat relative bg-bottom rounded-full"
              imgSrc="/hero/2.png"
              className=""
            />
          </div>
        </div>
        {/* {Icon} */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
