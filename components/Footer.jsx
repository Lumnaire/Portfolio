import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* {Socials} */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-[20px] dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary"
          />
          {/* {Copyright} */}
          <div className="text-muted-foreground">
            Copyright &copy; Ronald Castromero. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
