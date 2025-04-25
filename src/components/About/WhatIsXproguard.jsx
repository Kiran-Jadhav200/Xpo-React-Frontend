import {useEffect, useState} from "react"
import {FaShieldAlt} from "react-icons/fa" // Shield icon from react-icons
import "animate.css" // Import animate.css for animation

export default function WhatIsXproguard() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const videoSection = document.getElementById("video-section")
		const iframe = videoSection?.querySelector("iframe")

		const handleScroll = () => {
			const videoTop = videoSection?.getBoundingClientRect().top
			const videoBottom = videoSection?.getBoundingClientRect().bottom

			// Check if the video section is in the viewport
			if (videoTop && videoBottom) {
				// Play video when the section enters the viewport
				if (videoTop <= window.innerHeight && videoBottom >= 0) {
					if (iframe && !iframe.src.includes("autoplay=1")) {
						iframe.src += "&autoplay=1" // Start video
					}
				} else {
					// Pause video when the section leaves the viewport
					if (iframe && iframe.src.includes("autoplay=1")) {
						iframe.src = iframe.src.replace("&autoplay=1", "") // Stop video
					}
				}
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	// Simulating loading
	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 1500) // Delay to simulate loading
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className="relative flex flex-col items-center justify-center w-full font-roboto">
			{/* Full Height Video */}
			<div
				id="video-section"
				className="w-full h-screen relative overflow-hidden rounded-lg shadow-xl mb-8"
			>
				<iframe
					className="w-full h-full object-cover"
					src="https://www.youtube-nocookie.com/embed/KcCbz91lRN4?controls=0&modestbranding=1&rel=0"
					title="Xproguard Introduction"
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
				></iframe>
			</div>

			{/* Loading Spinner */}
			{isLoading && (
				<div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-500"></div>
				</div>
			)}

			{/* Description Section with Darker Background */}
			<div
				className={`relative w-full py-16 px-8 md:px-16 text-white z-10 ${
					isLoading
						? "opacity-0"
						: "opacity-100 animate__animated animate__fadeIn animate__delay-1s"
				}`}
			>
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text mb-8">
						What is Xproguard?
					</h2>

					<p className="text-2xl md:text-3xl font-medium mb-6">
						<span className="font-bold">Xproguard</span> offers a comprehensive
						solution for users looking to secure their devices and data in the
						most efficient way possible. It’s designed to be user-friendly while
						offering robust protection.
					</p>

					<p className="text-xl md:text-2xl mb-6 leading-relaxed">
						We prioritize your security by providing innovative solutions that
						safeguard personal and corporate data against cyber threats, data
						breaches, and attacks.
					</p>

					<p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
						With Xproguard, users gain peace of mind knowing their devices are
						secure, whether they&apos;re at home or on the go. Our advanced
						technology continuously adapts to new threats, keeping you one step
						ahead of potential cyber risks.
					</p>

					{/* Shield Icon */}
					<div className="flex justify-center mt-8">
						<FaShieldAlt
							size={50}
							className="text-blue-500 hover:text-cyan-500 cursor-pointer transition-transform transform hover:scale-110"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
