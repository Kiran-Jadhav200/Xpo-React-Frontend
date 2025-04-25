/*************  ✨ Windsurf Command ⭐  *************/
import React from "react"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import Antitheft from "../../assets/appicon/antitheft.svg"
import AppStore from "../../assets/appicon/app-store.svg"
import GooglePlay from "../../assets/appicon/Google_Play_Store_badge_EN.svg"

const AntiTheftApp = () => {
	return (
		<motion.div
			initial={{opacity: 0}}
			whileInView={{opacity: 1}}
			transition={{duration: 1}}
		>
			<Link to="/xproguard-antitheft">
				<div className="flex flex-col items-center justify-center p-4">
					<img
						src={Antitheft}
						alt="Xproguard AntiTheft"
						className="w-12 h-12 mb-4"
					/>
					<h4 className="text-lg font-bold mb-2">Xproguard AntiTheft</h4>
					<p className="text-center text-sm">
						Track, lock, and erase your lost device remotely with GPS tracking,
						alarms, and secure data wipe.
					</p>
				</div>
			</Link>
			<div className="flex flex-row justify-center mb-4">
				<a
					href="https://play.google.com/store/apps/details?id=com.xproguard.antitheft&hl=en"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={GooglePlay}
						alt="Get it on Google Play"
						className="w-40 h-12"
					/>
				</a>
				<a
					href="https://apps.apple.com/in/app/xproguard-antitheft/id6444444444"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={AppStore}
						alt="Download on the App Store"
						className="w-40 h-12 ml-4"
					/>
				</a>
			</div>
		</motion.div>
	)
}

export default AntiTheftApp
/*******  50dcb794-5cb9-4191-9184-628eba73e708  *******/
