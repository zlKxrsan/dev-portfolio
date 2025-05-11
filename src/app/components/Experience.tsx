import Section from "@/app/components/Section";
import Image from "next/image";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
            leftContent={
              <div className="relative w-full max-w-xl aspect-[1280/683]">
                <Image
                  src="/keyboard.jpg"
                  alt="keyboard"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            }
            rightContent={
              <div>
                <div className="flex flex-col mb-6">
                <h1 className="text-xl font-bold">
                  <span className="text-lime-300">Open-Source contributions</span> 03/2025-Ongoing
                </h1>
                <p className="text-sm ml-6">
                  - Github, Sourceforge
                </p>

                <div className="flex flex-col mb-6">
                </div>
                <h1 className="text-xl font-bold">
                  Student Assistant OOP<span className="text-lime-300"> 04/2023-09/2023</span>
                </h1>
                <p className="text-sm ml-6">
                  - Frankfurt University of Applied Sciences, Germany
                </p>
                <p className="text-sm ml-6">
                - testing, documentation, C/C++
                </p>
                </div>
              </div>
            }
    />
  );
  }
  