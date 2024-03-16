import { Player } from "@lottiefiles/react-lottie-player";

export function AppLoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Player
        src="https://app.lottiefiles.com/animation/2539ca29-cee7-420a-8d2f-c3847fadd95e"
        loop
        autoplay
        speed={10}
      />
    </div>
  );
}
