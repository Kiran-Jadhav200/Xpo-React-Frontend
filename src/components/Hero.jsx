import {motion} from "framer-motion"
// import Placeholder from "/Placeholder.svg"
// import NewBackground from "/NewBackground.svg"
const Placeholder = "/Placeholder.svg"
const NewBackground = "/NewBackground.svg"

export default function Hero() {
	const navigateToProducts = () => {
		window.location.href = "/products"
	}

	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{duration: 0.8}}
			className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[90vh] lg:min-h-screen pt-20 md:pt-24 px-4 md:px-12 lg:px-24 pb-8 md:pb-12 max-w-[1800px] mx-auto lg:gap-x-20 xl:gap-x-28 overflow-hidden font-roboto"
		>
			{/* Left: Text Content */}
			<motion.div
				initial={{opacity: 0, x: -50}}
				animate={{opacity: 1, x: 0}}
				transition={{duration: 0.8, delay: 0.2}}
				className="text-white text-center lg:text-left w-full lg:w-[55%] mb-12 lg:mb-0 space-y-4 md:space-y-6 lg:space-y-8 lg:ml-16 xl:ml-24"
			>
				<motion.h1
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5, delay: 0.6}}
					className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight px-2 md:px-0"
				>
					Secure Your Digital Life with{" "}
					<span className="font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">
						Xproguard
					</span>
				</motion.h1>

				<motion.p
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{duration: 0.5, delay: 0.8}}
					className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-3xl px-4 md:px-0 lg:pr-12"
				>
					At Total Xproguard, we are committed to safeguarding your data in an
					increasingly digital landscape. Our mission is to empower users with
					comprehensive mobile security solutions that ensure peace of mind.
				</motion.p>

				<motion.button
					onClick={navigateToProducts}
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5, delay: 1}}
					whileHover={{scale: 1.05, filter: "brightness(1.2)"}}
					className="inline-block mt-4 px-4 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg"
				>
					Explore Our Apps
				</motion.button>
			</motion.div>

			{/* Right: Hero Image with Background */}
			<motion.div
				initial={{opacity: 0, x: 50}}
				animate={{opacity: 1, x: 0}}
				transition={{duration: 0.8, delay: 0.2}}
				className="w-full lg:w-[45%] flex justify-center items-center relative"
			>
				<div className="relative w-full min-w-[300px] max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] px-4 md:px-0">
					{/* Blue Blur Gradient */}
					<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-20 blur-3xl rounded-full z-[-2]" />

					{/* Background Image */}
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 0.7}}
						transition={{duration: 0.8}}
						whileHover={{scale: 1.05, filter: "brightness(1.1)"}}
						className="absolute inset-0 z-[-1] w-full h-full rounded-xl overflow-hidden"
					>
						<img
							src={NewBackground}
							alt="Background"
							className="w-full h-full object-cover opacity-70 brightness-110"
						/>
					</motion.div>

					{/* Foreground Hero Image */}
					<motion.div
						initial={{opacity: 0, scale: 0.8}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.5}}
						whileHover={{scale: 1.05}}
						className="relative z-10"
					>
						<img
							src={Placeholder}
							alt="Hero"
							width="677"
							height="688"
							className="rounded-xl w-full h-auto"
						/>
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	)
}
