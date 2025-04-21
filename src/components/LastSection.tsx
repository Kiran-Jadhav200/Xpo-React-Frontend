import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';

export default function LastSection() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[90vh] lg:min-h-screen pt-20 md:pt-24 px-4 md:px-12 lg:px-24 pb-8 md:pb-12 max-w-[1800px] mx-auto lg:gap-x-20 xl:gap-x-28 overflow-hidden font-Roboto"
      >
        {/* Left Section: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-center lg:text-left w-full lg:w-[55%] mb-12 lg:mb-0 space-y-4 md:space-y-6 lg:space-y-8 lg:ml-16 xl:ml-24"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-tight px-2 md:px-0"
          >
            Take Control of Your Digital Security 
            <span className='font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent whitespace-nowrap'> Today!</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-3xl px-4 md:px-0 lg:pr-12"
          >
            Protect your data today. Explore our comprehensive mobile security products tailored for your needs.
          </motion.p>
          <div className="flex justify-center lg:justify-start gap-4">
            <motion.a
              href="#explore"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 }, filter: "brightness(1.2)" }}
              className="inline-block mt-4 px-4 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 shadow-lg"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 }, filter: "brightness(1.2)" }}
              className="inline-block mt-4 px-4 py-2 text-sm font-semibold text-white rounded-full border-2 border-blue-600 hover:bg-blue-600"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section: Main Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[45%] flex justify-center items-center relative"
        >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-30 blur-3xl rounded-full z-[-2]"></div>

          <div className="relative w-full min-w-[300px] max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              className="relative z-10"
            >
              <Image
                src="https://s3-alpha-sig.figma.com/img/7ebd/4655/6f60b9772677ba2962bc557d93bc0e9b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ki2ZbSQJBxELurD9UwLMWP-GZSMoIQcsnV95AO3BSk7PnYX5wj-CdsT40gApbInyPPSDpEQFLe1sa6hFXmE5M-AM1io6y-vAlpBWFaROxhv0Fq~t0LYEwW-pJSHM4582eUvJfvWAzvFMbTJdiuqYJrsE3onYvs2u~0GbOyJJoDjB-kkcXK8q76ldphQvPEkQ0QnB~rq6BaV9-YIa7OSXMrmktf34VDjt4yhALS-KelB03Vh1X-ci2Zt3kaY6f0WJNUgEuCWCwrxdNFLcUD~sEWxqaGGjE5wxKRaSgc6OcUleRXJz8~3gbqzEmr2lcUi1aVfmZyusyvET61fz2fft8g__"
                alt="Hero Image"
                width={1200} height={900}
                className="w-full h-auto object-cover rounded-xl scale-150 lg:scale-150 md:scale-125 sm:scale-110"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
