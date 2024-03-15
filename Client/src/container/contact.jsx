import React from "react";
import "../index.css"; // Import your CSS file

const SlideIn = ({ children }) => {
  return (
    <a href="#" className="slide-in">
      {children}
    </a>
  );
};

function contact() {
  return (
    <div>
      <SlideIn>Click me</SlideIn>
    </div>
  );
}

export default contact;