"use client";
import Image from "next/image";
import { cardListsPortfolio } from "../data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MyWork() {
  return (
    <section className="section_style" id="portfolio">
      <div className="container flex justify-center">
        <div className="main_section_style">
          <div className="text-center">
            <p className="">Portfolio</p>
            <div className="inline-block ">
              <h1 className="style-h1 -mt-[12px] ">My Work </h1>
              <hr className="my-2 h-1  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-primary to-transparent opacity-25 dark:opacity-100" />
            </div>
          </div>
          {/* Start card */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-[55px] ">
            {cardListsPortfolio.map((card, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2,
                  },
                }}
                key={index}
                className="p-4 bg-bg-color-light dark:bg-bg-color border border-black  shadow-md shadow-black"
              >
                <Image
                  src={card.img}
                  alt="Card image"
                  width={360}
                  height={360}
                  className="hover:scale-105 duration-700"
                />
                <Link href={card.href} target="_blank">
                  <div className=" pt-2 text-center uppercase">
                    {card.title}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
