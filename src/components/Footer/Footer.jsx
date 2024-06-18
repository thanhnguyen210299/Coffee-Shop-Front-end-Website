import React from 'react'

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

import Background from './../../assets/f996a8b256632b8766e8735a6ac435a1.jpg'
import Logo from './../../assets/ilulatte-high-resolution-logo-transparent_1.png'

const FooterLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#home",
    },
    {
        id: 2,
        name: "Menu",
        link: "/#menu",
    },
    {
        id: 3, 
        name: "About",
        link: "/#about",
    },
    {
        id: 4,
        name: "Features",
        link: "/#features",
    },
    {
        id: 5,
        name: "Gallery",
        link: "/#gallery",
    },
    {
        id: 6,
        name: "Testimonials",
        link: "/#testimonials",
    }
]

const bgImage = {
    backgroundImage: `url(${Background})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "300px",
    width: "100%",
}

const Footer = () => {
  return (
    <div style={bgImage} className='text-white'>
        <div className='min-h-[300px] pb-24 lg:pb-0 bg-black/40'>
            <div className='container grid md:grid-cols-3 pb-4 pt-4'>
                <div className='py-4'>
                    <a href=''>
                        <img src={Logo} className='h-[100px]'/>
                    </a>
                    <p className='pt-4'>
                        {" "}
                        Crafted Coffee, Cozy Vibes, Unforgetable Moments - Your Perfect Espresso Escape
                    </p>
                    <a href='#' target='_blank' className='inline-block bg-gradient-to-r from-primary to-secondary py-2 px-4 mt-5 text-sm rounded-full hover:scale-110 hover:bg-none hover:bg-white hover:text-primary'>
                        Order Now
                    </a>
                </div>

                <div className='py-4 md:pl-20 sm:pt-3'>
                    <h1 className='text-2xl font-semibold sm:text-left mb-3 text-primary font-cursive'>Quick Links</h1>
                    <ul className='space-y-3'>
                        {
                            FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a 
                                        href={data.link}
                                        className='inline-block hover:scale-105 hover:text-primary hover:underline hover:underline-offset-4 duration-200'
                                    >
                                        {data.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='py-4 sm:pt-3'>
                    <h1 className='text-2xl font-semibold sm:text-left mb-3 text-primary font-cursive'>Contact Us</h1>
                        <div>
                            <p><span className='text-primary font-bold'>Address:</span> Westminster, CA</p>
                            <p><span className='text-primary font-bold'>Email:</span> ntmthanh2102@gmail.com</p>
                            <p><span className='text-primary font-bold'>Phone Number:</span></p>

                        <div className='space-x-3 mt-6'>
                            <a href='#'>
                                <FaFacebookSquare className='text-3xl inline-block hover:scale-105 hover:text-primary duration-200'/>
                            </a>
                            <a href='#'>
                                <FaInstagramSquare className='text-3xl inline-block hover:scale-105 hover:text-primary duration-200'/>
                            </a>
                            <a href='#'>
                                <FaLinkedin className='text-3xl inline-block hover:scale-105 hover:text-primary duration-200'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
            <div>
                <p className='flex items-center justify-center mt-[1.5rem] p-[1rem] border-t-2 border-primary gap-[0.5rem] text-center'>Created by <span className='text-xl font-cursive text-primary'> Thanh Nguyen </span> in 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer