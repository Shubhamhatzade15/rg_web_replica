import React, { useEffect, useRef } from "react";
import { VscTriangleDown } from "react-icons/vsc";

export default function Dropdown({
  text,
  links,
}: {
  text: string;
  links: { title: string; link: string }[];
}) {
  const [hidden, setHidden] = React.useState(true);

  const dropdownRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setHidden(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <button
      ref={dropdownRef}
      className="lg:w-full py-2 px-2 h-full uppercase relative"
      onClick={() => setHidden((x) => !x)}
    >
      {text} <VscTriangleDown className="inline" />
      {!hidden && (
        <div className="absolute top-full right-0 w-full text-black text-left bg-white shadow-lg z-10">
          <ul>
            {links.map(({ title, link }) => (
              <li key={title} className="p-2 hover:bg-gray-200">
                <a
                  href={link}
                  className="block"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = link;
                  }}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
}
