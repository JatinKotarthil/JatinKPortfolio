import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react"; // Import useEffect and useState

const Hero = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  // Simulate data loading using useEffect
  useEffect(() => {
    // Simulate data loading delay with setTimeout
    const timeout = setTimeout(() => {
      // Set dataLoaded to true after data is loaded
      setDataLoaded(true);
    }, 1000); // Adjust delay as needed

    // Clear timeout on component unmount to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []); // Run effect only once on component mount

  // Render the Hero component content only if data is loaded
  return dataLoaded ? (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        {/* Your existing content */}
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  ) : null; // Render null if data is not loaded
};

export default Hero;
