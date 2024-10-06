"use client";
import { cardInfoContact } from "../data";
import FormContact from "./ui/FormContact.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";

export default function Contact() {
  
  return (
    <section id="contact" className="section_style">
      <div

        className="container flex justify-center "
      >
        <div className="main_section_style">
          <div className="text-center">
            <div className="inline-block ">
              <h1 className="style-h1 -mt-[12px] capitalize ">
                get in touch with me
              </h1>
              <hr className="my-2 h-1  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-25 dark:opacity-100" />
            </div>
          </div>

          <div className=" dark:bg-bg-color bg-bg-color-light p-[35px] flex flex-col  justify-center gap-2  sm:flex-row   ">
            {/* ----------call me--------------- */}
            <motion.div
                    variants={fadeIn("right",2,0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    // viewport={{ once: false, amount: 0.6 }} 
            className="w-full  flex flex-col justify-evenly items-center bg-bg-color2-light dark:bg-bg-color2   ">
              <h1 className="text-[18px] mt-4  uppercase font-meduim font-bolde text-center underline  ">
                contact info
              </h1>
              {cardInfoContact.map((card) => (
                <div
                  key={card.id}
                  className="w-[220px] h-[90px] flex flex-col justify-center my-2 items-center dark:bg-bg-color bg-bg-color-light"
                >
                  <div className="flex justify-center items-center gap-4  ">
                    <div className="">{card.icon}</div>
                    <div className="font-medium text-[18px] uppercase">
                      {card.title}
                    </div>
                  </div>
                  <p>{card.desc}</p>
                </div>
              ))}
            </motion.div>
            {/* ----------form--------------- */}
            <motion.div
                    variants={fadeIn("left", 2,0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    // viewport={{ once: false, amount: 0.6 }}
             className="   w-full p-[35px]  bg-bg-color2-light dark:bg-bg-color2  ">
              <h1 className="text-[18px] mb-4  uppercase font-meduim font-bolde text-center underline  ">
                just message me
              </h1>
              <FormContact />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
