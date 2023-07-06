import { Navbar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-screen fixed">
        <div className="mt-16 mx-auto flex max-w-7xl justify-center py-24 lg:py-0 lg:items-center z-10 p-2 lg:px-8 h-screen">
          <p className="text-3xl">Hello!</p>
        </div>
      </div>
      {/* BG */}
      <div className="bg-gradient-to-b from-cyan-950 to-cyan-200 h-screen overflow-hidden z-0">
        <div>
          <Image
            src="/Line.svg"
            width="1628"
            height="641"
            alt="line"
            className="fixed bottom-10 -left-40 sm:-bottom-0 sm:-left-52 lg:-bottom-40 lg:-left-60 rotate-45 z-0"
          />
        </div>
      </div>
    </div>
  );
}
