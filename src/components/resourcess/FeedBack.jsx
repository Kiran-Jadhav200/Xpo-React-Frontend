import React from "react"

const Feedback = () => {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="max-w-5xl w-full p-8 sm:p-10 rounded-lg shadow-lg">
				{/* Heading */}
				<h1
					className="text-center mb-6 text-white text-4xl sm:text-5xl font-bold"
					style={{fontFamily: '"Nohemi Vf", Sans-serif'}}
				>
					We are always open <span className="text-blue-500">24/7</span> for
					you.
				</h1>

				<p className="text-lg text-center mb-8 text-gray-300 sm:px-10">
					Reach out to us using the contact information below or fill out the
					contact form, and we will get back to you as soon as possible.
				</p>

				{/* Contact Info Section */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 text-center">
					{/* Address Section */}
					<div className="flex flex-col items-center p-4">
						<div className="filter hue-rotate-180 mb-4">
							<img
								src="https://cdn.prod.website-files.com/66de97f960472d67e55ab299/66e2848a71e1a2cd8900b5b1_location.svg"
								alt="Location Logo"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="text-xl font-semibold text-white">Address</h2>
						<p className="text-gray-400 text-center max-w-[250px] lg:text-nowrap">
							We look forward to welcoming you.
						</p>
						<button
							className="text-blue-400 hover:underline"
							onClick={() =>
								window.open(
									"https://maps.app.goo.gl/DyCo8QVa2rGsjVoo7",
									"_blank"
								)
							}
						>
							View in map
						</button>
					</div>

					{/* Contact Number Section */}
					<div className="flex flex-col items-center p-4">
						<div className="filter hue-rotate-30 mb-4">
							<img
								src="https://cdn.prod.website-files.com/66de97f960472d67e55ab299/66e2848add292f4642ccd31e_call.svg"
								alt="Call Logo"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="text-xl font-semibold text-white">Contact Number</h2>
						<p className="text-gray-400 text-center max-w-[250px]">
							Need assistance? Call us.
						</p>
						<a
							href="tel:+15551234567"
							className="text-blue-400 hover:underline"
						>
							+1 (555) 123-4567
						</a>
					</div>

					{/* Email Section */}
					<div className="flex flex-col items-center p-4">
						<div className="filter hue-rotate-180 mb-4">
							<img
								src="https://cdn.prod.website-files.com/66de97f960472d67e55ab299/66e2848bf0f3ea3c0aa4c9cc_mail.svg"
								alt="Email Logo"
								width={50}
								height={50}
							/>
						</div>
						<h2 className="text-xl font-semibold text-white">Email Us</h2>
						<p className="text-gray-400 text-center max-w-[250px]">
							We’re here to help.
						</p>
						<a
							href="mailto:hello@example.com"
							className="text-blue-400 hover:underline"
						>
							hello@example.com
						</a>
					</div>
				</div>

				{/* Form Section */}
				<div className="flex flex-col lg:flex-row items-center gap-8">
					{/* Image */}
					<div className="lg:w-1/2 flex justify-center">
						<div className="filter hue-rotate-30 brightness-125">
							<img
								src="https://cdn.prod.website-files.com/66de97f960472d67e55ab299/66dffdc084965733f5154742_about-image-01.svg"
								alt="About Us Image"
								width={400}
								height={400}
								className="w-full max-w-[350px] sm:max-w-[400px]"
							/>
						</div>
					</div>

					{/* Form */}
					<div className="lg:w-1/2 w-full">
						<form className="space-y-4">
							<div>
								<input
									type="text"
									placeholder="Name"
									className="w-full p-3 border border-gray-600 rounded-2xl bg-transparent placeholder-opacity-100 placeholder-white text-white"
								/>
							</div>
							<div className="flex flex-col sm:flex-row gap-4">
								<div className="flex-1">
									<input
										type="email"
										placeholder="Email"
										className="w-full p-3 border border-gray-600 rounded-2xl bg-transparent placeholder-opacity-100 placeholder-white text-white"
									/>
								</div>
								<div className="flex-1">
									<input
										type="tel"
										placeholder="Phone Number"
										className="w-full p-3 border border-gray-600 rounded-2xl bg-transparent placeholder-opacity-100 placeholder-white text-white"
									/>
								</div>
							</div>
							<div>
								<textarea
									placeholder="Message"
									className="w-full p-3 border border-gray-600 rounded-2xl h-32 bg-transparent placeholder-opacity-100 placeholder-white text-white"
								></textarea>
							</div>
							<div>
								<button
									type="submit"
									className="py-2 px-6 w-fit rounded-full border border-gray-600 text-white hover:bg-blue-500 transition text-sm"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Feedback
