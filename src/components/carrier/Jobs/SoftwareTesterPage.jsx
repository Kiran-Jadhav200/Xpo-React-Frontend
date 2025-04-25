import React, {useState} from "react"
import ContinuousScroll from "../../ContinousScroll"

const SoftwareTesterPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		resume: null,
	})
	const [statusMessage, setStatusMessage] = useState("")

	const handleChange = (e) => {
		const {name, value, files} = e.target
		if (name === "resume") {
			setFormData((prev) => ({...prev, resume: files[0]}))
		} else {
			setFormData((prev) => ({...prev, [name]: value}))
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const formPayload = new FormData()
			formPayload.append("name", formData.name)
			formPayload.append("email", formData.email)
			formPayload.append("phone", formData.phone)
			if (formData.resume) formPayload.append("resume", formData.resume)

			await fetch("/api/apply", {
				method: "POST",
				body: formPayload,
			})
			setStatusMessage("Thank you! Your message has been received.")
		} catch {
			setStatusMessage("Oops! Something went wrong while submitting the form.")
		}
	}

	return (
		<div className="bg-[#000A1B] text-white min-h-screen">
			{/* Hero Section */}
			<section className="text-center py-12 px-6">
				<h1 className="text-4xl font-bold mb-4">Software Developer</h1>
				<p className="max-w-3xl mx-auto">
					The Smart Sales Assistant can also provide insights into customer
					behavior and preferences, allowing you to optimize your marketing and
					sales strategies.
				</p>
			</section>

			<ContinuousScroll />

			{/* Job and Form Section Side by Side */}
			<section className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
				{/* Job Details */}
				<div>
					<h2 className="text-2xl font-semibold mb-4">Job description</h2>
					<p className="mb-6">
						As a SaaS Specialist at Intelligent Analytics Suite, you will play a
						crucial role in delivering exceptional SaaS solutions to our
						clients...
					</p>

					<h3 className="text-xl font-semibold mb-2">Job responsibilities</h3>
					<ul className="list-disc list-inside mb-6 space-y-1">
						<li>
							Implementation and Configuration: Collaborate with clients …
						</li>
						<li>Technical Support: Provide technical support to clients …</li>
						<li>
							System Maintenance and Upgrades: Perform regular maintenance …
						</li>
						<li>
							Training and Documentation: Conduct sessions and create docs …
						</li>
						<li>
							Continuous Improvement: Stay up-to-date with industry trends …
						</li>
						<li>
							Collaboration and Communication: Work closely with
							cross-functional teams …
						</li>
					</ul>

					<h3 className="text-xl font-semibold mb-2">Qualifications</h3>
					<ul className="list-disc list-inside mb-6 space-y-1">
						<li>Bachelor's degree in CS, IT, or related field.</li>
						<li>Proven SaaS implementation/support experience.</li>
						<li>
							Strong cloud computing, API, and data integration knowledge.
						</li>
						<li>Proficiency in Python, Java, or Ruby preferred.</li>
						<li>Excellent problem-solving and analytical skills.</li>
						<li>Exceptional communication and interpersonal abilities.</li>
						<li>Ability to manage multiple projects simultaneously.</li>
					</ul>

					<h3 className="text-xl font-semibold mb-2">Other benefits</h3>
					<ul className="list-disc list-inside mb-6 space-y-1">
						<li>Health, dental, and vision plans; tuition assistance; PTO.</li>
						<li>
							2:1 retirement plan contributions; child care; housing subsidy.
						</li>
						<li>ICF and CEAP certifications (desired).</li>
					</ul>

					<p>
						Join our team and be part of a dynamic organization revolutionizing
						data analytics through SaaS. Submit your resume and cover letter to
						apply.
					</p>
				</div>

				{/* Application Form */}
				<div className="bg-black p-8 rounded-xl shadow-2xl border border-purple-500/30">
					<div className="flex justify-between items-center mb-6">
						<div className="text-white text-sm flex items-center gap-2">
							<span>🗓 Full Time</span>
						</div>
						<div className="text-white text-sm flex items-center gap-2">
							<span>🕘 9:00 - 18:00</span>
						</div>
						<div className="text-white text-sm flex items-center gap-2">
							<span>📍 India</span>
						</div>
					</div>
					{/*  */}
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-2 gap-4">
							<input
								type="text"
								name="firstName"
								placeholder="First name"
								onChange={handleChange}
								className="bg-black border border-purple-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
								required
							/>
							<input
								type="text"
								name="lastName"
								placeholder="Last name"
								onChange={handleChange}
								className="bg-black border border-purple-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
								required
							/>
						</div>

						<input
							type="email"
							name="email"
							placeholder="Your email"
							onChange={handleChange}
							className="w-full bg-black border border-purple-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
							required
						/>

						<input
							type="tel"
							name="phone"
							placeholder="(555) 555-5555"
							onChange={handleChange}
							className="w-full bg-black border border-purple-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
							required
						/>

						<button
							type="submit"
							className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 uppercase tracking-wider shadow-lg"
						>
							Apply Now
						</button>

						{statusMessage && (
							<p className="text-center mt-4 text-green-400 font-medium">
								{statusMessage}
							</p>
						)}
					</form>
				</div>
			</section>

			{/* Details Icons */}
		</div>
	)
}

export default SoftwareTesterPage
