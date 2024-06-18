import React from 'react'

import iOSDownload from './../../assets/Download_on_the_App_Store_Badge.png'
import androidDownload from './../../assets/en_badge_web_generic.png'
import background from './../../assets/pngtree-black-clock-and-cup-of-coffee-image_15648790.jpg'

import { GiShop } from "react-icons/gi";
import { BiCoffeeTogo } from "react-icons/bi";
import { SiCodechef } from "react-icons/si";
import { GrCertificate } from "react-icons/gr";

const backgroundImage = {
    backgroundImage: `url(${background})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
}

const AppStore = () => {
  return (
    <section id="about">
        {/* Statistic */}
        <div className='pt-12 pb-6 bg-black/50'>
            <div data-aos = "fade-up" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-x-15 md:gap-y-10 place-items-center'>
                <div className='text-center grid place-items-center'>
                    <div className='w-[80px] h-[80px] relative grid place-items-center margin-inline-auto
                        before:absolute before:-left-[1.5rem] before:-top-[1.5rem] before:w-full before:h-full before:rounded-full before:bg-primary before:opacity-60 before:hover:translate-y-[1.5rem] before:hover:translate-x-[1.5rem]'>
                        <GiShop className='text-5xl text-center z-10 text-white/80'/>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-primary'>100</p>
                        <h3 className='text-xl font-semibold font-cursive text-brandDark'>@ Total Branches</h3>
                    </div>
                </div>

                <div className='text-center grid place-items-center'>
                    <div className='w-[80px] h-[80px] relative grid place-items-center margin-inline-auto
                        before:absolute before:-left-[1.5rem] before:-top-[1.5rem] before:w-full before:h-full before:rounded-full before:bg-primary before:opacity-60 before:hover:translate-y-[1.5rem] before:hover:translate-x-[1.5rem]'>
                        <BiCoffeeTogo className='text-5xl text-center z-10 text-white/80'/>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-primary'>500</p>
                        <h3 className='text-xl font-semibold font-cursive text-brandDark'>@ Happy Customers</h3>
                    </div>
                </div>

                <div className='text-center grid place-items-center'>
                    <div className='w-[80px] h-[80px] relative grid place-items-center margin-inline-auto
                        before:absolute before:-left-[1.5rem] before:-top-[1.5rem] before:w-full before:h-full before:rounded-full before:bg-primary before:opacity-60 before:hover:translate-y-[1.5rem] before:hover:translate-x-[1.5rem]'>
                        <SiCodechef className='text-5xl text-center z-10 text-white/80'/>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-primary'>120</p>
                        <h3 className='text-xl font-semibold font-cursive text-brandDark'>@ Professional Chefs</h3>
                    </div>
                </div>

                <div className='text-center grid place-items-center'>
                    <div className='w-[80px] h-[80px] relative grid place-items-center margin-inline-auto
                        before:absolute before:-left-[1.5rem] before:-top-[1.5rem] before:w-full before:h-full before:rounded-full before:bg-primary before:opacity-60 before:hover:translate-y-[1.5rem] before:hover:translate-x-[1.5rem]'>
                        <GrCertificate className='text-5xl text-center z-10 text-white/80'/>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-primary'>30</p>
                        <h3 className='text-xl font-semibold font-cursive text-brandDark'>@ Years of Experience</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* Download */}
        <div style={backgroundImage} className='py-14'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                    <div data-aos = "fade-up" className='space-y-6 max-w-xl mx-auto'>
                        <h1 className='text-2xl text-center sm:text-flex sm:text-4xl font-semibold text-white/90 pl-3'>
                            ILULatte is available for iOS and Android
                        </h1>
                        <div className='flex flex-wrap justify-center sm:justify-center items-center gap-4'>
                            <a href='#'><img src={iOSDownload} className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/></a>
                            <a href='#'><img src={androidDownload} className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AppStore