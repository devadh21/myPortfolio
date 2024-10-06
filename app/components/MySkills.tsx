"use client";
import Image from "next/image";
import { cardsSkills } from "../data";
// import { cardsSkills } from "@/data.js";
import { motion } from "framer-motion";
 

export default function MySkills() {
  return (
    <section className="section_style" id="services">
      <div
        className="container flex justify-center "
      >
        <div className="main_section_style">
          <div className="text-center">
            <div className="inline-block ">
              <h1 className="style-h1 -mt-[12px] capitalize ">my skills </h1>
              <hr className="my-2 h-1  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-25 dark:opacity-100" />
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-4  sm:grid-cols-2 mt-[55px] p-4 dark:bg-bg-color bg-bg-color-light"
          >
            {/* ******************* card */}
            {cardsSkills.map((card,index) => (
              <div
                key={card.id}
                className="dark:bg-bg-color2 bg-bg-color2-light p-2  flex justify-center items-center gap-3 group"
              >
                <div>
                  <Image
                    src={card.icon}
                    alt={card.alt}
                    width={60}
                    height={60}
                  />
                </div>
                <span className="  uppercase whitespace-nowrap  ">
                  {card.title}
                </span>
                <div className="w-full   dark:bg-bg-color bg-bg-color-light">
                  <motion.div
                    initial={{width: 0}}
                    whileInView={{
                      width: card.level,
                      transition: {
                        duration: 3,
                        delay: index*2*0.2,
                      },
                    }}
                    className={`bg-primary text-xs font-medium text-black text-center p-0.5 leading-none   `}
                  >
                    {card.level}
                  </motion.div>
                </div>
              </div>
            ))}

            {/* ******************* End card */}
          </div>
        </div>
      </div>
    </section>
  );
}
