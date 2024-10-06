"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// import hero from "@pub/img/hero2.jpg";
// import bgHeroImg from "@pub/img/login.jpg";
// import { useState } from "react";
import Link from "next/link";

import { fadeIn } from "../../variants";

export default function Hero() {
   
  // desable framer motion in mobile screen (- 670px)
  // if (window.innerWidth >= 670) {
  //   var [framerMotionInitial, setFramerMotionInitial] = useState({ x: -200 });
  //   var [framerMotionInitialImg, setFramerMotionInitialImg] = useState({
  //     x: 200,
  //   });
  //   var [framerMotionAnimat, setFramerMotionAnimat] = useState({ x: 0 });
  //   var [framerMotionTransition, setFramerMotionTransition] = useState({
  //     duration: 2,
  //   });
  // }
  return (
    <section className="section_hero_style bg-[url('/img/bg_hero.jpg')] bg-cover  ">
      {/* <div className="absolute top-0 left-0 w-full h-full dark:bg-black bg-gray-200 opacity-7  "></div> */}
      <div className=" dark:bg-bg-color bg-bg-color-light opacity-90">
        <div className="container full-screen flex flex-col-reverse justify-center items-center sm:flex-row sm:gap-3     ">
          <motion.div
            // className="flex justify-center w-full "
            // initial={framerMotionInitial}
            // animate={framerMotionAnimat}
            // transition={framerMotionTransition}
            variants={fadeIn("right",2,0.2)}
            initial="hidden"
            whileInView={"show"}
            // viewport={{once:false,amount:0.6}}
            className="flex justify-center w-full "
          >
            <div className=" w-full  flex flex-col justify-center items-center mb-6 dark:text-color-text">
              <p className="mt-2 w-full">Hello,I'm</p>
              <h1 className="text-[55px] text-primary w-full">Hicham</h1>
              <div className="w-full">
                <p>Web Designer & Developer</p>
                <hr className="my-2 h-1  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-25 dark:opacity-100" />
              </div>
              {/* <hr className="my-2 w-[15%] h-0.5 border-t-0 bg-primary opacity-100 dark:opacity-50" /> */}
              <p className="text-sm w-full">
                Web design and develper from Morocco.
              </p>
              <p className="text-sm w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                sint?
              </p>
              <div className="w-full mb-5">
                <Link
                  className="style-btn inline-block  mt-4 z-[99999] "
                  href="#"
                >
                  click me
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left",2,0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.6}}
            className="w-full  flex justify-center items-center"
            // initial={framerMotionInitialImg}
            // animate={framerMotionAnimat}
            // transition={framerMotionTransition}
          >
            <div className="relative">
              <Image
                src="/img/bg_hero.jpg"
                alt="sample image"
                width={650}
                height={650}
                priority={true}
                className="object-fill "
              />
            </div>
          </motion.div>
        </div>
      </div>     

    </section>
  );
}
