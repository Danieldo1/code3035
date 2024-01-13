import { motion } from 'framer-motion';

const StaggeredText = ({ text }) => {
  // Define the initial and animate properties for each letter
  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.005, // Adjust the delay for the desired stagger effect
        ease: "easeOut",
      },
    }),
  };

  return (
    <p className='text-lg text-gray-300 text-center px-5 mt-2'>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          custom={index} // Pass the index to use for the delay
          style={{ display: 'inline-block', whiteSpace: 'pre' }} // Use 'pre' to maintain whitespace integrity
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

export default StaggeredText;