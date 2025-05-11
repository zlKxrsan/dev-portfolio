import * as motion from "motion/react-client";
import React, { ReactNode } from "react";

type AltSectionProps = {
  id: string;
  title: string;
  content: ReactNode;
};

export default function AltSection({ id, title, content }: AltSectionProps) {
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
      <motion.div
        className="w-full max-w-5xl text-center text-white px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {content}
      </motion.div>
    </section>
  );
}
