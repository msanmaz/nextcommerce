import React, { useCallback, useState } from 'react';
import Link from 'next/link'
import Hamburger from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);
    React.useLayoutEffect = React.useEffect



    return (
        <div className="fixed z-50 w-full">
            <div className={` w-full px-6 flex items-center lg:py-0 py-2 bg-gray-700`}>
                <div className="flex my-4 text-white">
                    <Link href="/">
                        Logo
                    </Link>
                </div>

                <div className="justify-center py-2 relative mx-auto text-gray-600 hidden md:flex">
                    <input className="border-2 border-gray-300 bg-white h-10 px-5 md:pr-56 pr-0 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" />
                    <button type="submit" className="absolute left-98 top-0 mt-5">
                        <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                            viewBox="0 0 56.966 56.966" style={{ enableBackground: "new 0 0 56.966 56.966" }}
                            width="512px" height="512px">
                            <path
                                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>



                <div className="flex flex-nowrap items-center px-2 text-white">
                <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4" />

                <div className="px-2 cursor-pointer hover:underline">
                Cart
                </div>
                </div>


                <div className="flex items-center px-2">
                    <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg">
                        Sign In
                    </button>       
                </div>






                <button
                    className="hamburger md:hidden text-white cursor-pointer text-xl leading-none md:px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none z-50"
                    aria-controls="mobile-nav"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </button>


                <nav>
                    <aside
                        className={`transform top-0 z-50 right-0 w-64 bg-navside fixed h-full overflow-auto ease-in-out rounded-l-xl transition-all duration-300 z-30"
                                    ${isOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'}`}>
                        <ul className="items-center justify-between text-base text-white pt-4 mt-14 ml-20 lg:pt-0">
                            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white" href="/">Home Page</a></li>
                            <li className="flex"><button onClick={() => setShowMenu(!showMenu)} className="lg:p-4 flex animate py-3 px-0 border-b-2 border-transparent hover:border-white" >Barbering
<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-white mt-1 pl-1" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 256 256" style={{ enableBackground: "new 0 0 512 512" }}><g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093   " />
                                        </g>
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                </g></svg>
                            </button></li>
                            {showMenu == true &&

                                <div className="menu">
                                    <button> Menu item 1 </button>
                                    <button> Menu item 2 </button>
                                    <button> Menu item 3 </button>
                                </div>

                            }

                            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white lg:mb-0 mb-2" href="/contact">İletişim</a></li>
                            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white lg:mb-0 mb-2" href="/portfoy">Satılık <br />Portföyümüz</a></li>
                            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white lg:mb-0 mb-2" href="/kiralik">Kiralık <br /> Portföyümüz</a></li>

                        </ul>
                    </aside>



                </nav>

            </div>


            <div className="w-full bg-white flex-wrap px-4 space-x-4 flex">
                

                </div>


        </div>
    )
}