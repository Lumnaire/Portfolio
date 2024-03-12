import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* {Text & illustraion} */}
        <div className="grid lg:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* {Text} */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              I'd like to be part of your idea, whether it's a small or big
              project. Do not hesitate to reach out to me.
            </p>
          </div>
          {/* {Illustration} */}
          <div
            className="hidden lg:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark
          bg-contain bg-no-repeat"
          ></div>
        </div>
        {/* {Info text & form} */}
        <div className="grid lg:grid-cols-2 mb-24 lg:mb-32">
          {/* {Info text} */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 xl:mb-24 text-base xl:text-lg">
            {/* {mail} */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>lumnaire.coding@gmail.com</div>
            </div>
            {/* {address} */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>157 Santa Cruz st. Virac Catanduanes, Philippines</div>
            </div>
            {/* {phone} */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+63948 966 4935</div>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSclakNLpXZmjbn20AuqTkwQ28QiXC2CW4J2bcODkKtMCzkWDg/viewform?usp=sf_link"
              target="_blank"
            >
              <Button
                type="submit"
                className="flex items-center gap-x-1 max-w-[166px]"
              >
                Let's Talk
                <ArrowRightIcon size={20} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
