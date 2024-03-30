import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <AspectRatio ratio={16 / 9}>
        <section className="relative flex mt-10">
          <Image
            src="/bg.jpeg"
            width={1450}
            height={1200}
            alt="Background image"
          />
        </section>
      </AspectRatio>
    </main>
  );
}
