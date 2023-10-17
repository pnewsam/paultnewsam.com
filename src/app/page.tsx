import Image from "next/image";

import headshot from "../../public/headshot.jpg";
import { RadioTower } from "lucide-react";
import { OnWorkingTogether } from "@/components/OnWorkingTogether";
import { MySkills } from "@/components/MySkills";
import { Projects } from "@/components/Projects";
import { MoreAboutMe } from "@/components/MoreAboutMe";

export default function Home() {
  return (
    <main className="bg-zinc-50">
      <div className="w-full absolute top-0 overflow-hidden">
        <svg
          className="inset"
          width="1728"
          height="480"
          viewBox="0 0 1728 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1728 0H0V480L1728 0Z" fill="url(#paint0_linear_49_7)" />
          <defs>
            <linearGradient
              id="paint0_linear_49_7"
              x1="864"
              y1="0"
              x2="864"
              y2="480"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EFF6FF" />
              <stop offset="1" stopColor="#BFDBFE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1080px] mx-auto my-16 px-4 md:px-16 relative z-10 bg-white border border-zinc-200 rounded-xl">
        <div className="py-20">
          <div>
            <div className="flex justify-between">
              <div>
                <div className="w-40 h-40 bg-gradient-to-tr from-blue-50 to-blue-100 rounded-full shadow-md shadow-blue-300/50 border border-zinc-200 mb-8">
                  <Image
                    src={headshot}
                    alt="Paul Newsam"
                    width={400}
                    height={400}
                    className="rounded-full"
                  />
                </div>
                <div className="inline-flex flex-wrap items-center gap-4 mb-2">
                  <h1 className="text-3xl tracking-tight font-semibold text-transparent bg-clip-text bg-blue-400">
                    Paul T. Newsam
                  </h1>
                  <p className="inline-flex gap-2 text-xs text-zinc-400 border border-zinc-300 rounded-lg px-2 py-1 font-medium">
                    <RadioTower className="w-4 h-4 text-red-600/50" />
                    <span className="text-red-600/50">Remote</span>
                    <span> - San Diego, CA</span>
                  </p>
                </div>
                <h2 className="text-4xl font-semibold tracking-tight text-zinc-700 mb-4">
                  Frontend Developer
                </h2>
              </div>
            </div>

            {/* <div className="text-lg text-zinc-500 w-full italic mb-4 rounded">
              <p>Frontend developer striving to use technology to do good.</p>
            </div> */}

            {/* <hr className="my-8 border-zinc-300" /> */}
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              I&apos;m a frontend developer. Currently I&apos;m working at a
              company called Iterable. Before that I was at Accenture. And
              before that I worked as a biologist, doing bird surveys in
              different parts of the U.S. I worked for outfits like USGS, Point
              zinc, and Bird Conservancy of the Rockies.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              When I&apos;m not working, I love to go hiking and birdwatching,
              learn jiu jitsu, and spend time with my friends and family.
            </p>

            {/* <hr /> */}

            {/* <MySkills /> */}
            {/* <Projects /> */}
            <br className="py-8" />
            {/* <OnWorkingTogether /> */}
            {/* <MoreAboutMe /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
