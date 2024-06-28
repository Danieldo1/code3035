"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MenuPhotos = () => {
  const [createdCategories, setCreatedCategories] = useState([]);
  const [categoryAvailability, setCategoryAvailability] = useState({});

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    fetchCategories();
    fetchCategoryAvailability();
  }, []);
  // useEffect(() => {
  // }, []);

  const fetchCategories = async () => {
    fetch("/api/offer-categories/offerName").then((response) => {
      response.json().then((data) => {
        setCreatedCategories(data);
        // console.log(data[0]);
      });
    });
  };
  const fetchCategoryAvailability = async () => {
    const response = await fetch("/api/menu-category-availability");
    const data = await response.json();
    const availabilityMap = data.reduce((acc, item) => {
      acc[item.categoryName] = item.available;
      return acc;
    }, {});
    setCategoryAvailability(availabilityMap);
  };

  const renderCategory = (name, image, link,index) => {
    if (categoryAvailability[name] === false) return null;

    return (
      <Link href={link} className="h-full w-full md:w-full md:h-full" key={name}>
      <motion.div
        className="mx-auto relative"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1, delay: 0.15 * (index + 1) }}
      >
        <h2 className="absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-3xl font-bold z-10 transition duration-700">
          {name}
        </h2>
        <div className="flex justify-center items-center w-full h-full aspect-square overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={`${name} image`}
            layout=""
            width={400}
            height={400}
            className=""
          />
        </div>
      </motion.div>
    </Link>
    );
  };


  return (
    <>
    <div className="grid grid-cols-2 gap-5 items-center justify-center mb-5">
      {renderCategory("Bar", "/bar1.webp", "/menu-page",0)}
      {renderCategory("Shisha", "/shisha1.webp", "/shisha-page",1)}
      {renderCategory("Snacks", "/snackers.webp", "/food-page",2)}
      {renderCategory("Tea", "/tea.webp", "/tea-page",3)}
    </div>
        {createdCategories[0]?.available === true ? (
          <Link
            href="/offer-page"
            className="col-span-2 w-full h-full md:w-full md:h-full "
          >
            <motion.div
              className="mx-auto md:mt-0 relative rounded-lg "
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="absolute inset-0 flex justify-center items-center rounded-lg bg-[#1B1918] bg-opacity-50 hover:bg-opacity-75 text-white text-3xl font-bold z-10 transition duration-700">
                {createdCategories[0]?.name}
              </h2>
              <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                <Image
                  src="/party.jpeg"
                  alt="Offer image"
                  layout="responsive"
                  width={400}
                  height={125}
                  className=""
                />
              </div>
            </motion.div>
          </Link>
        ) : null}
    </>
  );
};

export default MenuPhotos;
