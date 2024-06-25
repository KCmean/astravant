import React from 'react'

const ConBanOne = () => {
    return (
        <div>
            <div className="relative text-white bg-cover flex flex-col bg-center w-full h-screen" style={{ backgroundImage: "url('/concon.png')" }}>
                <div className="mx-auto my-auto flex flex-col gap-8">
                    <div className="text-7xl">
                        <p>ASTRAVANT REALTY</p>
                    </div>
                    <div className="mx-auto">
                        <p>Phone No. 897567546</p>
                        <p>Email- infor@astravant.com</p>
                    </div>
                    <div className="p-2 pl-4 pr-4 hover:bg-white transition duration-500 hover:text-black hover:cursor-pointer font-medium flex flex-col items-center justify-center text-white border border-[2px] mb-20 border-white mx-auto">
                        <p>Contact Us</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ConBanOne
