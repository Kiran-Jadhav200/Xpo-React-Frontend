import React, { useState } from "react";
import ContinuousScroll from "../../ContinousScroll";

const jobDetails = {
  title: " Software Test Engineer",
  description:
    "We are seeking a highly motivated and detail-oriented Software Test Engineer to join our dynamic team. As a Software Test Engineer, you will be responsible for ensuring the quality, reliability, and performance of our applications through both manual and automated testing. Your passion for technology and commitment to excellence will directly contribute to delivering world-class products to our customers.",
  aboutJob:
    "As a Software Test Engineer, you will collaborate closely with developers, product managers, and UX designers to understand product functionality and user requirements. You will design and execute comprehensive test plans, identify bugs, and ensure issues are addressed before product releases. You will have the opportunity to work with a modern tech stack, introduce new testing methodologies, and continuously improve our QA processes.",
  responsibilities: [
    "Design, develop, and execute detailed test plans, test cases, and test scripts.",
    "Collaborate with cross-functional teams to understand requirements and translate them into effective testing strategies.",
    "Perform manual and automated testing of web, mobile, and backend applications.",
    "Identify, document, and track software defects and inconsistencies.",
    "Perform manual and automated testing of web, mobile, and backend applications.",
  ],
  qualifications: [
    "Bachelor’s degree in Computer Science, Engineering, or related field, or equivalent practical experience.",
    "2+ years of experience in one or more programming languages such as Java, Python, C#, or JavaScript.",
    "3+ years of hands-on experience in software quality assurance and testing methodologies.",
    "1 year of experience with software design and architecture principles.",
  ],
  benefits: [
    "Competitive Salary based on experience and skills.",
    "Flexible Working Hours and remote work opportunities.",
    "Health Insurance covering medical, dental, and vision.",
  ],
  jobType: "Full Time",
  workingHours: "9:00 - 18:00",
  location: "India",
};

const SoftwareDeveloperIOSPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formPayload.append(key, value);
      });

      await fetch("/api/apply", {
        method: "POST",
        body: formPayload,
      });
      setStatusMessage("Thank you! Your message has been received.");
    } catch {
      setStatusMessage("Oops! Something went wrong while submitting the form.");
    }
  };

  return (
    <div className="bg-[#000A1B] text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-12 px-6">
        <h1 className="text-4xl font-bold mb-4">{jobDetails.title}</h1>
        <p className="max-w-3xl mx-auto">{jobDetails.description}</p>
      </section>

      <ContinuousScroll />

      {/* Job and Form Section Side by Side */}
      <section className="px-6 py-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Job Details */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Job description</h2>
          <p className="mb-6">{jobDetails.aboutJob}</p>

          <h3 className="text-xl font-semibold mb-2">Job responsibilities</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            {jobDetails.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            {jobDetails.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">Other benefits</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            {jobDetails.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p>
            Join our team and be part of a dynamic organization revolutionizing
            data analytics through SaaS. Submit your resume and cover letter to
            apply.
          </p>
        </div>

        {/* Application Form */}
        <div className="flex-1 self-start bg-black p-8 rounded-xl shadow-2xl border border-purple-500/30">
          <div className="flex justify-between items-center mb-6 text-sm text-white">
            <span>🗓 {jobDetails.jobType}</span>
            <span>🕓 {jobDetails.workingHours}</span>
            <span>📍 {jobDetails.location}</span>
          </div>

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

            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="w-full text-white"
              accept=".pdf,.doc,.docx"
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
    </div>
  );
};

export default SoftwareDeveloperIOSPage;
