import Section from "@/app/components/Section";
import Image from "next/image";

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      leftContent={
        <div className="text-xl text-white leading-relaxed max-w-prose space-y-4">
          <p>
            I first discovered my interest in programming while studying
            Electrical and Information Engineering. During that time, I learned
            the fundamentals of programming in C and gained hands-on experience
            with Arduino microcontrollers.
          </p>
          <p>
            Less than two semesters in, I began working in the Object-Oriented
            Programming lab, which sparked a deeper passion for software
            development. This ultimately led me to switch majors to Computer
            Science.
          </p>
          <p>
            I am currently in my fourth semester, actively developing my skills
            through open-source contributions and personal projects. In my
            freetime I try to get more dives logged :) .
          </p>
        </div>
      }
      rightContent={
        <div className="relative w-full max-w-xs aspect-[4284/5712]">
          <Image
            src="/aboutpicture.jpg"
            alt="aboutpicture"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      }
    />
  );
}
