import Image from "next/image";

const Navbar = () => {
  return (
    <div className="z-10 bg-red-50 lg:w-full items-center justify-between font-mono text-sm lg:flex hidden">
      <div className="fixed flex h-20 w-full items-end justify-center  dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Image
          src="https://admissions.utcc.ac.th/assets/images/logo_class.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={125}
          height={24}
          priority
        />
      </div>
    </div>
  );
};

export default Navbar;
