import React, {useEffect} from "react"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import Firewall from "../../assets/appicon/firewall.svg" //done
import Photovault from "../../assets/appicon/photovault.svg" // done
import Applock from "../../assets/appicon/Applock.svg" //done
import Antitheft from "../../assets/appicon/antitheft.svg" //done
import Vpn from "../../assets/appicon/vpn.svg" // done
import PasswordManager from "../../assets/appicon/passwordManager.svg" //done
import AppStore from "../../assets/appicon/app-store.svg"
import GooglePlay from "../../assets/appicon/Google_Play_Store_badge_EN.svg"

const apps = [
	{
		icon: Firewall,
		title: "Xproguard Firewall",
		description:
			"Protect your device from threats with real-time monitoring, one-tap security, and suspicious connection blocking.",

		playStore: "/firewallFAQ",
		appStore: "#",

		playStoreRender: true,
		appStoreRender: false,
		privacyPath: "/privacy-policy-firewall",
	},
	{
		icon: Photovault,
		title: "Xproguard PhotoVault",
		description:
			"Lock and hide private photos/videos with military-grade encryption, secure access, and backup recovery.",

		playStore: "/photovaultFAQ",
		appStore: "/photovaultFAQIOS",

		playStoreRender: true,
		appStoreRender: true,
		privacyPath: "/privacy-policy-photovault",
	},
	{
		icon: Applock,
		title: "Xproguard AppLock",
		description:
			"Secure your data by locking apps with PIN, pattern, or fingerprint—plus stealth mode for extra privacy.",

		playStore: "/applockFAQ",
		appStore: "#",

		playStoreRender: true,
		appStoreRender: false,
		privacyPath: "/privacy-policy-applock",
	},
	{
		icon: Antitheft,
		title: "Xproguard AntiTheft",
		description:
			"Track, lock, and erase your lost device remotely with GPS tracking, alarms, and secure data wipe.",
		playStore: "/antitheftFAQ",
		appStore: "#",

		playStoreRender: true,
		appStoreRender: false,
		privacyPath: "/privacy-policy-antitheft",
	},
	{
		icon: Vpn,
		title: "Xproguard VPN",
		description:
			"Browse securely and anonymously with our ultra-fast VPN—no logs, multi-location servers, and one-tap connection.",
		playStore: "vpmFAQ",
		appStore: "#",

		playStoreRender: true,
		appStoreRender: false,
		privacyPath: "/privacy-policy-vpn",
	},
	{
		icon: PasswordManager,
		title: "Xproguard Password Manager",
		description:
			"Store, auto-fill, and sync passwords securely across devices.",

		playStore: "/passwordFAQ",
		appStore: "/passwordFAQIOS",

		playStoreRender: true,
		appStoreRender: true,
		privacyPath: "/privacy-policy-password-manager",
	},
]

const ProductCard = () => {
	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-6">
				{apps.map(({icon, title, description, privacyPath}, index) => (
					<motion.div
						key={index}
						whileHover={{scale: 1.03}}
						className="bg-[#081B33] text-white border border-blue-500 rounded-2xl p-6 flex flex-col justify-between shadow-md transition-all duration-300"
					>
						<div className="flex items-center mb-4">
							<img src={icon} alt={title} className="w-12 h-12 mr-4" />
							<h3 className="text-xl font-semibold">{title}</h3>
						</div>
						<p className="text-sm text-blue-100 flex-grow">{description}</p>

						<Link
							to={privacyPath}
							className="text-sm text-blue-300 mt-2 font-semibold"
						>
							Privacy Policy :
						</Link>
					</motion.div>
				))}
			</div>
		</>
	)
}

// Main component for the Privacy Policy page
const PrivacyPolicy = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<motion.div
			className="px-5 py-10 min-h-screen bg-[#020c1b]"
			initial={{opacity: 0, y: -50}}
			animate={{opacity: 1, y: 0}}
			transition={{duration: 0.8, ease: "easeOut"}}
		>
			<div className="max-w-7xl mx-auto">
				{/* Glowing heading */}
				<div className="relative mb-12 h-[20vh] flex items-center justify-center overflow-hidden rounded-xl">
					<div className="absolute top-10 inset-0 flex justify-center items-center pointer-events-none z-0">
						<div className="w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-gradient-to-br from-purple-500 to-fuchsia-600 blur-[100px] opacity-40 rounded-full"></div>
					</div>
					<motion.h1
						className="relative text-5xl font-extrabold text-white z-10"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{delay: 0.2}}
					>
						Privacy Policy
					</motion.h1>
				</div>

				{/* Product cards grid */}
				<div className="flex flex-wrap justify-left gap-6">
					<ProductCard />
				</div>
			</div>
		</motion.div>
	)
}

export default PrivacyPolicy
