import React from 'react'

import BannerPic from './../../assets/pngtree-3d-iced-coffee-glass-png-image_12360554.png'
import Background from './../../assets/coffee-splash-milk-coffee-beans-isolated-white-background_449849-16226.jpg'
import AboutLogo from './../../assets/d4459a5d44905ff2cf3c245e7a931675.jpg'

// Import Icon
import { CiCoffeeBean } from "react-icons/ci";
import { LiaHotjar } from "react-icons/lia";
import { GiThermometerCold } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";

const bgImage = {
    backgroundImage: `url(${Background})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const About = () => {
  return (
    <section id='about'>
        <div className='bg-brandDark p-10 pb-20 w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-8 items-center'>
                <div className='relative pl-8'>
                    <div className='before:absolute before:top-10 before:right-10 before:-left-2 before:bg-primary before:h-full'>
                        <img src={AboutLogo} className='relative z-10'/>
                    </div>
                </div>
                <div>
                    <h1 data-aos = "fade-down" className='text-secondary text-3xl sm:text-4xl font-bold font-cursive mb-5'>About Us</h1>
                    <h2 data-aos = "zoom-in" className='text-white text-2xl font-semibold font-cursive'>
                        Fresh Qualify and Organic Tasty Coffee House for {" "}
                        <span className='text-primary font-cursive'> You </span>
                    </h2>
                    <p data-aos = "fade-up" className='my-4 text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alternation in some form by injected humor or randomized words which don't look even slightly believable.</p>
                    <div className='gap-6 p-4'>
                        <p data-aos = "fade-up" data-aos-delay = "100" className='flex gap-4 text-white'>
                            <FaCheck className='text-secondary'/>
                            At vero eos et accusamus et iusto odio
                        </p>

                        <p data-aos = "fade-up" data-aos-delay = "200" className='flex gap-4 text-white'>
                            <FaCheck className='text-secondary'/>
                            Established fact that a reader will be distracted
                        </p>

                        <p data-aos = "fade-up" data-aos-delay = "300" className='flex gap-4 text-white'>
                            <FaCheck className='text-secondary'/>
                            Sed ut perspiciatis unde omnis iste natus sit
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div style={bgImage}>
            <div className='bg-black/50 min-h-[550px] flex justify-center items-center py-12 sm:py-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* Image section */}
                    <div data-aos = "zoom-in">
                        <img src={BannerPic} alt="" className='max-w-[430px] w-full mx-auto drop-shadow-xl' />
                    </div>
                    {/* Text section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 data-aos = "fade-up" className='text-3xl sm:text-4xl font-bold font-cursive'>Premium Blend Coffee</h1>
                        <p data-aos = "fade-up" className='text-sm text-brandDark tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis labore dolore qui consectetur commodi consequatur reprehenderit corrupti? Error, laborum minima non debitis, atque cupiditate esse aut reprehenderit officiis optio ratione?</p>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='space-y-5'>
                                <div data-aos = "fade-up" data-aos-delay = "200" className='flex items-center gap-3 shadow-sm p-3 rounded-full bg-white text-brandDark'>
                                    <CiCoffeeBean className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full border-primary border-2 text-primary' />
                                    <span>Premium Coffee</span>
                                </div>

                                <div data-aos = "fade-up" data-aos-delay = "200" className='flex items-center gap-3 shadow-sm p-3 rounded-full bg-white text-brandDark'>
                                    <LiaHotjar className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full border-primary border-2 text-primary' />
                                    <span>Hot Coffee</span>
                                </div>

                                <div data-aos = "fade-up" data-aos-delay = "300" data-aos-offset = "0" className='flex items-center gap-3 shadow-sm p-3 rounded-full bg-white text-brandDark'>
                                    <GiThermometerCold className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full border-primary border-2 text-primary' />
                                    <span>Cold Coffee</span>
                                </div>
                            </div>
                            <div data-aos = "slide-left" className='border-l-4 border-brandDark/30 pl-6 space-y-3'>
                                <h1 className='text-2xl font-semibold font-cursive'>Tea Lover</h1>
                                <p className='text-black-500 text-sm'>
                                    {" "}
                                    Much like writing code, brewing the perfect cup of tea 
                                    requires patience, precision, and a dash of passion to
                                    create a comforting blend of flavors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About