import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  RiBallPenFill,
  RiCodeSFill,
  RiCodeSSlashFill,
  RiToolsLine,
} from "react-icons/ri";

const servicesData = [
  {
    icon: <RiBallPenFill size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "I use figma to create, share, and test designs for websites, mobile apps, and other digital products and experiences",
  },
  {
    icon: <RiCodeSSlashFill size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Can create functional, user-friendly websites and web applications depending on the demand of the client.",
  },
  {
    icon: <RiToolsLine size={72} strokeWidth={0.8} />,
    title: "Troubleshooting",
    description:
      "I offer prompt and effective bug fixes, addressing any technical glitches or errors that may impact user experience or functionality",
  },
];

const Services = () => {
  return (
    <div className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* {Grid items} */}
        <div className="grid lg:grid-cols-3 justify-center gap-y-12 lg:gap-x-10">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10
              justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div
                    className="w=[140px] h-[80px] bg-green-100 dark:bg-background
                  flex justify-center items-center rounded-lg"
                  >
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
