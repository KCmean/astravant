import React, { useState, useEffect } from 'react';
import './stylecon.css'; // Ensure the path is correct based on your project structure
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ConUsBanTwo = () => {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <div className="relative bg-[#04236D] text-white bg-cover p-8 mx-auto my-auto flex flex-col bg-center w-full h-screen">
                {show &&
                    <div className="mx-auto mt-14 text-6xl">
                        <p>Get in touch with us</p>
                    </div>
                }
                <div className="flex lg:flex-row md:flex-col sm:flex-col lg:p-24 md:p-10 sm:p-8 lg:gap-56 md:gap-40 sm:gap-24">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-row gap-6">
                            <input
                                type="text"
                                className="p-3 outline-none border-2 border-white bg-transparent placeholder-left-thin"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                className="p-3 outline-none border-2 border-white bg-transparent placeholder-left-thin"
                                placeholder="Last Name"
                            />

                        </div>
                        <input
                            type="email"
                            className="p-3 outline-none border-2 border-white bg-transparent placeholder-left-thin"
                            placeholder="Email Address"
                        />
                        <input
                            type="text"
                            className="p-3 outline-none border-2 border-white bg-transparent placeholder-left-thin"
                            placeholder="Your Query is regarding?"
                        />
                        <textarea
                            name=""
                            id=""
                            rows="8"
                            placeholder="Description"
                            className="p-3 outline-none border-2 text-white border-white bg-transparent resize-none placeholder-left-thin"
                        ></textarea>
                        <button className='flex flex-row border-2 items-center justify-center border-[#E79700] w-1/4 ' type='submit'>Submit</button>

                    </div>
                    <div className="flex flex-col gap-4 text-3xl">
                        <p>info@astravant.com</p>
                        <p>+91 8329 109 390</p>
                        <p>info@astravant.com</p>
                        <div className="flex flex-row gap-4">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" >
                                <FaInstagram className="text-white h-6 w-6" />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
                                <FaFacebookF className="text-[#04236D] p-1 white bg-white h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" >
                                <FaLinkedinIn className="text- h-6 w-6" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" >
                                <FaTwitter className="text-white h-6 w-6" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConUsBanTwo
