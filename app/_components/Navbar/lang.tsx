"use client";

import React, { useState } from "react";

function Lang() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLangChange = (lang: any) => {
    setSelectedLang(lang);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative">
      <button
        id="dropdownRadioButton"
        className="text-white bg-[#337AB7] font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
        onClick={toggleDropdown}
        type="button"
      >
        Language
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdownDefaultRadio"
          className="absolute top-full left-0 z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="p-3 space-y-3 text-sm bg-white"
            aria-labelledby="dropdownRadioButton"
          >
            <li>
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="en"
                  name="lang"
                  checked={selectedLang === "en"}
                  onChange={() => handleLangChange("en")}
                  className="w-4 h-4 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium"
                >
                  English (en)
                </label>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value="hi"
                  name="lang"
                  checked={selectedLang === "hi"}
                  onChange={() => handleLangChange("hi")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium"
                >
                  हिंदी (hi)
                </label>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Lang;
