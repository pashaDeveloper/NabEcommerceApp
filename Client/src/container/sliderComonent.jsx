import React from "react";
import "./styles.css"; // Import your CSS file

const SlideIn = ({ children }) => {
  return (
    <a href="#" className="slide-in">
      {children}
    </a>
  );
};

function Login() {
  return (
    <div>
      <SlideIn>Click me</SlideIn>
    </div>
  );
}

export default Login;
