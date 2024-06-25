import React from 'react'

const HomeBannerOne = () => {
    return (
      <div >
        <div
          className="relative bg-cover flex flex-col bg-center w-full h-screen"
          style={{ backgroundImage: "url('/hpbg.png')" }}
        >
          <div className="flex flex-col my-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-20 md:ml-24 lg:ml-64    text-white font-light justify-between font-medio">
            <h2
              className="font-serif "
              style={{
                fontFamily: "'Georgia', 'Times New Roman', Times, serif",
                fontWeight: "lighter",
              }}
            >
              Where Dreams
            </h2>
            <h2
              className="mx-auto"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', Times, serif",
                fontWeight: "lighter",
              }}
            >
              Meet Realty
            </h2>
          </div>
          
            <div className="p-6 hover:bg-white transition duration-500 hover:text-black hover:cursor-pointer font-medium flex flex-col items-center justify-center text-white border-[4px] mb-20 border-white mx-auto">
              <a href='/rentalprop'>
                <p>Find Your</p>
                <p>Dream Home</p>
              </a>  
            </div>
            
        </div>
      </div>
    );
}

export default HomeBannerOne
