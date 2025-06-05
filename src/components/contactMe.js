import React from "react";

function ContactMe() {
  return (
    <section id="contact" className="main-contact mb-20">
      {/* Contact Info and Form Container */}
      <div className="container2 bg-white flex flex-wrap gap-10 px-6 py-12 rounded-lg shadow-md">
        {/* Contact Info */}
        <div className="contact-info flex-1 flex flex-col justify-center p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
          <p className="text-lg text-gray-600">
            <strong>Address:</strong> Accra, Ghana
          </p>
          <p className="text-lg text-gray-600">
            <strong>Phone:</strong> (233) 541630292
          </p>
          <p className="text-lg text-gray-600">
            <strong>Email:</strong> <a href="mailto:mankata.pearl2@gmail.com" className="text-[#007bff]">mankata.pearl2@gmail.com</a>
          </p>
          <p className="text-lg text-gray-600">
            <strong>Website:</strong> <a href="http://www.myportfolio.com" className="text-[#007bff]">www.myportfolio.com</a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form flex-1 p-6 rounded-lg shadow-lg">
          <form className="flex flex-col">
            <label htmlFor="first-name" className="text-sm font-medium text-gray-800 mb-2">First Name</label>
            <input
              type="text"
              id="first-name"
              placeholder="First Name"
              className="p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff]"
            />

            <label htmlFor="last-name" className="text-sm font-medium text-gray-800 mb-2">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              className="p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff]"
            />

            <label htmlFor="email" className="text-sm font-medium text-gray-800 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff]"
            />

            <label htmlFor="message" className="text-sm font-medium text-gray-800 mb-2">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              rows="4"
              className="p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bff]"
            ></textarea>

            <button
              type="submit"
              className="p-3 text-white bg-[#007bff] rounded-md hover:bg-[#0056b3] transition duration-300"
            >
              Send Me A Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
