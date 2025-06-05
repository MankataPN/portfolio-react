import React from "react";


function Portfolio() {
    return(
        <section id="portfolio" className="main-portfolio border-b-[0.5px] border-gray-400">
      {/* Portfolio Heading */}
      <div className="portfolio-text mt-20 text-center">
        <p className="text-[#e74c3c] text-sm sm:text-base font-semibold">VISIT MY PORTFOLIO</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">My Portfolio</h1>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-6 py-12">
        {/* Portfolio Card 1 */}
        <div className="portfolio bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
          <img
            src="images/landingpage.jpg"
            alt="Project 1"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <p>
            <a
              href="#/"
              className="text-[#e74c3c] hover:underline text-base font-medium"
            >
              External Link
            </a>
          </p>
          <h2 className="text-lg font-bold text-gray-800 mt-2">Project 1</h2>
        </div>

        {/* Portfolio Card 2 */}
        <div className="portfolio bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
          <img
            src="images/cocktail.jpg"
            alt="Project 2"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <p>
            <a
              href="#/"
              className="text-[#e74c3c] hover:underline text-base font-medium"
            >
              External Link
            </a>
          </p>
          <h2 className="text-lg font-bold text-gray-800 mt-2">Project 2</h2>
        </div>

        {/* Portfolio Card 3 */}
        <div className="portfolio bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
          <img
            src="images/hotel.jpg"
            alt="Project 3"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <p>
            <a
              href="#/"
              className="text-[#e74c3c] hover:underline text-base font-medium"
            >
              External Link
            </a>
          </p>
          <h2 className="text-lg font-bold text-gray-800 mt-2">Project 3</h2>
        </div>

        {/* Portfolio Card 4 */}
        <div className="portfolio bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300">
          <img
            src="images/portfolio.jpg"
            alt="Project 4"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <p>
            <a
              href="#/"
              className="text-[#e74c3c] hover:underline text-base font-medium"
            >
              External Link
            </a>
          </p>
          <h2 className="text-lg font-bold text-gray-800 mt-2">Project 4</h2>
        </div>
      </div>
    </section>
    )
}


export default Portfolio;