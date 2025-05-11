import Section from "@/app/components/Section";
import Image from "next/image";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      leftContent={

        <div className="flex flex-col mb-6">
        <h1 className="text-xl font-bold">
          Live-Demo:
        </h1>
        <p className="text-sm ml-6">
          - Github, Sourceforge
        </p>
        </div>
      }
      rightContent={
              <div className="relative w-full max-w-xl aspect-[230/225]">
                <Image
                  src="/code.jpg"
                  alt="code"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
      }
    />
  );
  }