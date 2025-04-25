import {motion} from "framer-motion"
import {Link} from "react-router"
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
	},
]

const AppList = () => {
	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-6">
				{apps.map(
					(
						{
							icon,
							title,
							description,
							learnMore,
							playStore,
							appStore,
							playStoreRender,
							appStoreRender,
						},
						index
					) => (
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

							<h3 className="text-sm text-blue-300 mt-2 font-semibold">
								FAQs on :
							</h3>

							<div className="flex gap-3 mt-3">
								{playStoreRender && (
									<Link to={playStore} rel="noopener noreferrer">
										<img
											src={GooglePlay}
											alt="Get it on Google Play"
											className="h-10"
										/>
									</Link>
								)}
								{appStoreRender && (
									<Link to={appStore} rel="noopener noreferrer">
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
				)}
			</div>
		</>
	)
}

export default AppList
