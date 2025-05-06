"use client";

import { useRef, useState } from "react";
import {useRouter } from "next/navigation";


export default function Register() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMsgPassword, setErrorMsgPassword] = useState(false);

  const [labelEmail, setLabelEmail] = useState("");
  const [labelPwd, setLabelPwd] = useState("");
  const [labelComformPwd, setLabelComformPwd] = useState("");

  const formRegister = useRef<HTMLFormElement>(null);

  interface IFormDataType {
    userName: string;
    email: string;
    password: string;
    comfermPassword: string;
  }
  const [formData, setFormData] = useState<IFormDataType | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle Register
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

    // Check is Email existed 
    try {
      setErrorMsg("");
      const res = await fetch("/api/isEmailExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });
      const isEmailExist:boolean = await res.json();
      if (isEmailExist) {
        setLabelEmail("red");
        setErrorMsg(`${formData.email} Already exist`);
        return;
      } else {
        setErrorMsg("");
        setLabelEmail("");
      }
    } catch (error) {
      console.log("error:", error);
    }

    // Check password is valid

    if (formData.password !== formData.comfermPassword) {
      setLabelComformPwd("red");
      setErrorMsg("Compform Password no match");
      return;
    }

    const passwordRegEx = `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$`;
    const passwordIsValide = formData.password.search(passwordRegEx);

    if (passwordIsValide !== 0) {
      setLabelPwd("red");
      setErrorMsgPassword(true);
      return;
    } else {
      setErrorMsgPassword(false);
      setLabelPwd("");
      setLabelComformPwd("");
    }
 
    // handle register
    try {
      const user = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          I_user_name: formData.userName,
          I_email: formData.email,
          I_password: formData.password,
        }),
      });
      console.log(user)
      // reset form and redirect to login page
      if (user.ok) {
        setErrorMsg("");
        setErrorMsgPassword(false);
        setLabelEmail("");
        setLabelPwd("");
        setLabelComformPwd("");

        formRegister.current?.reset();
        router.replace("/login")

      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="bg-bg-color2-light dark:bg-bg-color2 dark:text-color-text text-color-text-light full-screen  ">
      <div className="container flex justify-center ">
        <div className="main_section_style">
          <div className=" dark:bg-bg-color bg-bg-color-light  p-[35px] flex flex-col  justify-center gap-2  sm:flex-row   ">
            {/* ----------call me--------------- */}
            <div className="w-full p-5 flex justify-center items-center bg-[url('/img/register.jpg')] ">
              <p className=" font-bold text-[26px] capitalize ">
                Creat your account
              </p>
            </div>
            {/* ----------form--------------- */}
            <div className="   w-full p-[35px]  bg-bg-color2-light dark:bg-bg-color2  ">
              <div className=" my-6 ">
                {errorMsgPassword && (
                  <ul className="text-red-500   p-2 animate-bounce">
                    <li>- At least 1 Uppercase</li>
                    <li>- At least 1 Lowercase</li>
                    <li>- At least 1 Number</li>
                    <li>- At least 1 Symbol, symbol allowed is !@#$%^&*_=+-</li>
                    <li>- Min 8 chars and Max 12 chars</li>
                  </ul>
                )}
                {errorMsg && (
                  <div className="text-red-500  text-center p-2 animate-bounce">
                    {errorMsg}
                  </div>
                )}
                <h1 className="style-h1 -mt-[12px] text-center ">Register </h1>
                <hr className="my-2 h-1  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-25 dark:opacity-100" />
              </div>
              <form className="" onSubmit={handleRegister} ref={formRegister}>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="userName"
                    onChange={handleInput}
                    id="user_name"
                    className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400  dark:focus:border focus:outline-none focus:ring-0 focus:border-gray-600 focus:border peer"
                    placeholder=" "
                    required
                    minLength={4}
                  />
                  <label
                    htmlFor="userName"
                    className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    User name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400  dark:focus:border focus:outline-none focus:ring-0 focus:border-gray-600 focus:border peer"
                    placeholder=" "
                    required
                  />
                  <label
                    style={{ color: labelEmail }}
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 focus:border peer"
                    placeholder=""
                    required
                  />
                  <label
                    style={{ color: labelPwd }}
                    htmlFor="floating_full_name"
                    className="peer-focus:font-medium absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0 peer-focus:text-color-text-light peer-focus:dark:text-color-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="password"
                    name="comfermPassword"
                    onChange={handleInput}
                    id="comferm_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 focus:border peer"
                    placeholder=""
                    required
                  />
                  <label
                    style={{ color: labelComformPwd }}
                    htmlFor="comferm_password"
                    className="peer-focus:font-medium absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:top-0 peer-focus:text-color-text-light peer-focus:dark:text-color-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Conferm password
                  </label>
                </div>

                <button type="submit" className="style-btn  ">
                  Registe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
