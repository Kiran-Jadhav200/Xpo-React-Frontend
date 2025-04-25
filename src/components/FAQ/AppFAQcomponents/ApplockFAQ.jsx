import {useState, useEffect} from "react"
import {motion} from "framer-motion"

export default function ApplockFAQ() {
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
			question: "What makes Xproguard AppLock special?",
			answer:
				"With Xproguard AppLock, you can protect your apps with a PIN lock, pattern lock, or fingerprint lock, whichever is most convenient to you. If you wish to keep changing your lock formats, you can do that too. \n\nIf someone tries to open locked apps with the wrong PIN or pattern, AppLock will capture a picture of the intruder from the front camera and show you when you open AppLock. \n\nWith Xproguard AppLock, you can set an invisible pattern lock. That means that the pattern you enter won't be visible on the screen, so anyone who looks at your phone won't be able to guess it, and your data will remain secure. \n\nNot only that, but Xproguard AppLock also has an Inactive AppLock feature. This lets you turn off AppLock when you don't need it, so you won't have to input your pattern or fingerprint every time you need to open an app.",
		},
		{
			question: "Will Xproguard AppLock work if I restart my Mobile?",
			answer:
				"Yes, it will start working, and your locked apps will be protected.",
		},
		{
			question:
				"Why is my phone showing battery drain notifications, and how do I fix it?",
			answer:
				"Xproguard AppLock has you protected 24/7. To prevent the app from being stopped by Android in the background, we need to disable battery optimization. Once you disable battery optimization, devices will not show battery drain notifications for AppLock. We can resolve it using the following steps: \n \n1. If your device has an Android 13 or 14 version, then go to the device Settings and click on the Battery option. then click on More settings, then click on Optimize battery use, click on Xproguard Applock, and select the Don't Optimize option. \n \n2. If your device has an Android 12 or less version, then go to the app info setting of Xproguard Applock; there you can see the battery usage option. Please select the No Restricted option or the No Optimized option. \n \n3. Open the Xproguard Applock app. Click on the Protect tab, and then click twice on the first button. That should be Protecting your privacy.",
		},
		{
			question: "Why is Xproguard AppLock not protecting my apps?",
			answer:
				"Sometimes devices stop the background service of Applock, but we can resolve it using the following steps: \n \n1. Go to the system app info setting of Xproguard Applock; there you can see the Battery usage option; Please select the No optimised option or No restricted option. \n \n2. Within the application, you can start or stop the service of Xproguard Applock as per your needs. If, in any case, Applock is not working, please open the Applock app, click on the Protect tab, and then click twice on the first button. That should be Protecting your privacy. Then you will receive a notification of Xproguard Applock in your system notification. \n \n3. If the first two steps do not work, please check if the required permission is granted or not.",
		},
		{
			question:
				"Why is the Google Wallet app not able to unlock using this AppLock?",
			answer:
				"Google Wallet has the following feature: \n \n Google Wallet allows users to pay on transit terminals without the need to unlock their device. To pay, the user taps the power button to light the screen, then holds their phone to the reader. The device can remain locked, and displays a tick on the screen when the transaction is successful. \n \n https://developers.google.com/wallet/tickets/open-loop/mobile-features/skip-device-unlock \n \n The Google Wallet app restricts the lock of their app, so locking the Google Wallet app won't work properly in all scenarios because of the app restriction. It'll have random behaviour to lock it.",
		},
		{
			question:
				"How can I hide the Applock notification on the system lock screen?",
			answer:
				"Go to the App Info of Xproguard Applock in system settings and click on Manage Notification and Disable Notification using the switch button.",
		},
		{
			question: "How can I prevent someone from uninstalling my AppLock?",
			answer:
				"Go to app settings and click on Prevent Applock Uninstalled. Then lock your mobile settings",
		},
		{
			question: "How to uninstall Xproguard AppLock?",
			answer:
				"First, remove Xproguard AppLock from Device Admin from mobile settings or disable Prevent AppLock Uninstalled from Xproguard AppLock app settings, and then simply uninstall it.",
		},

		{
			question: "Which permissions are required to use this app?",
			answer:
				"Required permissions: \n \n1. App usage stats (needed): It is used to search the foreground app. \n2. Overlay (needed): It is used to show a lock screen over a locked app. \n3. Disable Battery Optimization (needed): In order to prevent the app from being stopped by Android in the background, we need to disable battery optimization. \n4. Device administrator (optional): It is used when you activate the option Prevent AppLock Uninstalled. \n5. Camera (optional): It is used to capture a picture of the intruder from the front camera.",
		},
		{
			question: "How can I contact the support team?",
			answer:
				"If you have any questions or suggestions, feel free to reach us at contact@xproguard.com or visit our website at https://www.xproguard.com for more information.",
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
					Guarding Your Apps, Securing Your World.
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
