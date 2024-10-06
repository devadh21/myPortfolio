"use client";
import { cardListsServices } from "../data";
import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";

export default function Services() {
  return (
    <section className="section_style" id="services">
      <div className="container flex justify-center ">
        <div className="w-[1024px] my-[39px]">
          <div className="text-center">
            <p className="">Specialized in</p>
            <div className="inline-block ">
              <h1 className="style-h1 -mt-[12px] ">Services </h1>
              <hr className="my-2 h-1  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-25 dark:opacity-100" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4  sm:grid-cols-3 mt-[55px]">
            {/* ******************* card */}
            {cardListsServices.map((card, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2,
                  },
                }}
                key={card.id}
                className="bg-bg-color-light dark:bg-bg-color p-8 flex flex-col justify-center items-center border-black border shadow-md shadow-black "
              >
                <div className="p-2">{card.icon}</div>
                <h1 className="uppercase  text-justify whitespace-pre-line">
                  {card.title}
                </h1>
                <span className="text-sm text-primary">{card.desc}</span>
              </motion.div>
            ))}
            {/* ******************* End card */}
          </div>
        </div>
      </div>
    </section>
  );
}
