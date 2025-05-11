import AltSection from "@/app/components/AltSection";
import React from "react";
import { ReactElement } from "react";
import {
  DiDjango,
  DiCss3,
  DiDocker,
  DiHtml5,
  DiJavascript1,
  DiJava,
  DiMongodb,
  DiNodejs,
  DiReact,
  DiPython,
  DiSqllite,
  DiLinux,
} from "react-icons/di";

type Skill = {
  name: string;
  icon: ReactElement;
};

const skills: Skill[] = [
  { name: "HTML5", icon: <DiHtml5 /> },
  { name: "CSS3", icon: <DiCss3 /> },
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "React", icon: <DiReact /> },
  { name: "Node.js", icon: <DiNodejs /> },
  { name: "Python", icon: <DiPython /> },
  { name: "Django", icon: <DiDjango /> },
  { name: "Java", icon: <DiJava /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "SQLite", icon: <DiSqllite /> },
  { name: "Docker", icon: <DiDocker /> },
  { name: "Linux", icon: <DiLinux /> },
];

export default function Skills() {
  return (
    <AltSection
      id="skills"
      title="Skills"
      content={
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-md p-4 flex flex-col items-center justify-center text-center hover:shadow-xl transition"
            >
              <div className="text-4xl text-lime-300 mb-2">{skill.icon}</div>
              <div className="text-sm font-medium text-white">{skill.name}</div>
            </div>
          ))}
        </div>
      }
    />
  );
}
