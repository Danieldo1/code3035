"use client";

import React, { useEffect, useState } from "react";
import { Loader2, BetweenHorizontalStart } from "lucide-react";
import Link from "next/link";
import YourComponent from "@/components/YourComponent";
import { motion } from "framer-motion";

const FoodPage = () => {
  const [categories, setCategories] = useState([]);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch("/api/snack-categories").then((response) => {
      response.json().then((data) => {
        setCategories(data);
      });
    });
    fetch("/api/snack-menu").then((response) => {
      response.json().then((data) => {
        setMenu(data);
      });
      setLoading(false);
    });
  }, [loading]);

  useEffect(() => {
    const handleScroll = () => {
      let currentCategory = null;
      categories.forEach((c) => {
        const section = document.getElementById(c.name);
        const sectionTop = section.getBoundingClientRect().top;
        // Adjust the "330" to a smaller value that matches the expected trigger point
        const triggerOffset = 550; // Example: change to a value that works for your layout
        if (sectionTop + triggerOffset < window.innerHeight) {
          currentCategory = c._id;
        }
      });
      setActiveCategory(currentCategory);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [categories]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const text = "Snack Menu";

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="mt-20">
      <div className="relative flex justify-center">
        <h1 className="text-4xl font-black tracking-wider text-center absolute top-0 z-30">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              custom={index}
              style={{ display: "inline-block" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>
      </div>
      {/* <StaggeredText text={textSmall} /> */}

      {loading ? (
        <div className="absolute inset-0 w-full h-full  flex justify-center items-center">
          <Loader2 className="animate-spin " />
        </div>
      ) : (
        <>
          {categories.length > 0 && (
            <>
              <div className="sticky top-[30px]  z-30">
                <YourComponent
                  categories={categories}
                  handleCategoryClick={handleCategoryClick}
                />
              </div>

              <div className="flex pl-5 overflow-hidden flex-row snap-x snap-proximity scroll-smooth flex-nowrap scrollbar-hide sticky top-[50px] z-20 bg-[#1B1918] overflow-x-auto">
                {categories.map((c) => (
                  <>
                    <div
                      key={c._id}
                      className="pt-10 mx-4 ml-5   whitespace-nowrap "
                    >
                      <Link href={`#${c.name}`} scroll={true}>
                        <button
                          onClick={() => {
                            setActiveCategory(c._id);
                            handleCategoryClick(c._id);
                          }}
                        >
                          <h2
                            className={`${
                              activeCategory === c._id
                                ? "underline snap-center  font-bold  decoration-solid  underline-offset-4 duration-500 transition delay-200"
                                : ""
                            }`}
                          >
                            {c.name}
                          </h2>
                        </button>
                      </Link>
                    </div>
                  </>
                ))}
              </div>
            </>
          )}

          {categories.length > 0 && (
            <div className=" flex-1 gap-5 justify-stretch w-full items-center">
              {categories.map((c) => (
                <div
                  id={c.name}
                  key={c._id}
                  className="pt-10 scroll-target max-w-sm md:max-w-6xl mx-auto"
                >
                  <button className="items-center snap-center justify-center text-center flex w-full">
                    <h2
                      className={`text-center ${
                        c.description.length === 0 ? "pb-5" : ""
                      } font-bold text-xl`}
                    >
                      {c.name}
                    </h2>
                  </button>
                  <p
                    className={`text-sm text-gray-400 text-right lg:mr-10 ${
                      c.description.length > 0 ? "pb-5" : ""
                    }`}
                  >
                    {c.description}
                  </p>
                  <div className="flex flex-row flex-wrap flex-1 snap-mandatory snap-x  justify-stretch w-full ">
                    {menu
                      .filter(
                        (item) =>
                          item.category === c._id && item.available === true
                      )
                      .map((item) => (
                        <>
                          <div
                            key={item._id}
                            className="flex  justify-between w-full  items-center md:px-5 lg:px-10 bg-[#1B1918]"
                          >
                            <div className="flex justify-between items-center gap-5 ">
                              <div className="w-[100%]">
                                {/* <p>{item.available === true ? "Available" : "Not Available"}</p> */}
                                <h3 className="text-md font-bold">
                                  {item.name}
                                </h3>

                                <p className="text-sm text-gray-400">
                                  {item.description}
                                </p>
                                {item.sizes.map((size) => (
                                  <p
                                    key={size._id}
                                    className="text-xs text-gray-400"
                                  >
                                    {" "}
                                    - {size.name}
                                  </p>
                                ))}
                                {item.extras.map((extra) => (
                                  <p
                                    className="text-xs  text-gray-500 capitalize"
                                    key={extra._id}
                                  >
                                    {extra.name}
                                  </p>
                                ))}
                              </div>
                            </div>
                            <div className="text-end w-[20%]">
                              <p className="text-md font-bold">{item.price}</p>
                              {item.sizes.map((size) => (
                                <p
                                  className="text-xs mt-4 text-gray-500 "
                                  key={size._id}
                                >
                                  {size.price + item.price}€
                                </p>
                              ))}
                              {item.extras.map((extra) => (
                                <p
                                  className="text-xs mt-1 text-gray-500 capitalize"
                                  key={extra._id}
                                >
                                  + {extra.price}
                                </p>
                              ))}
                            </div>
                          </div>
                          <div className="border border-white  md:mx-5 lg:mx-10 mx-auto  my-2 w-full" />
                        </>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default FoodPage;
