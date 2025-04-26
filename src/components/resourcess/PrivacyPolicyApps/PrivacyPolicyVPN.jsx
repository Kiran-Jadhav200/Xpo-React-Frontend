import React, {useEffect} from "react"

export default function PrivacyPolicyVPN() {
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
					<h1 className="relative text-5xl font-bold z-10">
						Xproguard VPN PRIVACY POLICY
					</h1>
				</div>

				{/* Terms Sections */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">1. PERMISSIONS</h2>
					<p className="text-neutral-300">
						For Xproguard VPN to function it requires access to certain
						permissions of your phone. Here is an explanation of how we use
						each. The application uses VPN permission to secure your personal
						data. That's why the application requires permission VPN Service
						Permission.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">
						2. PERSONAL INFORMATION
					</h2>
					<ul className="list-disc pl-5 space-y-2 text-neutral-300">
						<li>
							We made the Xproguard VPN App with your privacy in mind, so we are
							not collecting any personal information from users.
						</li>
					</ul>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">
						3. CHILDREN ONLINE PRIVACY PROTECTION ACT COMPLIANCE
					</h2>
					<p className="text-neutral-300">
						We are in compliance with the requirements of COPPA (Children's
						Online Privacy Protection Act), and we do not collect any
						information from anyone under 13 years of age. Our website, products
						and services are all directed to people who are at least 13 years
						old or older.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">4. COOKIES</h2>
					<p className="text-neutral-300">We do not use cookies.</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">5. ADVERTISING</h2>
					<p className="text-neutral-300">
						The app does not use any advertising services that may collect
						information used to identify you.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">
						6.THIRD PARTY SERVICES
					</h2>
					<p className="text-neutral-300">
						<ul>
							<li>
								1. Pango console :{" "}
								<a href="https://www.aura.com/legal/privacy-policy">
									Pango Policy
								</a>
							</li>
							<li>
								2. Google In-App Subscription:{" "}
								<a href="https://support.google.com/googleplay/android-developer/answer/10281818?hl=en">
									Google Payment billing Policy
								</a>
							</li>
						</ul>
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">
						7. CHANGES TO THIS PRIVACY POLICY
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
					<h2 className="text-2xl font-semibold mb-4">
						7. CHANGES TO THIS PRIVACY POLICY
					</h2>
					<p className="text-neutral-300">
						We may update our Privacy Policy from time to time. Thus, you are
						advised to review this page periodically for any changes. We will
						notify you of any changes by posting the new Privacy Policy on this
						page. These changes are effective immediately after they are posted
						on this page.
					</p>
				</section>
			</div>
		</div>
	)
}
