import React from "react";

function Features() {
    return(
        <section id="features" className="main-features border-b-[0.5px] border-gray-400">
        {/* Features Text */}
        <div className="features-text mt-[120px] px-6 text-center">
          <p className="text-[#e74c3c] text-lg sm:text-xl font-semibold">FEATURES</p>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">What I Do</h1>
        </div>
  
        {/* Features Section */}
        <div className="features-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10">
          {/* Feature 1: HTML/CSS */}
          {/* <div className="features bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300 hover:bg-gradient-to-r hover:from-purple-500/60 hover:to-pink-500/50 hover:text-white group">
            <div className="text-[40px] text-[#e74c3c] flex justify-center items-center space-x-4 group-hover:text-inherit">
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3-alt"></i>
            </div>
            <h2 className="text-xl font-semibold mt-6 text-gray-800 group-hover:text-inherit">HTML/CSS</h2>
            <p className="mt-4 text-gray-600 leading-6 group-hover:text-inherit">
              Crafting clean, responsive, and visually appealing web designs
              using HTML and CSS to bring ideas to life.
            </p>
          </div> */}
  
          {/* Feature 2: JavaScript */}
          {/* <div className="features bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300 hover:bg-gradient-to-r hover:from-purple-500/60 hover:to-pink-500/50 hover:text-white group">
            <div className="text-[40px] text-[#e74c3c] flex justify-center group-hover:text-inherit">
              <i className="fab fa-js"></i>
            </div>
            <h2 className="text-xl font-semibold mt-6 text-gray-800 group-hover:text-inherit">JavaScript</h2>
            <p className="mt-4 text-gray-600 leading-6 group-hover:text-inherit">
              Developing dynamic and interactive web applications with JavaScript
              to enhance user experience and functionality.
            </p>
          </div> */}
  
          {/* Feature 3: Frontend/Backend */}
          <div className="features bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300 hover:bg-gradient-to-r hover:from-purple-500/60 hover:to-pink-500/50 hover:text-white group">
            <div className="text-[40px] text-[#e74c3c] flex justify-center items-center space-x-4 group-hover:text-inherit">
              <i className="fas fa-palette"></i>
              <i className="fas fa-server"></i>
            </div>
            <h2 className="text-xl font-semibold mt-6 text-gray-800 group-hover:text-inherit">Frontend/Backend</h2>
            <p className="mt-4 text-gray-600 leading-6 group-hover:text-inherit">
              Building efficient applications to manage databases,
              process requests, and ensure seamless performance.
            </p>
          </div>
  
          {/* Feature 4: Web Development */}
          <div className="features bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300 hover:bg-gradient-to-r hover:from-purple-500/60 hover:to-pink-500/50 hover:text-white group">
            <div className="text-[40px] text-[#e74c3c] flex justify-center group-hover:text-inherit">
              <i className="fas fa-code"></i>
            </div>
            <h2 className="text-xl font-semibold mt-6 text-gray-800 group-hover:text-inherit">Web Development</h2>
            <p className="mt-4 text-gray-600 leading-6 group-hover:text-inherit">
              Creating end-to-end web solutions, from back-end implementation to
              front-end design, to deliver a complete digital experience.
            </p>
          </div>
  
          {/* Feature 5: Cyber Security */}
          <div className="features bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300 hover:bg-gradient-to-r hover:from-purple-500/60 hover:to-pink-500/50 hover:text-white group">
            <div className="text-[40px] text-[#e74c3c] flex justify-center group-hover:text-inherit">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h2 className="text-xl font-semibold mt-6 text-gray-800 group-hover:text-inherit">Cyber Security</h2>
            <p className="mt-4 text-gray-600 leading-6 group-hover:text-inherit">
              Implementing robust security measures to protect websites and
              applications from cyber threats and vulnerabilities.
            </p>
          </div>
  
          {/* Feature 6: HRM */}
          <div className="features bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:transform hover:-translate-y-2 transition duration-300 hover:bg-gradient-to-r hover:from-purple-500/60 hover:to-pink-500/50 hover:text-white group">
            <div className="text-[40px] text-[#e74c3c] flex justify-center group-hover:text-inherit">
              <i className="fas fa-users"></i>
            </div>
            <h2 className="text-xl font-semibold mt-6 text-gray-800 group-hover:text-inherit">HRM</h2>
            <p className="mt-4 text-gray-600 leading-6 group-hover:text-inherit">
              Leveraging technology to streamline HR processes, improve employee
              engagement, and drive organizational success.
            </p>
          </div>
        </div>
      </section>
    )
}


export default Features;