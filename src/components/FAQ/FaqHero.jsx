import {motion} from "framer-motion"

export default function FaqHero() {
	return (
		<div className="relative w-full h-screen flex flex-col items-center justify-center px-4 text-white overflow-hidden bg-gradient-to-br from-[#061A40] to-[#000A1B]">
			{/* Animated Background */}
			<motion.div
				className="absolute inset-0 opacity-40"
				animate={{rotate: [0, 360]}}
				transition={{duration: 50, repeat: Infinity, ease: "linear"}}
			>
				<svg
					viewBox="0 0 600 600"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full h-full"
				>
					<defs>
						<radialGradient id="blueGradient" cx="50%" cy="50%" r="50%">
							<stop offset="0%" stopColor="rgba(0,191,255,0.8)" />
							<stop offset="100%" stopColor="rgba(0,122,204,0.2)" />
						</radialGradient>
					</defs>

					{/* Large Outer Circle */}
					<motion.circle
						cx="300"
						cy="300"
						r="160"
						stroke="url(#blueGradient)"
						strokeWidth="8"
						fill="none"
						animate={{scale: [1, 1.05, 1]}}
						transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}
					/>

					{/* Inner Pulsing Circle */}
					<motion.circle
						cx="300"
						cy="300"
						r="100"
						stroke="rgba(0,191,255,0.5)"
						strokeWidth="6"
						fill="none"
						animate={{scale: [1, 1.1, 1]}}
						transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
					/>

					{/* Floating Small Circles */}
					<motion.circle
						cx="450"
						cy="150"
						r="18"
						fill="rgba(173,216,230,0.3)"
						animate={{y: [0, -15, 0]}}
						transition={{duration: 5, repeat: Infinity, ease: "easeInOut"}}
					/>
					<motion.circle
						cx="150"
						cy="450"
						r="28"
						fill="rgba(0,191,255,0.4)"
						animate={{x: [0, -20, 0]}}
						transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}
					/>

					{/* Orbiting Glowing Circles */}
					<motion.circle
						cx="200"
						cy="100"
						r="22"
						fill="rgba(30,144,255,0.4)"
						animate={{x: [0, 30, 0], y: [0, 20, 0]}}
						transition={{duration: 7, repeat: Infinity, ease: "easeInOut"}}
					/>
					<motion.circle
						cx="500"
						cy="400"
						r="16"
						fill="rgba(0,122,204,0.5)"
						animate={{x: [0, -25, 0], y: [0, -15, 0]}}
						transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
					/>
				</svg>
			</motion.div>

			{/* Animated Text */}
			<motion.div
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.5}}
				className="z-10 text-center max-w-6xl px-4"
			>
				<h1 className="text-4xl sm:text-5xl md:text-7xl  font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text whitespace-normal lg:whitespace-nowrap">
					Frequently Asked Questions
				</h1>
				<motion.p
					initial={{opacity: 0, y: 30}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 1, delay: 1}}
					className="text-base sm:text-lg md:text-xl mt-4 text-blue-200 max-w-3xl mx-auto"
				>
					The Smart Sales Assistant can also provide insights into customer
					behavior and preferences, allowing you to optimize your marketing and
					sales strategies.
				</motion.p>
			</motion.div>

			{/* Subtle Bottom Line */}
			<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-600 opacity-30"></div>
		</div>
	)
}
