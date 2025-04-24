import React from "react"
import CarrierHero from "../components/carrier/CarrierHero"
import ContinuousScrollCarrier from "../components/carrier/ContiScrollCarrier"
import MidSection from "../components/carrier/MidSection"
import JobListings from "../components/carrier/JobListings"

export default function CareersPage() {
	// const [isModalOpen, setIsModalOpen] = React.useState(false)
	// const [selectedJob, setSelectedJob] =
	// 	(React.useState < string) | (null > null)

	// const handleApply = (jobTitle: string) => {
	//   setSelectedJob(jobTitle);
	//   setIsModalOpen(true);
	// };

	return (
		<div>
			<CarrierHero />
			<ContinuousScrollCarrier />
			<MidSection />
			<JobListings />
		</div>
	)
}
