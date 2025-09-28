"use client";

import Link from "next/link";
import { RiLinkedinFill, RiWhatsappFill } from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/irwangeryr/",
    name: <RiLinkedinFill />,
    desc: "Link to my LinkedIn profile",
  },
  {
    path: "https://wa.me/62895379765158?text=Hello%2C%20I%20Need%20to%20Connect%20with%20you",
    name: <RiWhatsappFill />,
    desc: "Contact me on WhatsApp",
  },
];

const Socials = ({
  containerStyles,
  iconsStyles,
}: {
  containerStyles: string;
  iconsStyles: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link
          className="flex items-center"
          href={icon.path}
          key={index}
          target="_blank"
          aria-label={icon.desc}
        >
          <div className={`${iconsStyles} md:p-1`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
