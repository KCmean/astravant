import React from 'react'

const Mobile = () => {
    return (
        <div className='block xl:hidden'>
            <div className="flex flex-col w-full justify-start text-white text-center bg-[#001F66] p-4 gap-4">
                <div className="text-4xl">
                    <p>Astravant Realty group:</p>
                    <p>India's #1 real estate</p>
                    <p>agency.</p>
                </div>
                <img src="charman.png" className='mx-auto h-[70vh]' alt="" />
                <div className="md:px-28">
                    <p>
                        Welcome to the epitome of luxury living In India-
                        our No.1 real estate destination. Here, we redefine.
                        opulence with our exclusive collection of
                        properties, each crafted to perfoction with
                        meticulous attention to detail. From breathtaking
                        skyline views to lush green landscapes, our
                        portfolio boasts tho pinnacle of architectural
                        marvels. But ts not ust about the properties; is
                        about the experience. our esteemed cliente
                        racoivos nothing short of premior and
                        sophisticated service, tailored to thelr every ned:
                        Step into a realm where luxury knows no bounds,
                        and indulge in a lifestyle beyond comparo with us
                    </p>
                </div>
                <button className='border-[2px] p-2 hover:bg-white transition duration-500 hover:text-[#001F66] border-white w-1/4 mx-auto'>
                        <a href='/contact'>Learn More</a>
                </button>
            </div>
        </div>
    
    )

}

const Computer = () => {
    return (
      <div className="hidden xl:block">
        <div className="flex flex-row w-full justify-between text-white bg-[#001F66] h-screen">
          <div className="flex flex-col pl-20 pb-20 pt-20 gap-10">
            <div className="text-5xl">
              <p>Espire Realty group:</p>
              <p>India's #1 real estate</p>
              <p>agency.</p>
            </div>
            <div className="w-3/5 mt-10 ">
              <p>
                Welcome to the epitome of luxury living In India- our No.1 real
                estate destination. Here, we redefine. opulence with our
                exclusive collection of properties, each crafted to perfoction
                with meticulous attention to detail. From breathtaking skyline
                views to lush green landscapes, our portfolio boasts tho
                pinnacle of architectural marvels. But ts not ust about the
                properties; is about the experience. our esteemed cliente
                racoivos nothing short of premior and sophisticated service,
                tailored to thelr every ned: Step into a realm where luxury
                knows no bounds, and indulge in a lifestyle beyond comparo with
                us
              </p>
            </div>
            <button className="border-[2px] p-2 hover:bg-white transition duration-500 hover:text-[#001F66] border-white w-1/4">
              <a href="/contact">Learn More</a>
            </button>
          </div>
          <img src="charman.png" className="h-full" alt="" />
        </div>
      </div>
    );
}

const HeroIndie = () => {
    return (
        <>
            <Computer />
            <Mobile />
        </>
    )
}

export default HeroIndie
