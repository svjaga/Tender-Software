import React from "react";

interface HeaderProps {
  title?: string;
  gradient?: string;
  labColor?: string; 
}

const Header: React.FC<HeaderProps> = ({
  title = "Tender Software India Private Limited",
  gradient = "linear-gradient(135deg, #000000, #4f46e5)",
  labColor,
}) => {
  return (
    <header
      className="w-full py-6 flex items-center justify-center shadow-lg bg-gradient-to-br from-black-600 to-indigo-700"
style={{ backgroundColor: "lab(77 0 -0.01)" }}    >
      <h1 className="text-3xl font-bold text-white text-center px-4">
        {title}
      </h1>
    </header>
  );
};

export default Header;
