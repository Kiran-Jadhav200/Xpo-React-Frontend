import React, {useEffect} from "react"

export default function PrivacyPolicyAntiTheft() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="bg-[#0d0b1f] text-white min-h-screen px-6 py-10 overflow-hidden">
			<div className="max-w-4xl mx-auto">
				{/* Heading Section */}
				<div className="relative mb-12 h-[20vh] flex items-center justify-center overflow-hidden rounded-xl">
					{/* Glowing Background */}
					<div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
						<div className="w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-gradient-to-br from-purple-500 to-fuchsia-600 blur-[100px] opacity-40 rounded-full"></div>
					</div>

					{/* Heading Text */}
					<h1 className="relative text-5xl font-bold z-10 text-center">
						Xproguard Anti-Theft PRIVACY POLICY
					</h1>
				</div>

				{/* Privacy Policy Content */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">A] PERMISSIONS</h2>
					<p className="text-neutral-300 mb-4">
						For Xproguard Anti-Theft to function, it requires access to certain
						permissions on your phone. Here is an explanation of how we use
						each:
					</p>
					<ul className="list-disc pl-5 space-y-2 text-neutral-300">
						<li>
							Device Administrator (needed): Required to work the Intruder
							Selfie and Wrong Pin Alert features properly.
						</li>
						<li>
							Camera (needed): To take pictures when the wrong password, pin
							code, or lock pattern has been entered the number of times that
							the user has specified in the app.
						</li>
					</ul>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">
						B] PERSONAL INFORMATION
					</h2>
					<p className="text-neutral-300">
						We made the Xproguard Anti-Theft App with your privacy in mind, so
						we are not collecting any personal information from users.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">
						C] CHILDREN ONLINE PRIVACY PROTECTION ACT COMPLIANCE
					</h2>
					<p className="text-neutral-300">
						We are in compliance with the requirements of COPPA (Children's
						Online Privacy Protection Act), and we do not collect any
						information from anyone under 13 years of age. Our website,
						products, and services are all directed to people who are at least
						13 years old or older.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">D] COOKIES</h2>
					<p className="text-neutral-300">We do not use cookies.</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">E] ADVERTISING</h2>
					<p className="text-neutral-300">
						The app does not use any advertising services that may collect
						information used to identify you.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">
						F] THIRD PARTY SERVICES
					</h2>
					<p className="text-neutral-300">
						The app does not use any third-party services that may collect
						information used to identify you.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">
						G] CHANGES TO THIS PRIVACY POLICY
					</h2>
					<p className="text-neutral-300">
						We may update our Privacy Policy from time to time. Thus, you are
						advised to review this page periodically for any changes. We will
						notify you of any changes by posting the new Privacy Policy on this
						page. These changes are effective immediately after they are posted
						on this page.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">H] CONTACT US</h2>
					<p className="text-neutral-300">
						If you have any questions about this Privacy Policy, please contact
						us:{" "}
						<a
							href="mailto:contact@xproguard.com"
							className="text-fuchsia-400 underline"
						>
							contact@xproguard.com
						</a>
					</p>
				</section>
			</div>
		</div>
	)
}
