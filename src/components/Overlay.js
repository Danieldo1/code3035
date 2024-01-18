'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function LoadingOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Simulate a loading process, you should replace this with your actual loading logic
    const timer = setTimeout(() => {
      setShow(false);
    },2000); // Replace 3000 with the actual time it takes to load your resources

    // Clear the timeout if the component is unmounted before the loading is done
    return () => clearTimeout(timer)
  }, []); // The empty array ensures this effect runs only once on mount

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
    <AnimatePresence>
     {show && (
          <motion.div
            key="loading"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 10000,
            }}
          >
            <img src={'/smoke2.gif'} alt="Loading" className='object-cover object-center w-full h-full' />
          </motion.div>
        )}
    </AnimatePresence>
    </>
  );
}