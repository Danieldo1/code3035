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

  const lines = text.split('\n');

  return (
    <div className='text-lg text-gray-300 text-center px-5 mt-2'>
      {lines.map((line, lineIndex) => (
        <p key={lineIndex}>
          {line.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              custom={charIndex + lineIndex * line.length} // Adjust the delay based on line and char index
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
              {char}
            </motion.span>
          ))}
          {lineIndex !== lines.length - 1 && <br />} {/* Only insert <br /> if it's not the last line */}
        </p>
      ))}
    </div>
  );
};

export default StaggeredText;