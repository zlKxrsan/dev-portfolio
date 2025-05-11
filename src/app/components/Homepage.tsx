import Section from "@/app/components/Section";
import Image from "next/image";

export default function Homepage() {
  return (
    <Section
      id="homepage"
      title="Home"
      leftContent={
        <div className="relative w-full max-w-xs aspect-[1462/2048]">
          <Image
            src="/profilepicture.jpg"
            alt="profilepicture"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      }
      rightContent={
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-lime-300">Lawan</span>
          </h1>
          <p className="text-lg">
            CS-Student passionate about software development.
          </p>
        </div>
      }
    />
  );
}
