import {useState, useEffect} from "react"
import {motion} from "framer-motion"

export default function AntitheftFAQ() {
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
			question: "What makes Xproguard Anti-Theft special?",
			answer:
				"Xproguard Anti-Theft is a comprehensive app that comes with a variety of features to protect your device from theft or unauthorized access. The Anti-Touch Detect feature notifies you if someone tries to use your phone without your permission, making it perfect for keeping your device safe in public places With the Intruder Alert feature, the app can capture photos of anyone who tries to access your phone without your permission. Never lose your phone again with the Pocket Alarm feature. It alerts you if your phone is taken out of your pocket or bag without your knowledge This app is completely offline; no internet permission has been added, no data has been shared with third parties, there are no advertisements, and there is no data collection.",
		},
		{
			question:
				" 2:- Will the Intruder Alert and Wrong PIN Alert feature work if I restart my mobile?",
			answer:
				"Yes, it will start working once you unlock your device with a valid PIN or pattern after restarting your device.",
		},
		{
			question:
				"How can I hide the Anti-Theft notification on the system lock screen?",
			answer:
				"Go to the App Info of Xproguard Anti-Theft in system settings and click on Manage Notification and Disable Notification using the switch button.",
		},

		{
			question: "How do I uninstall Xproguard Anti-Theft?",
			answer:
				"First, remove Xproguard Anti-Theft from Device Admin from mobile settings or deactivate Intruder Alert and Wrong PIN Alert features from the Xproguard Anti-Theft app, and then simply uninstall it.",
		},
		{
			question: "How do I activate the Wrong PIN Alert feature?",
			answer:
				"Please enable the Admin Mode and Ring Alarm switch buttons to activate the Wrong PIN Alert feature.",
		},
		{
			question: "Does this app support Dark Mode?",
			answer: "Yes, please enable the system dark mode in device settings.",
		},
		{
			question: " Which permissions are required to use this app?",
			answer:
				"Required permissions: \n \n1. Device Administrator (needed): Required to work the Intruder Alert and Wrong Pin Alert features properly. \n\n2. Camera (needed): To capture photos of anyone trying to access your phone with the wrong PIN or password.",
		},
		{
			question: "How does the pocket alarm feature work?",
			answer:
				"First, enable the pocket alarm feature from the Xproguard Anti-Theft app. If someone tries to get rid of the phone from your pocket or purse in one of the below two ways, our app will alert you using the selected alarm. \n\n1. Try to touch the front camera space of your mobile. \n\n2. Try to touch the whole mobile screen space with their hand.",
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
					Xproguard AntiTheft is a robust mobile security solution designed to
					protect your device from unauthorized access and theft. It offers
					features such as GPS tracking, remote locking, and secure data wiping
					to ensure your device's safety.​
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
