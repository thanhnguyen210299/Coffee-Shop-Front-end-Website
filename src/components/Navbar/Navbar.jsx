import React, { useState, useEffect } from 'react'

// Import Picture
import Logo from './../../assets/ilulatte-high-resolution-logo-transparent_1.png'
import { FaCoffee } from 'react-icons/fa'

import { GoHome } from "react-icons/go";
import { BiFoodMenu } from "react-icons/bi";
import { TiInfoLargeOutline } from "react-icons/ti";
import { MdOutlineHotelClass } from "react-icons/md";
import { RiGalleryLine, RiUserFollowLine } from 'react-icons/ri';

const Menus = [
    {
        id: 1,
        name: "Home",
        icon: GoHome,
        link: "/#home",
    },
    {
        id: 2,
        name: "Menu",
        icon: BiFoodMenu,
        link: "/#menu",
    },
    {
        id: 3, 
        name: "About",
        icon: TiInfoLargeOutline,
        link: "/#about",
    },
    {
        id: 4,
        name: "Features",
        icon: MdOutlineHotelClass,
        link: "/#features",
    },
    {
        id: 5,
        name: "Gallery",
        icon: RiGalleryLine,
        link: "/#gallery",
    },
    {
        id: 6,
        name: "Testimonials",
        icon: RiUserFollowLine,
        link: "/#testimonials",
    }
]

const Navbar = () => {

    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                const id = section.getAttribute('id');
                const offsetTop = section.offsetTop;
                const offsetHeight = section.offsetHeight;

                if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                    setActiveId(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white fixed bottom-0 lg:top-0 lg:bottom-auto w-full z-[100]'>
        <div className='container py-2'>
            <div className='flex justify-between items-center gap-4'>
                {/* Logo section */}
                <div className='hidden lg:block' data-aos="fade-down" data-aos-once="true">
                    <a href='' className='font-bold text-2xl lg:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive'>
                        <img src = {Logo} alt='Logo' className='max-h-20 h-auto'/>
                    </a>
                </div>

                {/* Links section */}
                <div 
                    className='flex justify-between items-center gap-4 w-full lg:w-auto'
                >
                    <ul className='flex justify-around w-full lg:justify-center lg:w-auto lg:gap-4'>
                        {
                            Menus.map((menu, index) => (
                                <li key={index} className='relative group'>
                                    <a href={menu.link}
                                        className={`flex flex-col lg:flex-row lg:gap-[0.25rem] items-center text-xl py-2 px-2 lg:px-4 ${activeId === menu.link.substring(2) ? 'bg-brandDark text-secondary/90' : ''} hover:text-primary duration-200`}
                                    >
                                       
                                        <menu.icon className={`lg:border-0 lg:rounded-none lg:text-2xl w-12 h-12 rounded-full border-2 p-2 ${activeId === menu.link.substring(2) ? 'border-secondary/90' : 'translate-y-4 lg:translate-y-0'} hover:border-primary`}/>
                                        <span className={`lg:inline ${activeId === menu.link.substring(2) ? '' : 'hidden'}`}>{menu.name}</span>
                                        
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <button className='hidden lg:flex bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 items-center gap-3'>
                        Order
                        <FaCoffee className='text-xl cursor-pointer'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar