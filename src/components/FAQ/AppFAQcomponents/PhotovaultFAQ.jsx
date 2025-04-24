import {useState, useEffect} from "react"
import {motion} from "framer-motion"

export default function PhotoVaultFAQ() {
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
			question: "What makes Xproguard Photo Vault special?",
			answer:
				"Using your PIN (master password), you can restore your backup file using the following steps: \n\n1. Open the Xproguard Photo Vault app. \n\n2. Click on the add button on the home page and select the backup option. \n\n3. Select the stored Xproguard backup file from your device. \n\n4. Enter your PIN (master password), and you are done. \n\nAll backup files will display on the home page of the Photo Vault app.",
		},
		{
			question:
				" Can I restore my photo vault backup without a PIN (master password)?",
			answer:
				"No, the photo vault data in this app is completely encrypted, so for the recovery of any data, you must have a PIN (master password). \n\nA reset of the PIN (master password) is not possible if the original PIN (master password) has been lost.",
		},
		{
			question: "Why does this app use only local storage backup?",
			answer:
				"Xproguard Photo Vault is a 100% secure app since it doesn't have access to the internet. \n\nAll your files are stored locally, so there's no need to worry about cloud storage risks",
		},
		{
			question:
				"Can I access my photo vault backup after reinstalling the app?",
			answer: "Yes, you can access it with your PIN (master password).",
		},
		{
			question:
				"Can I store my photo vault backup files on my drive or in cloud storage?",
			answer: "Yes, you can store it manually.",
		},
		{
			question:
				"How can I restore photo vault backup files from my drive or cloud storage?",
			answer:
				"To restore a photo vault backup file from the cloud in the app, follow the below steps. \n\n1. Download the photo vault (Xproguard) backup file on your Android mobile device. \n\n2. Open the Xproguard Photo Vault app. \n\n3. Click on the add button on the home page and select the backup option. \n\n4. Select the stored Xproguard backup file on your device. \n\n5. Enter the PIN (master password), and you are done.",
		},
		{
			question: " Does this app support Dark Mode?",
			answer: "Yes, please select the dark mode in the app theme settings.",
		},
		{
			question: "Which permissions are required to use this app?",
			answer:
				"The Xproguard Photo Vault uses storage permission to access photos and videos from users and store them in an encrypted format in local storage only.",
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
					Xproguard PhotoVault is a privacy-focused app designed to securely
					store your private photos and videos. While the app doesn't have an
					official slogan, here are some catchy phrases that encapsulate its
					features and benefits
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
