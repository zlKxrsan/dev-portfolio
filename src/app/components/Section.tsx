import * as motion from "motion/react-client";
import React, { ReactNode } from "react";

type AnimatedSectionProps = {
  id: string;
  title: string;
  leftContent: ReactNode;
  rightContent: ReactNode;
};

export default function Section({
  id,
  title,
  leftContent,
  rightContent,
}: AnimatedSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 px-4"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-2">{title}</h2>
        <div className="w-40 h-1 bg-lime-300 mx-auto mt-1"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row w-full max-w-5xl items-center justify-center gap-8">
        {/* Left content with animation */}
        <motion.div
  className="w-full lg:w-1/2 flex items-center justify-center"
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true, amount: 0.2 }}
>
  {leftContent}
</motion.div>
{/* Right content with animation */}
<motion.div
  className="w-full lg:w-1/2 text-center lg:text-left text-white px-6"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true, amount: 0.2 }}
>
  {rightContent}
</motion.div>
      </div>
    </section>
  );
}
