'use client'

import React, { useState, useEffect, useRef } from 'react';

const CustomSelect = () => {
  const [selected, setSelected] = useState("Select car:");
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef(null);

  const options = [
    "Select car:", "Audi", "BMW", "Citroen", "Ford", "Honda", "Jaguar", 
    "Land Rover", "Mercedes", "Mini", "Nissan", "Toyota", "Volvo"
  ];

  const handleOptionClick = (option) => {
    setSelected(option);
    setShowOptions(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative inline-block w-48" ref={selectRef}>
      <div 
        className="select-selected bg-blue-500 text-white py-2 px-4 cursor-pointer" 
        onClick={() => setShowOptions(!showOptions)}
      >
        {selected}
        <span className={`absolute top-1/2 right-4 transform -translate-y-1/2 border-solid border-transparent border-t-6 border-l-6 border-r-6 ${showOptions ? 'rotate-180' : ''}`} />
      </div>
      {showOptions && (
        <div className="select-items absolute top-full left-0 right-0 bg-blue-500 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className={`py-2 px-4 text-white cursor-pointer hover:bg-blue-600 ${selected === option ? 'bg-blue-600' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
