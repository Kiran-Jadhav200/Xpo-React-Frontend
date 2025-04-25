import React, {useState} from "react"
import {Link} from "react-router"
import {scroller} from "react-scroll"

// Sample job data
const jobs = [
	{
		id: 1,
		role: "Software Engineer (Android)",
		type: "Part Time",
		location: "Remote",
		image:
			"https://cdn.prod.website-files.com/643e232532628163609bd651/645b4543205bc7bd6b41d27d_Avatar%206.jpg",
		url: "/software-engineer-android",
	},
	{
		id: 2,
		role: "Software Engineer (iOS)",
		type: "Full Time",
		location: "Remote",
		image:
			"https://cdn.prod.website-files.com/643e232532628163609bd651/645b455199ba3444971b5442_Avatar%205.jpg",
		url: "/software-engineer-ios",
	},
	{
		id: 3,
		role: "Software Test Engineer",
		type: "Part Time",
		location: "Remote",
		image:
			"https://cdn.prod.website-files.com/643e232532628163609bd651/645b455efd781aeee073050e_Avatar%207.jpg",
		url: "/software-test-engineer",
	},
	{
		id: 4,
		role: "UI/UX Designer",
		type: "Part Time",
		location: "Remote",
		image:
			"https://cdn.prod.website-files.com/643e232532628163609bd651/645b455efd781aeee073050e_Avatar%207.jpg",
		url: "/uiux-designer",
	},
]

const JobListings = () => {
	const [hoveredJobId, setHoveredJobId] = useState(null)
	const [cursorPos, setCursorPos] = useState({x: 0, y: 0})

	const handleMouseEnter = (jobId) => {
		setHoveredJobId(jobId)
	}

	const handleMouseLeave = () => {
		setHoveredJobId(null)
	}

	const handleMouseMove = (e, jobId) => {
		if (hoveredJobId === jobId) {
			const {left, top} = e.currentTarget.getBoundingClientRect()
			setCursorPos({x: e.clientX - left, y: e.clientY - top})
		}
	}

	const scrollToListings = () => {
		scroller.scrollTo("jobListings", {
			duration: 800,
			delay: 0,
			smooth: "easeInOutQuart",
		})
	}

	return (
		<div>
			<div id="jobListings" className="container mx-auto p-4">
				{/* Header Section */}
				<div className="mb-8 lg:flex lg:justify-between lg:pb-8">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left text-slate-50">
						Join the Xproguard
					</h1>
					<p className="mt-4 lg:mt-14 text-base sm:text-lg text-left lg:text-right text-slate-50">
						Are you ready to take your career to the next level and be part of a
						cutting-edge technology revolution? Look no further than the
						Xproguard team!
					</p>
				</div>

				{/* Job Listings */}
				{jobs.map((job) => (
					<div key={job.id} className="my-8">
						<hr className="border-gray-300" />
						<Link to={job.url}>
							<div
								className="flex flex-col lg:flex-row items-center justify-between p-4 cursor-pointer relative group text-slate-50"
								onMouseEnter={() => handleMouseEnter(job.id)}
								onMouseLeave={handleMouseLeave}
								onMouseMove={(e) => handleMouseMove(e, job.id)}
								style={{height: "200px"}}
							>
								<div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
									<span className="border border-white text-white px-4 py-2 rounded-full transition-transform duration-300 group-hover:scale-110">
										<span className="rolling-text">{job.type}</span>
									</span>
									<span className="border border-white text-white px-4 py-2 rounded-full transition-transform duration-300 group-hover:scale-110">
										<span className="rolling-text">{job.location}</span>
									</span>
								</div>
								<h2 className="text-xl sm:text-2xl font-semibold text-center lg:text-left transition-transform duration-300 mt-4 lg:mt-0">
									{job.role}
								</h2>
								<span className=" text-2xl sm:text-3xl transition-transform duration-300 group-hover:rotate-12">
									{">"}
								</span>
								{hoveredJobId === job.id && (
									<div
										className="absolute pointer-events-none transform -translate-y-1/2 rounded-lg shadow-lg overflow-hidden transition-opacity duration-300 group-hover:-rotate-6"
										style={{
											left: cursorPos.x + 20,
											top: cursorPos.y,
											width: "200px",
											height: "200px",
										}}
									>
										<img
											src={job.image}
											alt={job.role}
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
										/>
									</div>
								)}
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default JobListings
