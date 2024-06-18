import React from 'react'

import { TbTruckDelivery } from "react-icons/tb";
import { GrCertificate } from "react-icons/gr";
import { GiCoffeeBeans, GiCoffeeCup } from "react-icons/gi";

import Coffee from './../../assets/808799.png'

const FeatureList = [
    {
        id: 1,
        icon: TbTruckDelivery,
        title: "Free Shipping",
        description: "It is a long established fact that a reader will be by the readable content of a page looking at its layout."
    },
    {
        id: 2,
        icon: GrCertificate,
        title: "Organic Certified",
        description: "It is a long established fact that a reader will be by the readable content of a page looking at its layout."
    },
    {
        id: 3,
        icon: GiCoffeeBeans,
        title: "High Quality",
        description: "It is a long established fact that a reader will be by the readable content of a page looking at its layout."
    },
    {
        id: 4,
        icon: GiCoffeeCup,
        title: "Proper Roasting",
        description: "It is a long established fact that a reader will be by the readable content of a page looking at its layout."
    }
]

const Feature = () => {
  return (
    <section id = "features">
        <div className='py-14 bg-primary/60'>
            <div className='container'>
                {/* Header */}
                <div data-aos = "zoom-in" className='text-center mb-10'>
                    <h1 className='text-4xl font-bold font-cursive text-brandDark'>
                        Our Best Features
                    </h1>
                </div>

                {/* Content */}
                <div data-aos = "fade-left" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-x-15 md:gap-y-10 place-items-center'>
                    {
                        FeatureList.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className='bg-black/30 p-8 rounded-md relative before:absolute before:border-[2px] before:border-secondary/90 before:inset-[8px] flex flex-col items-center
                                        transition ease-in-out hover:-translate-y-3 duration-300'
                                >
                                    <data.icon className='text-5xl text-primary mb-2' />
                                    <h1 className='text-xl text-white/80 font-bold pb-2 pt-1 text-center'>{data.title}</h1>
                                    <p className='feature_description text-start'>{data.description}</p>
                                    <img src={Coffee} className='absolute w-[80px] opacity-20 top-4 right-4'/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    </section>
  )
}

export default Feature