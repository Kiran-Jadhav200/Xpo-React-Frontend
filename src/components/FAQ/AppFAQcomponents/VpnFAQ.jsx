import {useState, useEffect} from "react"
import {motion} from "framer-motion"

export default function VpnFAQ() {
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
			question: "What makes Xproguard VPN special?",
			answer:
				"Xproguard VPN is a secure, fast, and reliable VPN service that ensures your internet traffic and activities are kept safe and private. \n\nXproguard VPN helps you stay safe and protect your identity and information while connected to the Internet. And with our easy-to-use interface, you can quickly change your location and IP address with just a few clicks. \n\nAlso, you can now watch your favorite movies, TV shows, music, videos, or any other content without worrying about your internet service provider tracking your activities and logging your information.",
		},
		{
			question: "Why do I need a VPN?",
			answer:
				"A virtual private network, or VPN, is an encrypted connection over the Internet from a device to a network. The encrypted connection helps ensure that sensitive data is safely transmitted. It prevents unauthorized people from eavesdropping on the traffic and allows the user to conduct work remotely. VPN technology is widely used in corporate environments.",
		},
		{
			question: "What does Xproguard VPN do?",
			answer:
				"With Xproguard VPN, you can change your IP location to anywhere in the world. \n\nAs a location changer, Xproguard VPN hides your real IP address and gives you a security shield and freedom from snoopers online by making all your encrypted information go through a secured tunnel. \n\nThat way, third parties or hackers can not interrupt your connection and steal your data.",
		},
		{
			question: "Is Xproguard VPN safe?",
			answer:
				"Yes, we use SSL to encrypt your internet data. Your data is indecipherable to prying eyes while in transit. Moreover, we do not collect or share any data belonging to users. Please feel safe using our product.",
		},
		{
			question: "How do I use Xproguard VPN?",
			answer:
				"Touch the switch button on the homepage. Also, please trust this application if your device asks for VPN service permission.",
		},
		{
			question: "How do I switch server locations?",
			answer:
				"Choose the location you want in the server list, and then the VPN will connect to the location you click.",
		},
		{
			question: " How can I disconnect the Xproguard VPN?",
			answer:
				"Click the same Switch button on the homepage to disconnect the VPN.",
		},
		{
			question: "Does this app support Dark Mode?",
			answer: "Yes, please enable the system dark mode in device settings.",
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
					Your Digital Shield for a Safer Internet.
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
