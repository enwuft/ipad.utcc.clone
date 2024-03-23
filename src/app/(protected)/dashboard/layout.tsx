import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dashboard | UTCC",
  description: "Example dashboard app built using the components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="container mx-auto">{children}</div>
    </>
  );
}
