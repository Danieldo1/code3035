"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Menu, X, LogOut } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const session = useSession();
  const status = session.status;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center pt-4 px-4  fixed top-0 bg-[#1B1918] w-full z-40">
      <Link className="text-3xl font-bold" href="/">
        <Image src={"/logo1.webp"} alt="logo" width={150} height={200} />
      </Link>
      <button
        onClick={togglePopup}
        className="bg-white p-2 rounded text-[#1B1918] font-semibold hover:bg-[#1B1918] hover:border-white hover:border-[1px] hover:text-white transition-all duration-300 ease-in-out delay-50 shimmer-effect"
      >
        Reservations
      </button>
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center"
          >
            <motion.div
              className="bg-white p-4 pt-8 rounded relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <button
                onClick={togglePopup}
                className="absolute cursor-pointer top-1 right-3"
              >
                <X className="w-7 h-7 text-black" />
              </button>
              <p className="absolute top-1 left-4 text-center text-[#1B1918] font-semibold">
                Online Reservation
              </p>
              <iframe
                src="https://76691.restoplace.ws/"
                className="iframeStyle"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 pt-36 w-full h-full bg-[#1B1918] text-center flex flex-col items-center z-50"
            >
              <motion.button className="md:hidden " onClick={toggleMenu}>
                <X className="w-10 h-10 top-[22px] fixed  right-[16px] active:text-slate-300 hover:text-slate-300 delay-150 duration-300 " />
              </motion.button>
              <Link
                className="text-3xl font-bold fixed top-[15px] left-[17px]"
                href="/"
              >
                <Image
                  src={"/logo1.webp"}
                  alt="logo"
                  width={150}
                  height={200}
                />
              </Link>

              <nav className="flex flex-col  items-center" onClick={toggleMenu}>
                <Link
                  href={"/"}
                  className="font-bold text-3xl mb-4 active:text-slate-300 hover:text-slate-300 delay-150 duration-300 "
                >
                  Home
                </Link>
                <Link
                  href={"/choose-menu"}
                  className="font-bold text-3xl mb-4 active:text-slate-300 hover:text-slate-300 delay-150 duration-300"
                >
                  Menu
                </Link>

                <Link
                  href={"/contact"}
                  className="font-bold text-3xl mb-4 active:text-slate-300 hover:text-slate-300 delay-150 duration-300"
                >
                  Contact
                </Link>

                {/* <Link href={''} className='font-bold text-3xl mb-4 active:text-green-300 hover:text-green-300 delay-150 duration-300'>
              Rent
            </Link> */}

                {status === "authenticated" && (
                  <>
                    <Link
                      href={"/profile"}
                      className="bg-blue-300 font-bold text-xl text-black px-4 py-2 rounded-full mb-4"
                    >
                      Admin
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="bg-red-500 font-bold text-2xl text-white px-2 py-2 items-center justify-center rounded-full"
                    >
                      <LogOut />
                    </button>
                  </>
                )}

                {/* {status !== 'authenticated' && (
              <Link href={'/login'} className='bg-red-500 text-white px-4 py-2 rounded-full mb-4'>
                Register
              </Link>
            )} */}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {!isMenuOpen && (
        <>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className="w-10 h-10 active:text-slate-300 hover:text-slate-300 delay-150 duration-300" />
          </button>

          <div className="hidden md:flex flex-col">
            <nav className="flex gap-4 md:gap-12 font-semibold items-center">
              <Link
                href={"/"}
                className="font-bold text-xl  active:text-slate-300 hover:text-slate-300 delay-150 duration-300 "
              >
                Home
              </Link>
              <Link
                href={"/choose-menu"}
                className="font-bold text-xl  active:text-slate-300 hover:text-slate-300 delay-150 duration-300"
              >
                Menu
              </Link>
              {/* <Link href={'/shisha-page'} className='font-bold text-xl  active:text-slate-300 hover:text-slate-300 delay-150 duration-300'> Hookah  Menu</Link> */}
              <Link
                href={"/contact"}
                className="font-bold text-xl active:text-slate-300 hover:text-slate-300 delay-150 duration-300"
              >
                Contact
              </Link>
              {/* <Link href={''}>Rent</Link> */}

              {status === "authenticated" && (
                <>
                  <Link
                    href={"/profile"}
                    className="bg-blue-300 font-bold text-xl text-white px-4 py-2 rounded-full"
                  >
                    Admin
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="bg-red-500 font-bold text-2xl text-white px-2 py-2 rounded-full"
                  >
                    <LogOut />
                  </button>
                </>
              )}

              {/* {status !== 'authenticated' && (
                <Link href={'/login'} className='bg-red-500 text-white px-4 py-2 rounded-full'>
                  Register
                </Link>
              )} */}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
