import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import Home from "@/app/page";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ronald Castromero",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+63948 966 4935",
  },
  {
    icon: <MailIcon size={20} />,
    text: "lumnaire.coding@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 28th June, 2002",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "3rd year Computer Engineering (current)",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "157 Santa Cruz st. Virac Catanduanes, Philippines",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Juan M. Alberto Memorial Elementary School",
        qualification: "",
        years: "2009 - 2015",
      },
      {
        university: "Catanduanes National High School",
        qualification: "",
        years: "2015 - 2021",
      },
      {
        university: "Catanduanes State University",
        qualification: "Bachelor of Science in Computer Engineering",
        years: "2021 - 2025 (current)",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Fiverr",
        role: "Front-end developer",
        years: "2022 - 2023",
      },
      {
        company: "Upwork",
        role: "Freelancer",
        years: "2022 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Front-end Development: HTML, CSS, Tailwind & React",
      },
      {
        name: "Back-end Development: JavaScript & PHP",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode-logo.svg",
      },
      {
        imgPath: "/about/figma-logo.svg",
      },
      {
        imgPath: "/about/github-logo.svg",
      },
      {
        imgPath: "/about/git-logo.svg",
      },
      {
        imgPath: "/about/npm-logo.svg",
      },
      {
        imgPath: "/about/vercel-logo.svg",
      },
      {
        imgPath: "/about/appwrite-logo.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  console.log(getData(qualificationData, "experience"));
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row lg:flex-row lg:gap-10">
          {/* {Image} */}
          <div className="hidden lg:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark 
             bg-no-repeat relative lg:w-[505px] lg:h-[505px] xl:w-[505px] xl:h-[505px]"
              imgSrc="/about/about-ronald.png"
            />
          </div>
          {/* {Tabs} */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid lg:grid-cols-3 lg:max-w-[520px] lg:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* {Tabs content} */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* {Tabs personal} */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">My journey as a Developer</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I embarked on my journey as a developer in December 2022.
                      While facing challenges, particularly in my academic
                      pursuits due to irregular state, I refused to be deterred.
                      Instead, these obstacles ignited a fierce determination
                      within me to push forward on this path.
                    </p>
                    {/* {Icons} */}
                    <div className="grid lg:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0 "
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div className="lg:text-[14px]">{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* {Tabs qualifications} */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* {experiences and education wrapper} */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* {Experience} */}
                      <div className="flex flex-col gap-y-6 ">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* {list} */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary 
                                    absolute -left-[5px] group-hover:translate-y-[84px] transition-all 
                                    duration-1000"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* {Education} */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* {list} */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary 
                                    absolute -left-[5px] group-hover:translate-y-[75px] transition-all 
                                    duration-1000"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* {Skills} */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semiboldmb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* {skill list} */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* {Tools} */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* {tool list} */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
