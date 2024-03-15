import React, { useState, useEffect, useRef } from "react";
import {motion} from "framer-motion";
import { fadeOut } from "../animitions";
const LoginInput = ({
  placeHolder,
  icon,
  inputState,
  inputStateFunc,
  type,
  isSignUp,
  focus
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (focus === true) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <motion.div 
      className={`flex items-center justify-center gap-6 bg-lightOverlay backdrop-blur-md rounded-full w-full px-4 py-2 ${isFocus ? "shadow-md shadow-red-400" : "shadow-none"}`}
      onMouseEnter={() => setIsFocus(true)}
      onMouseLeave={() => setIsFocus(false)}
      {...fadeOut}
    >
      {icon}
      <div className="h-5 p-0 w-0.5 bg-black "></div> {/* Line separator */}
      <input
        ref={inputRef}
        type={type}
        placeholder={placeHolder}
        className="w-full h-full bg-transparent  outline-none"
        value={inputState}
        onChange={(e) => inputStateFunc(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </motion.div>
  );
};
export default LoginInput;
