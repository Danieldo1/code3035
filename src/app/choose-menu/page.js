import React from "react";
import MenuPhotos from "@/components/MenuPhotos";

export const metadata = {
  title: "3035 | Choose Menu",
  description: "Delve into the most exquisite menu of Limassol. Choose to indulge into a authentic Chinese tea ceremony in Limassol or to enjoy our artisanal drinks.All while smoking on a steamy shisha. Come and experience it for yourself",
}

const ChooseMenu = () => {
  return (
    <>
      <h1 className="flex justify-center text1 font-extrabold text-4xl text-center mt-24  md:mb-5 ">
        Menu
      </h1>
      <section className="h-full flex flex-col justify-start mt-10 items-center ">
        <div>
          <MenuPhotos />
        </div>
      </section>
    </>
  );
};

export default ChooseMenu;
