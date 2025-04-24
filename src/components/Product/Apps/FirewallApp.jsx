import React from "react"
import {useParams} from "react-router-dom"
import {motion} from "framer-motion"
import firewall1 from "../../../assets/images/Firewall_1.png"
import firewall2 from "../../../assets/images/Firewall_2.png"
import applock1 from "../../../assets/images/Applock.png"
import onboard from "../../../assets/images/onboard.png"
import phone from "../../../assets/images/Phone.png"
import encrypted from "../../../assets/images/encrypted.png"

const appData = [
	{
		id: "firewall",
		name: "Xproguard Firewall",
		shortDescription:
			"Xproguard Firewall is an internet security app that restricts apps' access to the internet.",
		detailedDescription:
			"Xproguard Firewall lets you control app access to the internet with whitelist and blacklist options. It blocks hackers, prevents unauthorized access, and safeguards your device from online threats.",
		title2: "Explore the Essential Features of Xproguard Firewall",
		icon: firewall1,
		icon2: firewall2,
		features: [
			{
				title: "Complete Internet Control",
				description:
					"Manage app access to the internet with whitelist and blacklist options.",
			},
			{
				title: "Strong Security & Privacy",
				description:
					"Blocks hackers and safeguards your device from online threats.",
			},
			{
				title: "No-Root Firewall Solution",
				description:
					"Works without root using VPN interface to filter traffic locally.",
			},
			{
				title: "User-Friendly & Ad-Free",
				description:
					"Clean interface, dark mode support, and no ads for smooth experience.",
			},
		],
		stats: {
			downloads: "1000+",
			playstoreRating: "4.4",
		},
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.firewall&hl=en",
		appStoreLink: "#",
	},
	{
		id: "photovault",
		name: "Xproguard PhotoVault",
		shortDescription:
			"Lock and hide private photos/videos with military-grade encryption, secure access, and backup recovery.",
		detailedDescription:
			"Xproguard PhotoVault is a secure app that encrypts and hides your photos and videos, ensuring only you can access them with a PIN or fingerprint. With no storage limits and no cloud risks, it keeps your media completely private and protected.",
		icon: applock1,
		features: [
			{
				title: "Secure & Private",
				description:
					"Encrypt sensitive photos/videos with PIN or fingerprint access.",
			},
			{
				title: "Unlimited Local Storage",
				description:
					"Store unlimited media securely on your device with no cloud risks.",
			},
			{
				title: "Advanced Security",
				description:
					"Enjoy encrypted backups, screenshot blocking, and data restoration.",
			},
			{
				title: "Ad-Free & Easy to Use",
				description:
					"No ads, clean UI, smooth performance, and instant access.",
			},
		],
		stats: {
			downloads: "1000+",
			playstoreRating: "4.4",
		},
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.photovault&hl=en",
		appStoreLink: "#",
	},
	{
		id: "applock",
		name: "Xproguard AppLock",
		shortDescription: "Protect your apps and data with secure app locking.",
		detailedDescription:
			"Xproguard AppLock allows you to lock apps using PIN, pattern, or fingerprint. Protect your privacy by securing sensitive apps from unauthorized access.",
		icon: "appLockSvg",
		features: [
			{
				title: "App Locking",
				description:
					"Lock any app with fingerprint, PIN, or pattern for complete privacy.",
			},
			{
				title: "Intruder Selfie",
				description:
					"Capture photo of intruder trying to break into locked apps.",
			},
			{
				title: "Custom Lock Themes",
				description: "Personalize lock screens with themes and wallpapers.",
			},
			{
				title: "Fast & Lightweight",
				description: "Runs smoothly without draining your phone's battery.",
			},
		],
		stats: {
			downloads: "10,000+",
			playstoreRating: "4.6",
		},
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.applock&hl=en",
		appStoreLink: "#",
	},
	{
		id: "antitheft",
		name: "Xproguard AntiTheft",
		shortDescription: "Protect your device from theft and unauthorized access.",
		detailedDescription:
			"Xproguard AntiTheft alerts you if someone tries to remove, unlock, or move your phone. Anti-theft features ensure your device stays in your hands.",
		icon: "antitheftSvg",
		features: [
			{
				title: "Motion Detection",
				description: "Trigger alarm if the phone is moved without permission.",
			},
			{
				title: "Charger Removal Alert",
				description:
					"Alarm sounds when charger is removed from a locked device.",
			},
			{
				title: "Pocket Theft Alarm",
				description:
					"Be alerted if someone tries to pull phone from your pocket.",
			},
			{
				title: "Loud Siren Mode",
				description: "Powerful alarm deters thieves in public or silent areas.",
			},
		],
		stats: {
			downloads: "5,000+",
			playstoreRating: "4.3",
		},
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.antitheft&hl=en",
		appStoreLink: "#",
	},
	{
		id: "vpn",
		name: "Xproguard VPN",
		shortDescription:
			"Private and secure VPN access with fast servers worldwide.",
		detailedDescription:
			"Xproguard VPN offers fast and secure connections across the globe. Protect your identity, bypass geo-restrictions, and browse anonymously.",
		icon: "vpnSvg",
		features: [
			{
				title: "Global Server Access",
				description: "Connect to fast servers in multiple countries.",
			},
			{
				title: "No Logs Policy",
				description: "Your browsing activity is never tracked or stored.",
			},
			{
				title: "One-Tap Connection",
				description: "Easily connect to VPN with a single tap.",
			},
			{
				title: "Unlimited Usage",
				description: "No data limits — browse and stream without restrictions.",
			},
		],
		stats: {
			downloads: "50,000+",
			playstoreRating: "4.7",
		},
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.vpn&hl=en",
		appStoreLink: "#",
	},
	{
		id: "password-manager",
		name: "Xproguard Password Manager",
		shortDescription:
			"Securely manage and store all your passwords in one place.",
		detailedDescription:
			"Xproguard Password Manager encrypts your passwords and keeps them safe. Easily autofill, organize, and manage your credentials across devices.",
		icon: "passwordManagerSvg",
		features: [
			{
				title: "AES-256 Encryption",
				description: "Top-grade security to protect stored passwords.",
			},
			{
				title: "Cross-Platform Sync",
				description: "Access your vault on any device with secure sync.",
			},
			{
				title: "Auto-Fill Integration",
				description: "Quickly fill in login forms with one tap.",
			},
			{
				title: "Password Generator",
				description: "Create strong passwords for better account security.",
			},
		],
		stats: {
			downloads: "10,000+",
			playstoreRating: "4.8",
		},
		playStoreLink:
			"https://play.google.com/store/apps/details?id=com.xproguard.passwd&hl=en",
		appStoreLink:
			"https://apps.apple.com/in/app/xproguard-password-manager/id6504745518",
	},
]

interface Feature {
	title: string;
	description: string;
	image?: string | {src: string};
}

interface FeatureCardProps {
	feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({feature}) => {
	return (
		<div className="w-full max-w-xs bg-transparent p-4">
			<div className="flex flex-col items-start gap-y-4">
				{encrypted && (
					<img
						src={typeof encrypted === "string" ? encrypted : encrypted.src}
						alt="Feature"
						className="w-8 h-8 object-contain"
					/>
				)}
				<h1 className="text-xl font-bold text-white break-words">
					{feature.title}
				</h1>
				<p className="text-sm text-gray-400">{feature.description}</p>
			</div>
		</div>
	)
}

function ProductDetail() {
	const {appId} = useParams()
	const product = appData.find((app) => app.id === appId)

	if (!product) {
		return (
			<div className="text-center text-white p-10">
				<h1 className="text-3xl font-bold mb-4">Product not found</h1>
				<p>We couldn’t find the product you’re looking for.</p>
			</div>
		)
	}

	const features = product.features

	return (
		<div className="min-h-screen w-full bg-[#020c1b] text-white flex flex-col items-center px-6 py-20">
			<motion.div
				className="hidden lg:block bg-[#06152B] p-10 h-full w-full"
				initial={{opacity: 0, y: 40}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 0.6}}
			>
				{/* Header */}
				<div className="text-center mb-8 flex flex-col items-center justify-center gap-y-20">
					<div>
						<h1 className="text-6xl font-extrabold text-white">
							{product.name}
						</h1>
						<p className="text-sm w-[40vw] text-gray-300 mt-2">
							{product.detailedDescription ||
								product.shortDescription ||
								"No description available."}
						</p>
					</div>

					<div className="relative w-[60vw] h-auto flex justify-center items-center mb-4">
						{/* Faint Glowing Background */}
						<div className="absolute top--0 left-0  z-0">
							<div className="rounded-full bg-[#43B5D3] opacity-10 w-[100vw] h-full blur-3xl">
								<img
									src={typeof onboard === "string" ? onboard : onboard.src}
									alt={`${product.name} Background`}
									className="absolute bottom-0 object-contain opacity-70"
								/>
							</div>
							<div className="relative w-[60vw] h-auto flex justify-center items-center mb-4">
								{/* Foreground Product Icon */}
								<img
									src={
										typeof product.icon === "string"
											? product.icon
											: product.icon.src
									}
									alt={product.name}
									className="relative z-10 w-[20vw] h-auto object-contain rounded-[50px] border-2 border-black/90"
								/>
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
									<div className="rounded-full bg-[#43B5D3] opacity-10 w-[50vw] h-[50vw] blur-3xl"></div>
									<img
										src={typeof onboard === "string" ? onboard : onboard.src}
										alt={`${product.name} Background`}
										className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain opacity-70 w-[20vw]"
									/>
								</div>
							</div>
						</div>

						{/* Foreground Product Icon */}
						<img
							src={
								typeof product.icon === "string"
									? product.icon
									: product.icon.src
							}
							alt={product.name}
							className="relative z-10 w-[20vw] h-auto object-contain rounded-[50px] border-2 border-black/90"
						/>
					</div>
				</div>

				{/* Stats */}
				{(product.stats?.downloads || product.stats?.playstoreRating) && (
					<motion.div
						className="flex justify-center gap-8 text-gray-300 text-sm mb-6"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{delay: 0.4}}
					>
						{product.stats.downloads && (
							<div>
								<p className="font-semibold text-white">Downloads</p>
								<p>{product.stats.downloads}</p>
							</div>
						)}
						{product.stats.playstoreRating && (
							<div>
								<p className="font-semibold text-white">Rating</p>
								<p>⭐ {product.stats.playstoreRating}</p>
							</div>
						)}
					</motion.div>
				)}

				{/* Spacer */}
				<div className="h-[10vh]"></div>

				{/* Features */}
				<div className="flex flex-col items-center justify-evenly gap-y-10">
					<h1 className="text-5xl text-white font-bold w-[50vw] text-center">
						{product.title2}
					</h1>
					<p className="w-[40vw] h-[10vh] text-sm text-gray-600">
						{product.detailedDescription}
					</p>
				</div>
				<div className="grid grid-cols-3 gap-10 w-full mt-10">
					{/* Left Side - Features 1 & 2 stacked */}
					<div className="flex flex-col items-end gap-6">
						<FeatureCard feature={features[0]} />
						<FeatureCard feature={features[1]} />
					</div>

					{/* Center - Product Image */}
					<div className="flex justify-center items-center">
						<img
							src={typeof firewall2 === "string" ? firewall2 : firewall2.src}
							alt={product.name}
							className="relative z-10 w-[10vw] h-auto object-contain rounded-[50px] border-2 border-black/90"
						/>
					</div>

					{/* Right Side - Features 3 & 4 stacked */}
					<div className="flex flex-col items-start gap-6">
						<FeatureCard feature={features[2]} />
						<FeatureCard feature={features[3]} />
					</div>
				</div>

				{/* Store Buttons */}
				<motion.div
					className="flex justify-center gap-4 mt-10"
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{delay: 0.6}}
				>
					{product.playStoreLink && (
						<a
							href={product.playStoreLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
								alt="Google Play"
								className="h-10"
							/>
						</a>
					)}
					{product.appStoreLink && (
						<a
							href={product.appStoreLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
								alt="App Store"
								className="h-10"
							/>
						</a>
					)}
				</motion.div>
			</motion.div>
			{/* Mobile View */}
			<div className="block lg:hidden px-4 py-10">
				<h1 className="text-3xl font-bold text-white text-center mb-4">
					{product.name}
				</h1>
				<p className="text-sm text-gray-300 text-center mb-6">
					{product.shortDescription}
				</p>

				{/* Product Image */}
				<div className="w-full flex justify-center mb-6">
					<img
						src={
							typeof product.icon === "string" ? product.icon : product.icon.src
						}
						alt={product.name}
						className="w-[60%] h-auto object-contain rounded-3xl border border-black/80"
					/>
				</div>

				{/* Stats */}
				{(product.stats?.downloads || product.stats?.playstoreRating) && (
					<div className="flex justify-around text-gray-300 text-sm mb-8">
						{product.stats.downloads && (
							<div className="text-center">
								<p className="font-semibold text-white">Downloads</p>
								<p>{product.stats.downloads}</p>
							</div>
						)}
						{product.stats.playstoreRating && (
							<div className="text-center">
								<p className="font-semibold text-white">Rating</p>
								<p>⭐ {product.stats.playstoreRating}</p>
							</div>
						)}
					</div>
				)}

				{/* Features */}
				<div className="flex flex-col items-center gap-6">
					{product.features.map((feature, index) => (
						<FeatureCard key={index} feature={feature} />
					))}
				</div>

				{/* Store Buttons */}
				<div className="flex justify-center gap-4 mt-8">
					{product.playStoreLink && (
						<a
							href={product.playStoreLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
								alt="Google Play"
								className="h-10"
							/>
						</a>
					)}
					{product.appStoreLink && (
						<a
							href={product.appStoreLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
								alt="App Store"
								className="h-10"
							/>
						</a>
					)}
				</div>
			</div>
		</div>
	)
}
export default ProductDetail
