import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-red-50 p-2">
      <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
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
    </main>
  );
}
