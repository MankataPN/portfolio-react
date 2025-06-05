import React, { useState } from "react";

function Resume() {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState("education");

    return (
        <section id="resume" className="main-resume mt-20 mb-10">
            {/* Section Heading */}
            <h1
                id="resume"
                className="text-center text-4xl font-bold mt-10 mb-10 text-gray-800"
            >
                My Resume
            </h1>

            <div className="tabs flex flex-wrap justify-between md:justify-evenly items-center bg-gray-100 rounded-md shadow-md py-4 px-6 mb-8 gap-4">
                <button
                    className={`text-lg font-medium ${activeTab === "education" ? "text-[#e74c3c] font-bold" : "text-gray-800"
                        } hover:text-[#e74c3c]`}
                    onClick={() => setActiveTab("education")}
                >
                    Education
                </button>
                <button
                    className={`text-lg font-medium ${activeTab === "skills" ? "text-[#e74c3c] font-bold" : "text-gray-800"
                        } hover:text-[#e74c3c]`}
                    onClick={() => setActiveTab("skills")}
                >
                    Skills
                </button>
                <button
                    className={`text-lg font-medium ${activeTab === "experience" ? "text-[#e74c3c] font-bold" : "text-gray-800"
                        } hover:text-[#e74c3c]`}
                    onClick={() => setActiveTab("experience")}
                >
                    Experience
                </button>
                <button
                    className={`text-lg font-medium ${activeTab === "certification" ? "text-[#e74c3c] font-bold" : "text-gray-800"
                        } hover:text-[#e74c3c]`}
                    onClick={() => setActiveTab("certification")}
                >
                    Certification
                </button>
            </div>



            {/* Tab Content */}
            <div className="tab-content">
                {/* Education Content */}
                {activeTab === "education" && (
                    <div className="tab-content-education">
                        <ul className="timeline relative list-none p-0">
                            <li className="timeline-item relative bg-white shadow-md rounded-lg p-6 mb-6">
                                <h2 className="text-xl font-bold text-gray-800">
                                    Business Administration
                                </h2>
                                <h3 className="text-lg text-gray-600">UPSA</h3>
                                <p className="text-gray-600 mt-4">
                                    An academic journey and a solid foundation in management that
                                    honed my leadership skills and equipped me with practical tools
                                    for navigating modern business environments.
                                </p>
                            </li>
                            <li className="timeline-item relative bg-white shadow-md rounded-lg p-6">
                                <h2 className="text-xl font-bold text-gray-800">
                                    Human Resource Management
                                </h2>
                                <h3 className="text-lg text-gray-600">HRCC</h3>
                                <p className="text-gray-600 mt-4">
                                    This experience equipped me with a deep understanding of organizational development and the skills to
                                    foster a productive and positive workplace environment.
                                </p>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Skills Content */}
                {activeTab === "skills" && (
                    <div className="tab-content-skills grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="skills bg-white shadow-md rounded-lg p-4 text-center">
                            <img
                                src="images/html.webp"
                                alt="HTML"
                                className="w-1/2 mx-auto mb-4 rounded-lg"
                            />
                            <h2 className="text-lg font-bold text-gray-800">HTML</h2>
                        </div>
                        <div className="skills bg-white shadow-md rounded-lg p-4 text-center">
                            <img
                                src="images/css.webp"
                                alt="CSS"
                                className="w-1/2 mx-auto mb-4 rounded-lg"
                            />
                            <h2 className="text-lg font-bold text-gray-800">CSS</h2>
                        </div>
                        <div className="skills bg-white shadow-md rounded-lg p-4 text-center">
                            <img
                                src="images/js.webp"
                                alt="JavaScript"
                                className="w-1/2 mx-auto mb-4 rounded-lg"
                            />
                            <h2 className="text-lg font-bold text-gray-800">JavaScript</h2>
                        </div>
                    </div>
                )}

                {/* Experience Content */}
                {activeTab === "experience" && (
                    <div className="tab-content-experience">
                        <ul className="timeline relative list-none p-0">
                            <li className="timeline-item relative bg-white shadow-md rounded-lg p-6 mb-6">
                                <h2 className="text-xl font-bold text-gray-800">
                                    IT Auditing - Freelance
                                </h2>
                                <h3 className="text-lg text-gray-600">June 2024 - Present</h3>
                                <p className="text-gray-600 mt-4">
                                    Gained expertise in evaluating IT systems, ensuring compliance with industry standards, and identifying risks to optimize organizational efficiency and data security.
                                </p>
                            </li>
                            <li className="timeline-item relative bg-white shadow-md rounded-lg p-6">
                                <h2 className="text-xl font-bold text-gray-800">
                                    NGO Volunteer
                                </h2>
                                <h3 className="text-lg text-gray-600">2022 - Present</h3>
                                <p className="text-gray-600 mt-4">
                                    Engaged in impactful community initiatives, supporting underprivileged groups and contributing to meaningful social change.
                                </p>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Certification Content */}
                {activeTab === "certification" && (
                    <div className="tab-content-certification">
                        <ul className="timeline relative list-none p-0">
                            <li className="timeline-item relative bg-white shadow-md rounded-lg p-6 mb-6">
                                <h2 className="text-xl font-bold text-gray-800">PHR Certification</h2>
                                <h3 className="text-lg text-gray-600">HRCC</h3>
                                <p className="text-gray-600 mt-4">
                                    Advanced knowledge in talent acquisition, employee relations, and organizational effectiveness.
                                </p>
                            </li>
                            <li className="timeline-item relative bg-white shadow-md rounded-lg p-6">
                                <h2 className="text-xl font-bold text-gray-800">
                                    Cybersecurity GIC Certification
                                </h2>
                                <h3 className="text-lg text-gray-600">Yesyoucan CyberSecure LLC</h3>
                                <p className="text-gray-600 mt-4">
                                    Specialization in risk assessment, compliance frameworks, and evaluation of IT systems to ensure security and performance.
                                </p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Resume;

