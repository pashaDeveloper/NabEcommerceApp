import React, { useState } from "react";
import { loginBg } from "../assets";
import { LoginInput } from "../components";
import { FaEnvelope, FcGoogle } from "../assets/icons";
import { FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { buttonClick } from "../animitions";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [focus, setfocus] = useState(false);
  const [confirm_Password, setConfirm_Password] = useState("");

  return (
    <div className="w-screen flex relative h-screen overflow-hidden ">
      {/* background image */}
      <img
        src={loginBg}
        className="w-full h-full object-cover absolute  transform "
        alt=""
      />
      {/* Content box */}
      <div className="flex flex-col items-center z-100  bg-lightOverlay md: pt-5 gap-6  h-full   backdrop-blur-md px-2  py-12 ">
        {/* welcome text */}
        <p className="text-3xl font-semibold text-headingColor">
          {isSignUp ? "خوش آمدید" : "خوش برگشتین"}
        </p>

        {/* input section */}
        <div className="w-full flex flex-col items-center justify-center gap-6 py-6 px-4 md:px-12 ">
          <p className="text-xl text-textColor -mt-6 z-10 ">
            {isSignUp ? "ثبت نام کنید" : "وارد شوید"}
          </p>
          <LoginInput
            placeHolder={"ایمیل"}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
            focus={true}
          />
          <LoginInput
            placeHolder={"کلمه عبور"}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="passowrd"
            isSignUp={isSignUp}
          />
          {isSignUp && (
            <LoginInput
              placeHolder={"تکرار کلمه عبور"}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={confirm_Password}
              inputStateFunc={setConfirm_Password}
              type="passowrd"
              isSignUp={isSignUp}
            />
          )}
          {!isSignUp ? (
            <p  dir="rtl">
              حساب کاربری ندارید؟ {""}
              <motion.button
                {...buttonClick}
                className="slide-in-ul"
                onClick={() => setIsSignUp(true)}
              >
                ثبت نام
              </motion.button>
            </p>
          ) : (
            <p dir="rtl" className="text-headingColor">
              حساب کاربری دارید؟ {""}
              <motion.button
                {...buttonClick}
                className=" bg-transparent slide-in-ul"
                onClick={() => setIsSignUp(false)}
              >
                {" "}
                وارد شوید
              </motion.button>
            </p>
          )}
          {isSignUp ? (
            <motion.button
              className="w-full px-4 py-2 rounded-full bg-red-400 cursor-pointer text-white hover:bg-red-500 transition-all duration-150"
              {...buttonClick}
            >
              ثبت
            </motion.button>
          ) : (
            <motion.button
              className="w-full px-4 py-2 rounded-full bg-red-400 cursor-pointer text-white hover:bg-red-500 transition-all duration-150"
              {...buttonClick}
            >
              ورود
            </motion.button>
          )}
        </div>
        <div className="flex justify-between items-center gap-6 ">
          <div className="w-24 rounded-md bg-white h-[1px]"></div>
          <p className="text-white">یا</p>
          <div className="w-24 rounded-md bg-white h-[1px]"></div>
        </div>
        <div className="w-full md:px-12 ">
          <motion.button
            className={`w-full flex items-center cursor-pointer justify-center gap-6 bg-lightOverlay backdrop-blur-md rounded-full py-2 `}
            {...buttonClick}
          >
            <FcGoogle/>
            <p className="text-base text-headingColor">ورود از طریق حساب گوگل</p>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Login;
