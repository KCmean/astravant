import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineIosShare } from "react-icons/md";
import db from '../assets/db.json'

const PP_one = () => {
    const params = useParams();
    const property = db[params.id]
    console.log(property);
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="w-full flex flex-col  gap-10 bg-white p-8 ">
                <div className="flex flex-col sm:flex-row justify-between font-medium">
                    <Link to="/search">
                        <FaArrowLeftLong size={30} />
                    </Link>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-black">
                        <p>Property description</p>
                        <p>Amenities and features</p>
                        <p>Other Property Details</p>
                    </div>

                    <div className="flex flex-row justify-center items-center">
                        <MdOutlineIosShare />
                        <p>Share</p>
                    </div>

                </div>
                <div className="flex flex-row justify-between gap-10 md:gap-5 sm:gap-2 items-center">
                    <p className='lg:text-5xl md:text-4xl sm:text-3xl font-medium w-2/5 leading-tight font-medium'>
                        {property.name}
                    </p>
                    <div className="w-1/2 h-[2px] bg-black"></div>
                    <p className='w-1/6 lg:text-3xl md:text-2xl sm:text-xl'>₹{property.price}</p>

                </div>
                <div className="flex flex-row justify-between lg:text-base text-xs w-full gap-4">
                    <img src={property.imgurl} className='w-1/2' alt="" />
                    <div className="flex flex-col leading-none w-full gap-6">
                        <div className="flex flex-row gap-2 justify-between items-center ">
                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-row gap-1 items-center justify-start lg:text-xl">
                                    <svg className='w-12' viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6787 22.9293H22.1623V29.8285H14.6787V22.9293ZM42.3987 26.9045C40.5716 25.1644 37.5513 25.1191 35.6652 26.8035C34.7511 27.6192 34.2365 28.714 34.2161 29.8863C34.2012 30.7217 34.4489 31.5207 34.9067 32.2183L33.3611 33.5977L32.0049 32.3061C31.594 31.9148 30.9165 31.9052 30.4931 32.283C30.0687 32.6617 30.0578 33.2859 30.4681 33.6767L31.8247 34.9687L30.8119 35.8726L28.6149 33.7806C28.2046 33.3893 27.5276 33.3802 27.1032 33.7584C26.6793 34.1367 26.6683 34.7608 27.0791 35.1521L29.2755 37.2435L28.6337 37.8163C28.2093 38.1951 28.1983 38.8192 28.6086 39.21C28.7082 39.3051 28.8276 39.3807 28.9596 39.4323C29.0917 39.4839 29.2336 39.5104 29.377 39.5103C29.6545 39.5106 29.9211 39.4112 30.1203 39.2331L31.5305 37.9747C31.5308 37.9744 31.5311 37.9744 31.5314 37.9742C31.5316 37.9739 31.5316 37.9737 31.5319 37.9735L34.0794 35.7001L34.0798 35.6998L34.0801 35.6994L36.3939 33.6345C37.1356 34.079 37.9937 34.3334 38.9001 34.3471C38.9262 34.3476 38.9528 34.3476 38.9794 34.3476C40.2218 34.3476 41.3943 33.9101 42.289 33.1118C43.2031 32.2961 43.7177 31.2012 43.7381 30.0289C43.759 28.8565 43.2835 27.7467 42.3987 26.9045Z" fill="black" />
                                        <path d="M48.889 32.2925C48.889 28.7359 47.236 25.5361 44.6127 23.2852V20.1318L47.1314 22.0872C47.3238 22.2369 47.5676 22.3189 47.8194 22.3187C47.9753 22.3188 48.1294 22.2875 48.2708 22.2269C48.4122 22.1663 48.5375 22.0779 48.6379 21.9679C49.0179 21.5516 48.9599 20.9298 48.5084 20.579L29.5803 5.88409C28.376 4.94902 26.634 4.95286 25.437 5.89275L17.8856 11.8098V8.14547C17.8856 6.51502 16.4469 5.1887 14.6783 5.1887C12.9097 5.1887 11.4711 6.51502 11.4711 8.14547V16.8362L5.43347 21.5679C4.98348 21.9202 4.92868 22.5425 5.31133 22.9568C5.52277 23.1864 5.82341 23.3043 6.12621 23.3043C6.37102 23.3043 6.61691 23.2272 6.81787 23.0694L9.33291 21.0983V39.9553C9.33291 41.5857 10.7716 42.912 12.5402 42.912H28.784C30.7659 43.9856 33.0652 44.6124 35.5254 44.6124C38.262 44.6124 40.8072 43.8475 42.9281 42.5413C43.2091 42.4001 43.4705 42.2312 43.6929 42.022C46.8471 39.7665 48.889 36.2492 48.889 32.2925ZM11.4711 39.9553V19.4227L13.2324 18.0423C13.2434 18.0337 13.2476 18.021 13.2583 18.012C13.3156 17.9635 13.3563 17.904 13.4011 17.845C13.437 17.7975 13.4789 17.7548 13.5047 17.7033C13.5314 17.6504 13.5398 17.5918 13.556 17.5343C13.5751 17.4661 13.5977 17.4007 13.6007 17.3305C13.6013 17.3169 13.6092 17.3054 13.6092 17.2916V8.14552C13.6092 7.6022 14.089 7.15993 14.6783 7.15993C15.2677 7.15993 15.7474 7.6022 15.7474 8.14552V13.9407C15.7474 13.9888 15.7699 14.0299 15.7771 14.0762C15.7875 14.1448 15.7949 14.2116 15.8212 14.2776C15.848 14.3449 15.8899 14.4013 15.9312 14.4608C15.9578 14.4993 15.9691 14.5431 16.0022 14.5788C16.0116 14.589 16.0253 14.593 16.0351 14.6028C16.0877 14.6555 16.152 14.693 16.2159 14.7341C16.2677 14.7674 16.3144 14.8063 16.3707 14.8303C16.4269 14.8543 16.4891 14.8618 16.55 14.8767C16.6254 14.8949 16.698 14.916 16.7757 14.9187C16.7901 14.9193 16.8021 14.9263 16.8166 14.9263C16.8672 14.9263 16.9105 14.906 16.9592 14.8998C17.0356 14.8902 17.1098 14.883 17.1833 14.858C17.2552 14.8335 17.3155 14.7953 17.3792 14.7578C17.4215 14.7331 17.4696 14.7223 17.5088 14.6914L26.822 7.39428C27.2208 7.08099 27.8019 7.08049 28.2028 7.39189L42.4902 18.484C42.4882 18.509 42.4745 18.5303 42.4745 18.5557V21.7894C40.4467 20.6448 38.0724 19.9727 35.5255 19.9727C28.1567 19.9727 22.1619 25.4993 22.1619 32.2926C22.1619 35.6606 23.6382 38.7148 26.0222 40.9409H12.5402C11.9508 40.9409 11.4711 40.4986 11.4711 39.9553ZM24.3001 32.2925C24.3001 26.5864 29.3359 21.9438 35.5255 21.9438C41.715 21.9438 46.7509 26.5864 46.7509 32.2925C46.7509 37.9987 41.715 42.6413 35.5255 42.6413C29.3359 42.6413 24.3001 37.9987 24.3001 32.2925Z" fill="black" />
                                    </svg>
                                    <p>{property.ready}</p>
                                </div>
                                <div className="w-3/4 h-1 mt-2 bg-black"></div>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-row gap-1 pb-2 items-center justify-start lg:text-xl">
                                    <div className="p-2 rounded-full border border-[4px] border-blue-gray-800 ">

                                        <svg className='w-2' viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.2998 5.61269L8.33981 10.8767L16.7798 2.57959" stroke="#3A4651" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>

                                    <p>{property.verified}</p>
                                </div>
                                <div className="w-3/4 h-1 bg-black"></div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-2 items-center ">
                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-row gap-1 lg:gap-3 pt-2 pb-2 items-center justify-start lg:text-xl">
                                    <svg className='w-8 lg:w-12 ' viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 32V26.5919M35 32V26.5919M35 26.5919C35 26.5919 35 24.7892 35 21.6344C35 21.1838 31.1 21.1838 31.1 21.1838M35 26.5919H9M9 26.5919C9 26.5919 9 22.0851 9 21.6344C9 21.1838 13.2714 21.1838 13.2714 21.1838M13.2714 21.1838C13.2714 21.1838 13.0857 14.619 13.2714 13.6725C13.4571 12.726 22.885 13.0555 22.885 13.0555C22.885 13.0555 30.969 12.8669 31.1 13.6725C31.2857 14.8144 31.1 21.1838 31.1 21.1838M13.2714 21.1838H22.885L31.1 21.1838" stroke="black" stroke-width="3.84342" />
                                        <rect x="1.92171" y="1.92171" width="40.1566" height="40.1566" stroke="black" stroke-width="3.84342" />
                                    </svg>

                                    <p>{property.beddrooms} Bedrooms</p>
                                </div>
                                <div className="w-3/4 h-1 bg-black"></div>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-row gap-1 pb-2 pt-1 items-center justify-start lg:text-xl">

                                    <svg className='w-12' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M46.4224 24.5648L43.4681 19.6414H44.1554C45.058 19.6414 45.7964 18.903 45.7964 18.0005C45.7964 17.0979 45.058 16.3595 44.1554 16.3595H41.9675C41.9483 16.3595 41.9304 16.3646 41.9113 16.3653L40.0734 9.98162C39.6717 8.58428 38.3748 7.60779 36.9197 7.60779H13.1025C11.6475 7.60779 10.3505 8.58423 9.94882 9.98107L8.11023 16.3652C8.09138 16.3645 8.07368 16.3595 8.05468 16.3595H5.86678C4.96423 16.3595 4.22581 17.0979 4.22581 18.0004C4.22581 18.903 4.96423 19.6414 5.86678 19.6414H6.55385L3.59978 24.5653C3.29346 25.0753 3.1317 25.6589 3.13184 26.2538V33.8154C3.13184 35.6251 4.60397 37.0973 6.41372 37.0973H7.5077V40.299C7.5077 41.4064 8.4053 42.304 9.51262 42.304H10.9726C12.0799 42.304 12.9775 41.4064 12.9775 40.299V37.0973H37.0447V40.085C37.0447 41.1669 37.9217 42.0439 39.0035 42.0439H40.5556C41.6375 42.0439 42.5145 41.1669 42.5145 40.085V37.0973H43.6085C45.4182 37.0973 46.8903 35.6251 46.8903 33.8154V26.2538C46.8904 25.6588 46.7287 25.0749 46.4224 24.5648ZM44.7024 33.8154C44.7024 34.4185 44.2121 34.9094 43.6085 34.9094H6.41377C5.81019 34.9094 5.31979 34.4185 5.31979 33.8154V26.2538C5.32006 26.0555 5.37396 25.861 5.47577 25.6908L9.53647 18.9219C9.6807 18.6815 9.79394 18.4214 9.87513 18.1442L12.0513 10.5863C12.1848 10.1205 12.6175 9.79574 13.1025 9.79574H36.9197C37.4047 9.79574 37.8374 10.1205 37.9709 10.5869L40.1471 18.1442L40.1481 18.149C40.2278 18.4208 40.3416 18.6814 40.4868 18.9246L44.5464 25.6903C44.6482 25.8607 44.7021 26.0553 44.7024 26.2538V33.8154Z" fill="black" />
                                        <path d="M38.5705 18.5508L37.2221 13.0391C36.9825 12.0599 36.1049 11.3712 35.0968 11.3712H14.8685C13.855 11.3712 12.9742 12.0672 12.7399 13.0533L11.4301 18.5649C11.1034 19.9395 12.1458 21.2587 13.5588 21.2587H36.4452C37.8641 21.2587 38.9076 19.9291 38.5705 18.5508ZM10.9034 25.5798L7.62153 25.2373C6.976 25.1699 6.41406 25.6763 6.41406 26.3253V27.2992C6.41406 27.9034 6.90381 28.3932 7.50804 28.3932H10.7899C11.3941 28.3932 11.8839 27.9034 11.8839 27.2992V26.6678C11.8839 26.1076 11.4606 25.6379 10.9034 25.5798ZM42.4013 25.1173L39.1194 25.4598C38.5623 25.5179 38.139 25.9876 38.139 26.5478V27.1792C38.139 27.7834 38.6288 28.2732 39.233 28.2732H42.5149C43.119 28.2732 43.6088 27.7835 43.6088 27.1792V26.2054C43.6088 25.5563 43.0469 25.05 42.4013 25.1173ZM34.55 25.1113H15.4729C14.7612 25.1113 14.239 25.7802 14.4116 26.4706L14.9586 28.6585C15.0177 28.8952 15.1543 29.1053 15.3466 29.2555C15.5389 29.4056 15.7759 29.4872 16.0199 29.4872H34.003C34.247 29.4872 34.4839 29.4056 34.6762 29.2555C34.8685 29.1053 35.0051 28.8952 35.0643 28.6585L35.6113 26.4706C35.7839 25.7802 35.2616 25.1113 34.55 25.1113ZM32.6692 30.5812H17.3537C16.7495 30.5812 16.2597 31.0709 16.2597 31.6751C16.2597 32.2793 16.7495 32.7691 17.3537 32.7691H32.6692C33.2734 32.7691 33.7631 32.2793 33.7631 31.6751C33.7631 31.0709 33.2734 30.5812 32.6692 30.5812Z" fill="black" />
                                    </svg>

                                    <p>{property.parking}</p>
                                </div>
                                <div className="w-3/4 h-1 bg-black"></div>
                            </div>
                        </div>
                        <div className="w-5/6">
                            <p>{property.description}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <img className='w-1/4' src={property.imgurl} alt="" />
                    <img className='w-1/4' src={property.imgurl} alt="" />
                    <img className='w-1/4' src={property.imgurl} alt="" />
                    <img className='w-1/4' src={property.imgurl} alt="" />
                </div>
            </div>

        </div>
    )
}

export default PP_one