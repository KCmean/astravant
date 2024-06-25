import React from 'react'

const Nsl = () => {
    return (
        <div>
            <div className="relative bg-cover flex flex-col bg-center w-full h-screen" style={{ backgroundImage: "url('/tow.png')" }}>
                <div className="relative mx-auto my-auto">
                    <div className="flex flex-row justify-between mx-auto">
                        <div className="relative z-10 bg-[rgba(29,89,227,0.51)] max-w-md leading-tight gap-4 mx-auto text-white p-4 pt-12 pb-28 flex flex-col justify-center items-center text-center">
                            <p className='w-4/5 text-3xl'>Bringing your dream home near to you</p>
                            <p className='w-4/5'>We offer the highest level of integrity,
                                expertise, and service. The Dawn McKenna
                                Group is the #1 leading real estate team in
                                the Midwest, Southwest Florida and Park City
                                for Coldwell Banker. Whether buying, selling
                                or renting, you can counton our Local
                                Expertise and Global Reach.
                            </p>
                            <button className='border-[2px] p-2 hover:bg-white transition duration-500 hover:text-[#001F66] border-white w-1/4'>Contact us</button>

                        </div>

                        <div className="border-t-2 border-r-2 border-b-2 transform -translate-x-[0px] translate-y-10 p-6 my-auto mx-auto text-white text-center flex flex-col gap-6 border-white">
                            <p className='text-2xl'>NEWSLATER</p>
                            <p className='w-4/5 mx-auto leading-tight'>For exclusive news and market updates, sign up for our newsletter.</p>
                            <input type="email" className='border border-2 w-2/3 mx-auto outline-none border-r-white p-3 bg-[rgba(29,89,227,0.31)]' placeholder='Your Email' name="" id="" />
                            <button className='border-[2px] p-2 hover:bg-white transition duration-500 hover:text-[#001F66] border-white w-1/4 text-center mx-auto mt-8 mb-7'>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nsl
