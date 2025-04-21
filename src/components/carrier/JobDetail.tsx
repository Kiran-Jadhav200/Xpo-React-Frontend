import React from 'react';

interface Job {
  role: string;
  type: string;
  location: string;
  image: string;
  url: string;
}

function JobDetail({ job }: { job: Job | null }) {
  if (!job) {
    return <p>No job details available.</p>;
  }

  return (
    <div className="job-detail">
      <h1>{job.role}</h1>
      <p>Type: {job.type}</p>
      <p>Location: {job.location}</p>
      <img src={job.image} alt={job.role} />
      <a href={job.url}>Apply Now</a>
    </div>
  );
}

export default JobDetail;
