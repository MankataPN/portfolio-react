import React from "react";


function Hero() {
    return (
        /* <header
          className="h-screen bg-cover bg-center bg-no-repeat border-b border-gray-600"
          style={{ backgroundImage: "url('/images/white-blank-background-texture-design-element.jpg')" }}>
                    <div class="flex justify-around p-5">
                        <div class="w-1/2 mt-[130px] mr-[50px] mb-[50px] ml-[-30px] sm:w-[60%] sm:mt-[150px] sm:ml-[0px]">
                            <p>WELCOME...</p>
                            <h1>Hi, I'm<span className="text-[#e74c3c] sm:text-red-500"> Pearl N. Mankata</span></h1>
                            <h2 class="relative w-[300px] h-[50px] overflow-hidden text-[24px] font-mono sm:w-[350px] sm:h-[60px]"><span class="absolute w-full text-center whitespace-nowrap overflow-hidden border-r-2 border-black box-border opacity-0"><span class="text-[#e74c3c] sm:text-red-500">a</span> Web Developer</span> <span
                            class="absolute w-full text-center whitespace-nowrap overflow-hidden border-r-2 border-black box-border opacity-0"><span class="text-[#e74c3c] sm:text-red-500">an</span> IT Auditor</span></h2>
                            <p>
                                With a foundation in Web Development and a growing interest in IT Auditing, I'm on a
                                journey to become a well-rounded professional, capable of bridging the gap between
                                Technology and Business needs.
                            </p>
        
                            <div class="find-me">
                                <p>FIND ME ON</p>
                                <div class="flex gap-2.5">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 no-underline transition-all duration-300 shadow-lg hover:bg-gray-200 hover:shadow-xl">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"  class="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 no-underline transition-all duration-300 shadow-lg hover:bg-gray-200 hover:shadow-xl">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 no-underline transition-all duration-300 shadow-lg hover:bg-gray-200 hover:shadow-xl">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
        
                        <div class="header-image">
                            <img src="/mypicture.jpeg" alt=""/>
                        </div>
                    </div>
                </header> */

        // <header className="h-screen bg-cover bg-center bg-no-repeat border-b border-gray-600 flex items-center justify-center"
        //     style={{ backgroundImage: "url('/white-blank-background-texture-design-element.jpg')" }}
        // >
        //     <div className="flex justify-around items-start p-5 h-full">
        //         <div className="w-1/2 mt-[130px] mr-[50px] mb-[50px] ml-[-30px]">
        //             <p className="text-lg text-gray-600 leading-[2]">WELCOME...</p>
        //             <h1 className="text-[2.09em] text-gray-800 leading-[1.5] font-semibold">
        //                 Hi, I'm<span className="text-[#e74c3c]"> Pearl N. Mankata</span>
        //             </h1>
        //             <div className="relative w-[300px] h-[50px] overflow-hidden text-[24px] font-mono">
        //                 <span
        //                     className="absolute w-full text-center text-3xl whitespace-nowrap overflow-hidden border-r-2 border-black box-border animate-typing opacity-100 top-0 font-semibold"
        //                     style={{ animationDelay: "0s" }}>
        //                     <span className="text-red-500">a</span> Web Developer
        //                 </span>

        //                 <span className="absolute w-full text-center text-3xl whitespace-nowrap overflow-hidden border-r-2 border-black box-border animate-typing opacity-0 top-0 font-semibold"
        //                     style={{ animationDelay: "4s", animationfillmode: "forwards" }}>
        //                     <span className="text-red-500">an</span> IT Auditor
        //                 </span>
        //             </div>

        //             <p className="text-[1.2em] text-gray-600 leading-[2]">
        //                 With a foundation in Web Development and a growing interest in IT Auditing, I'm on a journey to
        //                 become a well-rounded professional, capable of bridging the gap between Technology and Business needs.
        //             </p>
        //             <div className="mt-[150px]">
        //                 <p className="font-semibold text-gray-500 mb-4">FIND ME ON</p>
        //                 <div className="flex gap-2.5">
        //                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 no-underline transition-all duration-300 shadow-lg hover:translate-y-[-10px] hover:bg-gray-300 hover:shadow-xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500">
        //                         <i className="fab fa-facebook-f"></i>
        //                     </a>
        //                     <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 no-underline transition-all duration-300 shadow-lg hover:translate-y-[-10px] hover:bg-gray-300 hover:shadow-xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500">
        //                         <i className="fab fa-twitter"></i>
        //                     </a>
        //                     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 no-underline transition-all duration-300 shadow-lg hover:translate-y-[-10px] hover:bg-gray-300 hover:shadow-xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500">
        //                         <i className="fab fa-linkedin-in"></i>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="w-[40%] rounded-[10px] overflow-hidden mix-blend-multiply opacity-90 bg-transparent backdrop-blur-md">
        //             <img src="/mypicture.jpeg" alt="" className="w-full h-[97.5vh]" />
        //         </div>
        //     </div>
        // </header>


        // <header
        //     className="h-screen bg-cover bg-center bg-no-repeat border-b border-gray-600 flex items-center justify-center"
        //     style={{ backgroundImage: "url('/white-blank-background-texture-design-element.jpg')" }}
        // >
            /* <div className="flex flex-col md:flex-row justify-between items-start p-5 h-full w-full max-w-7xl mx-auto"> */
            /* Left Section */
            /* <div className="w-full md:w-1/2 mt-10 md:mt-[130px] md:mr-[50px] md:mb-[50px] md:ml-0 text-center md:text-left px-4">
                <p className="text-lg text-gray-600 leading-[2]">WELCOME...</p>
                <h1 className="text-3xl md:text-[2.5em] text-gray-800 leading-[1.5] font-semibold">
                    Hi, I'm<span className="text-[#e74c3c]"> Pearl N. Mankata</span>
                </h1>
                <div className="relative w-full max-w-[300px] h-[50px] mx-auto md:mx-0 overflow-hidden text-[24px] font-mono">
                    <span
                        className="absolute w-full text-center md:text-left text-2xl md:text-3xl whitespace-nowrap overflow-hidden border-r-2 border-black box-border animate-typing opacity-100 top-0 font-semibold"
                        style={{ animationDelay: "0s" }}
                    >
                        <span className="text-red-500">a</span> Web Developer
                    </span>
                    <span
                        className="absolute w-full text-center md:text-left text-2xl md:text-3xl whitespace-nowrap overflow-hidden border-r-2 border-black box-border animate-typing opacity-0 top-0 font-semibold"
                        style={{ animationDelay: "4s", animationFillMode: "forwards" }}
                    >
                        <span className="text-red-500">an</span> IT Auditor
                    </span>
                </div>
                <p className="text-base md:text-[1.2em] text-gray-600 leading-[2] mt-6">
                    With a foundation in Web Development and a growing interest in IT Auditing, I'm on a journey to
                    become a well-rounded professional, capable of bridging the gap between Technology and Business needs.
                </p>
                <div className="mt-12">
                    <p className="font-semibold text-gray-500 mb-4">FIND ME ON</p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 no-underline transition-all duration-300 shadow-lg hover:translate-y-[-10px] hover:bg-gray-300 hover:shadow-xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 no-underline transition-all duration-300 shadow-lg hover:translate-y-[-10px] hover:bg-gray-300 hover:shadow-xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 no-underline transition-all duration-300 shadow-lg hover:translate-y-[-10px] hover:bg-gray-300 hover:shadow-xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div> */

            /* Right Section (Image) */
            /* <div className="w-full md:w-[40%] rounded-[10px] overflow-hidden mix-blend-multiply opacity-90 bg-transparent backdrop-blur-md mt-10 md:mt-0 px-4">
      <img
        src="/mypicture.jpeg"
        alt="Pearl N. Mankata"
        className="w-full h-[60vh] md:h-[97.5vh] object-cover"/>
    </div>
  </div> */
        // </header>

        <header
        className="h-screen bg-cover bg-center bg-no-repeat border-b border-gray-600 flex items-center justify-center"
        style={{ backgroundImage: "url('/white-blank-background-texture-design-element.jpg')" }}
      >
        <div className="flex flex-col justify-center items-center text-center w-full px-6 max-w-4xl">
          {/* Welcome Text */}
          <p className="text-lg sm:text-xl text-gray-600 leading-[2]">WELCOME...</p>
      
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-[2.5em] text-gray-800 leading-[1.5] font-semibold mt-4">
            Hi, I'm<span className="text-[#e74c3c]"> Pearl N. Mankata</span>
          </h1>
      
          {/* Animated Text */}
          <div id="home" className="relative w-full max-w-[300px] h-[50px] mx-auto overflow-hidden text-[24px] font-mono mt-6">
            <span
              className="absolute w-full transform -translate-x-1/2 text-center text-2xl sm:text-3xl whitespace-nowrap overflow-hidden border-r-2 border-black box-border animate-typing opacity-100 top-0 font-semibold"
              style={{ animationDelay: "0s" }}
            >
              <span className="text-red-500">a</span> Web Developer
            </span>
            <span
              className="absolute w-full transform -translate-x-1/2 text-center text-2xl sm:text-3xl whitespace-nowrap overflow-hidden border-r-2 border-black box-border animate-typing opacity-0 top-0 font-semibold"
              style={{ animationDelay: "4s", animationFillMode: "forwards" }}
            >
              <span className="text-red-500">an</span> IT Auditor
            </span>
          </div>
      
          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-[1.2em] text-gray-600 leading-[2] mt-6">
            With a foundation in Web Development and a growing interest in IT Auditing, I'm on a journey to become a
            well-rounded professional, capable of bridging the gap between Technology and Business needs.
          </p>
      
          {/* Social Links */}
          <div className="mt-12">
            <p className="font-semibold text-gray-500 mb-4">FIND ME ON</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 no-underline transition-all duration-300 shadow-lg hover:translate-y-[-10px] hover:bg-gray-300 hover:shadow-xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 no-underline transition-all duration-300 shadow-lg hover:translate-y-[-10px] hover:bg-gray-300 hover:shadow-xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-gray-800 no-underline transition-all duration-300 shadow-lg hover:translate-y-[-10px] hover:bg-gray-300 hover:shadow-xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      

    )
}

export default Hero;