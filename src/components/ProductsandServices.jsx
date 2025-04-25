import React from "react"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"

import Firewall from "../assets/appicon/firewall.svg"
import Photovault from "../assets/appicon/photovault.svg"
import Applock from "../assets/appicon/Applock.svg"
import Antitheft from "../assets/appicon/antitheft.svg"
import Vpn from "../assets/appicon/vpn.svg"
import PasswordManager from "../assets/appicon/passwordManager.svg"
import AppStore from "../assets/appicon/app-store.svg"
import GooglePlay from "../assets/appicon/Google_Play_Store_badge_EN.svg"

const products = [
	{
		name: "Xproguard Firewall",
		description:
			"Protect your device from threats with real-time monitoring, one-tap security, and suspicious connection blocking.",
		icon: Firewall,
		learnMoreLink: "/xproguard-firewall",
		appStoreLink: "#",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.firewall&hl=en",
		playStoreRender: true,
		appStoreRender: false,
	},
	{
		name: "Xproguard PhotoVault",
		description:
			"Lock and hide private photos/videos with military-grade encryption, secure access, and backup recovery.",
		icon: Photovault,
		learnMoreLink: "/xproguard-photovault",
		appStoreLink: "#",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.photovault&hl=en",
		playStoreRender: true,
		appStoreRender: true,
	},
	{
		name: "Xproguard AppLock",
		description:
			"Secure your data by locking apps with PIN, pattern, or fingerprint—plus stealth mode for extra privacy.",
		icon: Applock,
		learnMoreLink: "/xproguard-applock",
		appStoreLink: "#",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.applock&hl=en",
		playStoreRender: true,
		appStoreRender: false,
	},
	{
		name: "Xproguard AntiTheft",
		description:
			"Track, lock, and erase your lost device remotely with GPS tracking, alarms, and secure data wipe.",
		icon: Antitheft,
		learnMoreLink: "/xproguard-antitheft",
		appStoreLink: "#",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.antitheft&hl=en",
		playStoreRender: true,
		appStoreRender: false,
	},
	{
		name: "Xproguard VPN",
		description:
			"Browse securely and anonymously with our ultra-fast VPN—no logs, multi-location servers, and one-tap connection.",
		icon: Vpn,
		learnMoreLink: "/xproguard-vpn",
		appStoreLink: "#",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.vpn&hl=en",
		playStoreRender: true,
		appStoreRender: false,
	},
	{
		name: "Xproguard Password Manager",
		description:
			"Store, auto-fill, and sync passwords securely across devices.",
		icon: PasswordManager,
		learnMoreLink: "/xproguard-password-manager",
		appStoreLink:
			"https://apps.apple.com/in/app/xproguard-password-manager/id6504745518",
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.passwd&hl=en",
		playStoreRender: true,
		appStoreRender: true,
	},
]

const ProductCard = ({product}) => {
	return (
		<motion.div
			className="bg-[#06152B] p-6 rounded-3xl text-white shadow-lg border-2 border-[#52CDDD] w-full md:w-[95%] lg:w-full min-h-60 relative mx-2 md:mx-4 flex flex-col lg:gap-y-5"
			whileHover={{backgroundColor: "#102A50"}}
			initial={{opacity: 0, y: 20}}
			animate={{opacity: 1, y: 0}}
			transition={{duration: 0.6, ease: "easeOut"}}
		>
			<div className="flex items-center space-x-4">
				<img
					src={product.icon}
					alt="icon"
					className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full"
				/>
				<h2 className="font-bold text-lg sm:text-xl md:text-sm lg:text-3xl text-left font-roboto">
					{product.name}
				</h2>
			</div>
			<p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mt-2 text-left font-roboto">
				{product.description}
			</p>
			<div className="mt-2 text-left mb-2">
				<Link
					to={product.learnMoreLink}
					className="text-white text-xs sm:text-sm md:text-lg lg:text-xl font-bold"
				>
					Learn More &gt;
				</Link>
			</div>
			<div className="flex gap-3">
				{product.playStoreRender && (
					<a
						href={product.playStoreLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={GooglePlay}
							alt="Get it on Google Play"
							className="h-10"
						/>
					</a>
				)}
				{product.appStoreRender && (
					<a
						href={product.appStoreLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={AppStore}
							alt="Download on the App Store"
							className="h-10"
						/>
					</a>
				)}
			</div>
		</motion.div>
	)
}

const ProductsandServices = () => {
	return (
		<div className="px-5 py-10 text-center">
			<motion.h1
				initial={{opacity: 0, y: -30}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1.5, ease: "easeOut", delay: 0.5}}
				className="text-5xl md:text-5xl sm:text-3xl font-extrabold text-white mb-6 leading-tight font-roboto"
			>
				Seamless Security
			</motion.h1>
			<h2 className="text-xl sm:text-lg font-semibold text-gray-300 mb-8 leading-relaxed font-roboto">
				Activate Xproguard and safeguard your digital life effortlessly.
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
				{products.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</div>
		</div>
	)
}

export default ProductsandServices
