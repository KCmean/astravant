import React from 'react'

const HomeBannerTwo = () => {
    return (
        <div>
            <div className="w-full bg-white p-8 ">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-6 my-auto leading-tight text-[#04236D]">
                        <p className='text-6xl mx-auto'>Trending Locations</p>
                        <p className='lg:w-1/2 mx-auto text-lg'>There is nothing like it  anywhere. This is a once-in-a-lifetime opportunity to possess a natural oasis located in the exclusive neighborhood of Port Royal, the ultimate setting for creating a lifestyle of custom luxury.</p>
                        <button className='border-[2px] p-2 mx-auto hover:bg-[#04236D] transition duration-500 hover:text-white border-[#04236D]'>Learn More</button>
                    </div>
                    <div className='h-full my-auto w-72'>
                        <img src="bui.png" alt="" className='mr-8'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBannerTwo
