import React, {useEffect} from "react"

export default function TermsOfService() {
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
					<h1 className="relative text-5xl font-bold z-10">Terms of Service</h1>
				</div>

				{/* Terms Sections */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">
						1. Acceptance of Terms
					</h2>
					<p className="text-neutral-300">
						By accessing or using our applications and services, you agree to be
						bound by these Terms of Service. If you do not agree with any part
						of the terms, then you may not access the service.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
					<ul className="list-disc pl-5 space-y-2 text-neutral-300">
						<li>
							Permission is granted to temporarily download one copy of the
							materials for personal, non-commercial transitory viewing only.
						</li>
						<li>This is the grant of a license, not a transfer of title.</li>
						<li>
							You may not modify or copy the materials, use them for commercial
							purposes, or attempt to decompile or reverse engineer any
							software.
						</li>
					</ul>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
					<p className="text-neutral-300">
						The materials are provided on an "as is" basis. We make no
						warranties, expressed or implied, and hereby disclaim all other
						warranties including, without limitation, implied warranties or
						conditions of merchantability.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">
						4. Limitation of Liability
					</h2>
					<p className="text-neutral-300">
						In no event shall we be liable for any damages (including, without
						limitation, damages for loss of data or profit) arising out of the
						use or inability to use the materials.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
					<p className="text-neutral-300">
						We may revise these terms at any time without notice. By using this
						application, you agree to be bound by the then-current version of
						these Terms of Service.
					</p>
				</section>
			</div>
		</div>
	)
}
