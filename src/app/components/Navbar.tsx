'use client';

import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const sections = ['homepage', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-50% 0px -50% 0px', // mittiger Bereich zählt als „sichtbar“
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <div className="flex w-full">

      {/* Left site Icon-Bar */}
      <div className="w-1/2 flex gap-4 p-2 item-center justify-begin">
          <Link
            href="https://github.com/zlKxrsan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-lime-300 transition-colors"
          >
            <FaGithub size={36} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lawan-mai-0087a7364/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-lime-300 transition-colors"
          >
            <FaLinkedin size={36} />
          </Link>
      </div>

      {/* Right site Navigation-Bar */}
      <div className="w-1/2 flex item-center justify-end">
      <ul className="flex justify-center gap-6 p-4 text-white font-medium">
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`transition-all underline-offset-4 decoration-2 ${
                activeSection === id
                  ? 'underline decoration-lime-300 text-lime-300'
                  : 'hover:text-lime-300'
              }`}
            >
              {id === 'homepage' && 'Home'}
              {id === 'about' && 'About'}
              {id === 'skills' && 'Skills'}
              {id === 'experience' && 'Experience'}
              {id === 'projects' && 'Projects'}
              {id === 'contact' && 'Contact'}
            </a>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </nav>
  );
}
