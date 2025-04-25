import React from "react"
import {motion} from "framer-motion"
import antitheft1 from "../../../assets/images/anti-theft.png"
import firewall2 from "../../../assets/images/Firewall_2.png"
import encrypted from "../../../assets/images/encrypted.png"
import onboard from "../../../assets/images/onboard.png"

// Product data
const productData = {
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
}

const FeatureCard = ({feature}) => (
	<div className="w-full max-w-xs bg-transparent p-4">
		<div className="flex flex-col items-start gap-y-4">
			<img src={encrypted} alt="Feature" className="w-8 h-8 object-contain" />
			<h1 className="text-xl font-bold text-white break-words">
				{feature.title}
			</h1>
			<p className="text-sm text-gray-400">{feature.description}</p>
		</div>
	</div>
)

function VPNApp() {
	const product = productData

	return (
		<div className="min-h-screen w-full bg-[#020c1b] text-white flex flex-col items-center px-6 py-20">
			{/* Desktop View */}
			<motion.div
				className="hidden lg:block bg-[#06152B] p-10 w-full"
				initial={{opacity: 0, y: 40}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 0.6}}
			>
				<div className="text-center mb-8 flex flex-col items-center justify-center gap-y-20">
					<div>
						<h1 className="text-6xl font-extrabold">{product.name}</h1>
						<p className="text-sm w-[40vw] text-gray-300 mt-2">
							{product.detailedDescription || product.shortDescription}
						</p>
					</div>

					{/* Product Showcase with glow effect */}
					<div className="relative w-[60vw] h-auto flex justify-center items-center mb-4">
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
							<div className="rounded-full bg-[#43B5D3] opacity-10 w-[50vw] h-[50vw] blur-3xl"></div>
							<img
								src={onboard}
								alt="Background"
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain opacity-70 w-[20vw]"
							/>
						</div>
						<img
							src={product.icon}
							alt={product.name}
							className="relative z-10 w-full h-auto object-contain rounded-[50px] "
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

				{/* Features Section */}
				<div className="text-center mt-16">
					<h1 className="text-5xl font-bold mb-4">{product.title2}</h1>
					<p className="text-sm text-gray-400 max-w-2xl mx-auto">
						{product.detailedDescription}
					</p>
				</div>

				<div className="grid grid-cols-3 gap-10 mt-10">
					<div className="flex flex-col items-end gap-6">
						<FeatureCard feature={product.features[0]} />
						<FeatureCard feature={product.features[1]} />
					</div>

					<div className="flex justify-center items-center">
						<img
							src={product.icon2}
							alt={product.name}
							className="w-full h-full object-contain rounded-[50px]"
						/>
					</div>

					<div className="flex flex-col items-start gap-6">
						<FeatureCard feature={product.features[2]} />
						<FeatureCard feature={product.features[3]} />
					</div>
				</div>

				{/* Store Buttons */}
				<div className="flex justify-center gap-4 mt-10">
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
			</motion.div>

			{/* Mobile View */}
			<div className="block lg:hidden px-4 py-10">
				<h1 className="text-3xl font-bold text-center mb-4">{product.name}</h1>
				<p className="text-sm text-gray-300 text-center mb-6">
					{product.shortDescription}
				</p>
				<div className="w-full flex justify-center mb-6">
					<img
						src={product.icon}
						alt={product.name}
						className="w-[60%] h-auto object-contain rounded-3xl border border-black/80"
					/>
				</div>

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

				<div className="flex flex-col items-center gap-6">
					{product.features.map((feature, idx) => (
						<FeatureCard key={idx} feature={feature} />
					))}
				</div>

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

export default VPNApp
