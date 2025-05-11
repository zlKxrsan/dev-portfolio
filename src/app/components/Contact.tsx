import AltSection from "@/app/components/AltSection";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <AltSection
      id="contact"
      title="Contact"
      content={
        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:lawanm488@gmail.com"
            className="flex items-center gap-2 text-blue-400 hover:underline"
          >
            <FiMail className="text-4xl" /> lawanm488@gmail.com
          </a>

          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/zlKxrsan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-4xl hover:text-gray-800 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/lawan-mai-0087a7364/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-4xl hover:text-blue-700 transition" />
            </a>
          </div>
        </div>
      }
    />
  );
}
