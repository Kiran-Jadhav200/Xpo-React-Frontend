import React from "react"
import {motion} from "framer-motion"
import {Link, useNavigate} from "react-router-dom"
import Firewall from "../../assets/appicon/firewall.svg"
import Photovault from "../../assets/appicon/photovault.svg"
import Applock from "../../assets/appicon/Applock.svg"
import Antitheft from "../../assets/appicon/antitheft.svg"
import Vpn from "../../assets/appicon/vpn.svg"
import PasswordManager from "../../assets/appicon/passwordManager.svg"
import AppStore from "../../assets/appicon/app-store.svg"
import GooglePlay from "../../assets/appicon/Google_Play_Store_badge_EN.svg"

const appData = [
	{
		id: "firewall",
		name: "Xproguard Firewall",
		description:
			"Protect your device from threats with real-time monitoring, one-tap security, and suspicious connection blocking.",
		icon: Firewall,
		appStoreLink: "#",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.firewall&hl=en",
		playStoreRender: true,
		appStoreRender: false,
	},
	{
		id: "photovault",
		name: "Xproguard PhotoVault",
		description:
			"Lock and hide private photos/videos with military-grade encryption, secure access, and backup recovery.",
		icon: Photovault,
		appStoreLink: "#",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.photovault&hl=en",
		playStoreRender: true,
		appStoreRender: true,
	},
	{
		id: "applock",
		name: "Xproguard AppLock",
		description:
			"Secure your data by locking apps with PIN, pattern, or fingerprint—plus stealth mode for extra privacy.",
		icon: Applock,
		appStoreLink: "#",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.applock&hl=en",
		playStoreRender: true,
		appStoreRender: false,
	},
	{
		id: "antitheft",
		name: "Xproguard AntiTheft",
		description:
			"Track, lock, and erase your lost device remotely with GPS tracking, alarms, and secure data wipe.",
		icon: Antitheft,
		appStoreLink: "#",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.antitheft&hl=en",
		playStoreRender: true,
		appStoreRender: false,
	},
	{
		id: "vpn",
		name: "Xproguard VPN",
		description:
			"Browse securely and anonymously with our ultra-fast VPN—no logs, multi-location servers, and one-tap connection.",
		icon: Vpn,
		appStoreLink: "#",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.vpn&hl=en",
		playStoreRender: true,
		appStoreRender: false,
	},
	{
		id: "password-manager",
		name: "Xproguard Password Manager",
		description:
			"Store, auto-fill, and sync passwords securely across devices.",
		icon: PasswordManager,
		appStoreLink:
			"https://apps.apple.com/in/app/xproguard-password-manager/id6504745518",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.passwd&hl=en",
		playStoreRender: true,
		appStoreRender: true,
	},
]

const ProductCard = ({product}) => {
	const navigate = useNavigate()

	const handleMoreInfo = () => {
		navigate(`/${product.id}`)
	}

	return (
		<motion.div
			className="bg-[#06152B] p-6 rounded-3xl text-white shadow-lg border-2 border-[#52CDDD] w-full relative"
			whileHover={{backgroundColor: "#102A50"}}
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{duration: 0.6, ease: "easeOut"}}
		>
			<div className="flex items-center space-x-4 mb-4">
				<img
					src={product.icon}
					alt={`${product.name} icon`}
					className="w-14 h-14 rounded-full"
				/>
				<h2 className="text-xl font-bold">{product.name}</h2>
			</div>
			<p className="text-sm text-gray-300 mb-4 text-left">
				{product.description}
			</p>

			<div className="mt-2 text-left mb-2">
				<button
					onClick={handleMoreInfo}
					className="text-white text-xs sm:text-sm md:text-lg lg:text-xl font-bold hover:underline transition-all duration-200 lg:px-0 lg:py-0 px-4 py-2 bg-blue-500 hover:bg-blue-600 lg:bg-transparent lg:hover:bg-transparent rounded-lg lg:rounded-none"
				>
					Learn More &gt;
				</button>
			</div>

			<div className="flex gap-3 mt-3">
				{product.playStoreRender && (
					<Link to={product.playStoreLink} rel="noopener noreferrer">
						<img
							src={GooglePlay}
							alt="Get it on Google Play"
							className="h-10"
						/>
					</Link>
				)}
				{product.appStoreRender && (
					<Link to={product.appStoreLink} rel="noopener noreferrer">
						<img
							src={AppStore}
							alt="Download on the App Store"
							className="h-10"
						/>
					</Link>
				)}
			</div>
		</motion.div>
	)
}

const OurProducts = () => {
	return (
		<div className="bg-[#020c1b] min-h-screen text-center px-6 py-10">
			<motion.h1
				initial={{opacity: 0, y: -30}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="text-4xl md:text-5xl font-extrabold text-white mb-4"
			>
				Our Products
			</motion.h1>
			<p className="text-lg text-gray-300 mb-10">
				Secure your digital world with Xproguard’s suite of protection tools.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
				{appData.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default OurProducts
