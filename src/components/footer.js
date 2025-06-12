import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="footer-section flex flex-wrap justify-around items-center gap-10 px-6">
                {/* Socials */}
                <div className="footer-socials text-center flex-1">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Socials</h2>
                    <div className="icon-container flex justify-center gap-6">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3b5998] text-2xl hover:opacity-80 transition duration-300"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1da1f2] text-2xl hover:opacity-80 transition duration-300"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0077b5] text-2xl hover:opacity-80 transition duration-300"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="text-center flex-1">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h2>
                    <ul className="footer-items list-none space-y-2">
                        <li>
                            <a
                                href="/#home"
                                className="text-gray-600 hover:text-[#007bff] transition duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#home"
                                className="text-gray-600 hover:text-[#007bff] transition duration-300"
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#features"
                                className="text-gray-600 hover:text-[#007bff] transition duration-300"
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#resume"
                                className="text-gray-600 hover:text-[#007bff] transition duration-300"
                            >
                                Resume
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#projects"
                                className="text-gray-600 hover:text-[#007bff] transition duration-300"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#contact"
                                className="text-gray-600 hover:text-[#007bff] transition duration-300"
                            >
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="copyright text-center mt-10">
                <p className="text-gray-600">© Copyright 2025. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
