import { motion } from "framer-motion";

export default function EndingButtons() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center mt-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl mb-6  bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Check Our Applications
      </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://play.google.com/store/apps/dev?id=9062741318600846509&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300"
        >
          <img
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            width={200}
            height={60}
            className="cursor-pointer drop-shadow-lg hover:drop-shadow-2xl"
          />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://apps.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300"
        >
          <img
            src="/app-store-badge.svg"
            alt="Download on the App Store"
            width={180}
            height={60}
            className="cursor-pointer drop-shadow-lg hover:drop-shadow-2xl"
          />
        </motion.a>
      </div>
    </motion.div>
  );
}
