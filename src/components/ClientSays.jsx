import React from "react"
import {motion} from "framer-motion"
import Phone from "../assets/Home/Phone.svg"
const ClientSays = () => {
	return (
		<section className="flex flex-col md:flex-row w-[92%] h-screen items-center justify-between p-6 md:p-10 text-white mx-auto">
			{/* Left Section */}
			<motion.div
				initial={{x: -100, opacity: 0}}
				animate={{x: 0, opacity: 1}}
				transition={{duration: 0.6}}
				className="flex flex-col items-center w-full md:w-1/2 relative"
			>
				<div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] lg:h-[75vh] flex justify-center px-4 sm:px-0">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-30 blur-3xl rounded-full z-0"></div>
					<motion.img
						whileHover={{scale: 1.05}}
						transition={{duration: 0.2}}
						src={Phone}
						alt="Security illustration"
						className="w-[500px] h-full object-cover relative z-10 cursor-pointer"
					/>
				</div>
			</motion.div>

			{/* Right Section */}
			<div className="w-full md:w-1/2 text-left md:pl-10">
				<h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
					<span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
						Global Leader
					</span>{" "}
					in Mobile Security Solutions
				</h1>

				<p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
					Xproguard protects millions of users worldwide. Our innovative
					solutions ensure data safety.
				</p>

				<div className="flex flex-col sm:flex-row mt-8 space-y-4 sm:space-y-0 lg:space-x-16 sm:space-x-6">
					<div>
						<h2 className="text-4xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
							70%
						</h2>
						<p className="text-gray-300 text-sm sm:text-base leading-relaxed">
							Increase in user satisfaction with our <br />
							security solutions.
						</p>
					</div>
					<div>
						<h2 className="text-4xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
							95%
						</h2>
						<p className="text-gray-300 text-sm sm:text-base leading-relaxed">
							Reduction in data breaches with <br />
							Xproguard protection.
						</p>
					</div>
				</div>

				<div className="mt-8 space-x-4">
					<button className="px-4 py-2 sm:px-6 sm:py-2 border-2 border-blue-500 rounded-xl hover:bg-blue-600 transition-all">
						Learn More
					</button>
					<button className="text-blue-400 rounded-full px-4 py-2 hover:text-blue-300 transition-all">
						Join &gt;
					</button>
				</div>
			</div>
		</section>
	)
}

export default ClientSays
