import React from "react"

function JobDetail({job}) {
	if (!job) {
		return <p>No job details available.</p>
	}

	return (
		<div className="job-detail">
			<h1>{job.role}</h1>
			<p>Type: {job.type}</p>
			<p>Location: {job.location}</p>
			<img src={job.image} alt={job.role} />
			<a href={job.url}>Apply Now</a>
		</div>
	)
}

export default JobDetail
