import React from "react";


function Projects() {
    return(
        <section id="projects" className="main-portfolio border-b-[0.5px] border-gray-400">
      {/* Portfolio Heading */}
      <div className="portfolio-text mt-20 text-center">
        <p className="text-[#e74c3c] text-sm sm:text-base font-semibold">VISIT MY WORKS</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">My Projects</h1>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
        {/* Portfolio Card 1 */}
        <div className="portfolio bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
          <img
            src="handprestaurant.png"
            alt="Project 1"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <p>
            <a
              href="https://github.com/JAM-Hearts-Plates/JAM-Hearts-Plates-H-and-P-Restaurant"
              target="_blank" rel="noopener noreferrer"
              className="text-[#e74c3c] hover:underline text-base font-medium"
            >
              Code <i className="fas fa-code"></i>
            </a>
          </p>
          <p className="text-lg text-gray-800 mt-2">A dynamic system supporting restaurant operations. Facilitates menu management, order tracking, and secure customer interactions, streamlining the dining experience.</p>
        </div>

        {/* Portfolio Card 2 */}
        <div className="portfolio bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
          <img
            src="advertising.jpg"
            alt="Project 2"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <p>
            <a
              href="https://github.com/jepp-x/advertising-api"
              target="_blank" rel="noopener noreferrer"
              className="text-[#e74c3c] hover:underline text-base font-medium"
            >
              Code <i className="fas fa-code"></i>
            </a>
          </p>
          <p className="text-lg text-gray-800 mt-2">A scalable platform for campaign management and ad tracking. Implements secure authentication and analytics, ensuring effective ad performance monitoring.</p>
        </div>

        {/* Portfolio Card 3 */}
        <div className="portfolio bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
          <img
            src="ecommerce.jpg"
            alt="Project 3"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <p>
            <a
              href="https://github.com/MankataPN/ecommerce-api"
              target="_blank" rel="noopener noreferrer"
              className="text-[#e74c3c] hover:underline text-base font-medium"
            >
              Code <i className="fas fa-code"></i>
            </a>
          </p>
          <p className="text-lg text-gray-800 mt-2">A system powering online transactions, inventory management, and user authentication. Enhances customer experience with secure payment processing and order tracking.</p>
        </div>

        {/* Portfolio Card 4 */}
        <div className="portfolio bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
          <img
            src="movie.jpg"
            alt="Project 4"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <p>
            <a
              href="https://github.com/MankataPN/movie-api"
              target="_blank" rel="noopener noreferrer"
              className="text-[#e74c3c] hover:underline text-base font-medium"
            >
              Code <i className="fas fa-code"></i>
            </a>
          </p>
          <p className="text-lg text-gray-800 mt-2">An intuitive service for managing movie data. Enables users to search, filter, and retrieve detailed movie information.</p>
        </div>
      </div>
    </section>
    )
}


export default Projects;