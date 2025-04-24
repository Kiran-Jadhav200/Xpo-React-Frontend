import React from "react"
import {motion} from "framer-motion"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/700.css"
import Raj from "../assets/customer/raj.png"
import Neha from "../assets/customer/neha.png"
import Amar from "../assets/customer/amar.png"

export default function CustomerTestimonials() {
	return (
		<div className="w-full text-white py-20 font-roboto">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl sm:text-3xl font-bold">
						Customer Testimonials
					</h2>
					<p className="text-xl md:text-2xl text-gray-400 mt-4">
						Xproguard has transformed my mobile security experience!
					</p>
				</div>
				<div className="flex justify-start gap-14 flex-wrap lg:flex-nowrap">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="border border-[#45acf1] rounded-2xl p-8 bg-[#0d1a2b] hover:bg-[#112240] transition-colors duration-300 shadow-lg hover:shadow-xl w-full lg:w-[65%] xl:w-[58%] 2xl:w-[45%] min-h-[250px]"
						>
							<div className="flex items-center mb-4">
								{[...Array(5)].map((_, starIndex) => (
									<svg
										key={starIndex}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill={
											starIndex < testimonial.rating ? "#1fb6ff" : "#374151"
										}
										className="w-6 h-6"
									>
										<path d="M12 2.25l3.09 6.26 6.91 1-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.38 2 9.5l6.91-1L12 2.25z" />
									</svg>
								))}
							</div>
							<p className="text-gray-300 mb-6">{testimonial.message}</p>
							<div className="flex items-center">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-[#45acf1]"
								/>
								<div>
									<p className="font-semibold">{testimonial.name}</p>
									<p className="text-gray-400 text-sm">
										{testimonial.position}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

const testimonials = [
	{
		rating: 4,
		message:
			"It is a very good password manager with a pleasant design; congratulations to the developer for their work, and especially for making it free during certain periods. Ultimately, I would suggest adding user-selected cloud backup options, such as Google Drive, Dropbox, etc., and to warn users that if they do not save a backup elsewhere, they will lose all their accounts. Additionally, the addition of secure notes and even an encrypted synchronization method with Google Drive would be great!",
		image: Raj,
		name: "Raj",
		position: "Security Analyst, TechCorp",
	},
	{
		rating: 5,
		message:
			"It is a nice password saver and backupper also it gives a lot of features and anyone can access to passwords easily and it has privacy too. You can create passwords and also lock the app. And what not !",
		image: Neha,
		name: "Neha Sharma",
		position: "IT Director, SecureTech",
	},
	{
		rating: 5,
		message:
			"Thanks for the other programs you gave away at Christmas time, your company makes excellent products so I bought your vpn. Most of the time it works fine but occasionally it seems to block the wifi for some reason so I restart it and it works again Excellent price.",
		image: Amar,
		name: "David Johnson",
		position: "CTO, SecureTech",
	},
]
