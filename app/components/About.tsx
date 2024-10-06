"use client";
import Image from "next/image";
import hero from "../../public/img/about.jpg";
import hero1 from "../../public/img/bg_hero.jpg";
import hero2 from "../../public/img/hero2z.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { parentTextTapping, fadeIn, childrenTextTapping } from "../../variants";

export default  function  About() {
  const text = "i am an full stack developer.";
  return (
    <section className=" section_style overflow-hidden" id="about">
      <div className="container  flex justify-center ">
        <div className="main_section_style">
          <div className="text-center">
            <p className="">My intro</p>
            <div className="inline-block ">
              <h1 className="style-h1 -mt-[12px] capitalize ">about me </h1>
              <hr className="my-2 h-1  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-25 dark:opacity-100" />
            </div>
          </div>
          <div className=" max-w-[1024px] grid grid-cols-1 gap-4 justify-center items-center  sm:grid sm:grid-cols-2 mt-[75px]">
            <div className="">
              <motion.h2
                variants={parentTextTapping(0.05)}
                initial="hidden"
                whileInView="show"
                className="text-[22px] font-bolde capitalize my-4 "
              >
                {text.split("").map((char, index) => (
                  <motion.span variants={childrenTextTapping()} key={index}>
                    {char}
                  </motion.span>
                ))}
              </motion.h2>
              <p className="text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque magni voluptatum expedita velit itaque temporibus
                earum iusto quam quibusdam eius dolor sit dignissimos, voluptas
                illum enim distinctio corporis praesentium illo ipsum laudantium
                aspernatur magnam! Enim optio earum assumenda voluptatem
                placeat.
              </p>
              <Link className="style-btn inline-block  mt-4 " href="/contact">
                contact me
              </Link>
            </div>
            <motion.div
              variants={fadeIn("left", 3, 0.2)}
              initial="hidden"
              whileInView={"show"}
              className="order-first sm:order-last"
            >
              <div className="flex flex-col justify-center items-center w-full p-5 border border-black dark:bg-bg-color bg-bg-color-light relative">
                <div className="dark:bg-bg-color2 bg-bg-color2-light p-3 w-2/3 h-[320px] self-end  ">
                  <Image
                    src={hero}
                    alt="hero img"
                    className="h-full w-full"
                    style={{
                      objectFit: "cover", // cover, contain, none
                    }}
                  />
                </div>
                <div className=" dark:bg-bg-color2 bg-bg-color2-light p-3 w-2/5 h-[320px] self-start -mt-[300px] ">
                  <Image
                    src={hero1}
                    alt="hero img"
                    className="h-full w-full"
                    style={{
                      objectFit: "cover", // cover, contain, none
                    }}
                  />
                </div>
                <div className=" w-[90%] h-[80px] -mt-[60px] dark:bg-bg-color2 bg-bg-color2-light p-3 ">
                  <Image
                    src={hero2}
                    alt="hero img"
                    className="h-full w-full"
                    style={{
                      objectFit: "cover", // cover, contain, none
                    }}
                  />
                </div>
              </div>
              {/* <Image
                src={hero}
                alt="About img"
                width={640}
                height={480}
                className="  "
               
              /> */}
            </motion.div>
          </div>
          {/* End grid layout */}
        </div>
      </div>
    </section>
  );
}
