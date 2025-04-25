import {useState, useEffect} from "react"
import {motion} from "framer-motion"

export default function FirewallFAQ() {
	const [openIndex, setOpenIndex] = useState(null)
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		const handleScroll = () => setOffset(window.scrollY * 0.2)
		window.scrollTo(0, 0)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const toggleAnswer = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	const questions = [
		{
			question: "What makes Xproguard Firewall special?",
			answer:
				"Xproguard Firewall is an internet security app that offers simple and advanced ways to restrict apps' access to the internet. \n\nUsing the Xproguard Firewall, you can control which applications have access to the internet. You can create a whitelist of apps that are allowed or a blacklist of apps that are denied. \n\nKeep hackers and spies at bay with comprehensive security measures that block all incoming Internet attacks and prevent unauthorized access to your device.",
		},
		{
			question: "Why do I need a firewall?",
			answer:
				"Using a firewall, you can control which applications have access to the internet. Firewall is an advanced way to restrict apps' access to the internet.",
		},
		{
			question: "How do I use the Xproguard firewall?",
			answer:
				"Turn on Firewall by clicking on the VPN button on the home page. Select applications by clicking on the network button that you want to prevent internet access.",
		},
		{
			question: "How can I turn off the Xproguard firewall?",
			answer:
				"Click on the same VPN button on the homepage to stop the firewall.",
		},
		{
			question: "How to turn on the always-on VPN feature?",
			answer:
				"Click on the menu button on the home page, then select the Always-ON VPN feature, then click on the settings icon of VPN, and finally turn on the Always-on VPN feature.",
		},
		{
			question: "Does this app support Dark Mode?",
			answer: "Yes, please enable the system dark mode in device settings.",
		},
		{
			question: "Which permissions are required to use this app?",
			answer: "Xproguard firewall is not taking any permissions.",
		},
		{
			question: "How can I contact the support team?",
			answer:
				"If you have any questions or suggestions, feel free to reach us at contact@xproguard.com or visit our website at https://www.xproguard.com for more information",
		},
	]

	return (
		<div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 text-white overflow-hidden pt-16">
			<motion.div
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.5}}
				className="z-10 text-center max-w-6xl px-4"
			>
				<h2 className="text-4xl sm:text-5xl text-center mb-10 font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text max-w-3xl mx-auto">
					We're the best and we can explain why
				</h2>
				<p className="text-center text-xl sm:text-2xl font-medium text-blue-200 mb-12">
					The Xproguard Firewall is designed to provide robust protection
					against cyber threats, ensuring your digital safety.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
				{questions.map((item, index) => (
					<div
						key={index}
						className="border border-gray-800 rounded-2xl shadow-lg bg-gray-900 hover:bg-gray-800 transition duration-300 p-6 w-full"
					>
						<div
							className="flex justify-between items-center cursor-pointer"
							onClick={() => toggleAnswer(index)}
						>
							<h3
								className={`font-semibold text-lg sm:text-xl transition-colors duration-300 ${
									openIndex === index ? "text-blue-500" : "text-blue-200"
								}`}
							>
								{item.question}
							</h3>
							<span
								className={`text-3xl transition-transform duration-300 transform ${
									openIndex === index ? "text-blue-500" : "text-blue-400"
								}`}
							>
								{openIndex === index ? "−" : "+"}
							</span>
						</div>
						{openIndex === index && (
							<div className="mt-4 p-4 border-t border-gray-600 rounded-lg transition-opacity duration-500 opacity-100">
								<p className="text-blue-200 text-lg leading-relaxed">
									{item.answer}
								</p>
							</div>
						)}
					</div>
				))}
			</div>

			{/* Background image with twinkling stars */}
			<div
				className="relative mt-12 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-80 sm:h-96 bg-cover bg-center rounded-lg overflow-hidden"
				style={{
					backgroundImage:
						"url('https://cdn.prod.website-files.com/643e232532628163609bd651/645936d4b68c6362cf107667_mapbase%20(1).png')",
					filter: "hue-rotate(300deg)",
				}}
			>
				{/* Twinkling stars */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					{[...Array(30)].map((_, i) => (
						<div
							key={i}
							className="absolute bg-white rounded-full opacity-0 animate-twinkle"
							style={{
								width: `${Math.random() * 3}px`,
								height: `${Math.random() * 3}px`,
								top: `${Math.random() * 100}%`,
								left: `${Math.random() * 100}%`,
								animationDelay: `${Math.random() * 5}s`,
							}}
						></div>
					))}
				</div>
			</div>

			{/* Add global keyframes for twinkle animation */}
			<style>
				{`
          @keyframes twinkle {
            0% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 0.2; transform: scale(1); }
          }
          .animate-twinkle {
            animation: twinkle 3s infinite alternate ease-in-out;
          }
        `}
			</style>
		</div>
	)
}
