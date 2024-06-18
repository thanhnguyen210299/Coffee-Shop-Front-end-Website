import React from 'react'

// Import Image
import Espresso from "./../../assets/espresso.png"
import Cappuccino from "./../../assets/cappuccino.png"
import Americano from "./../../assets/americano.png"
import Affogato from "./../../assets/affogato.png"
import Flat_White from "./../../assets/flat_white.png"
import Cold_Brew from "./../../assets/cold_brew.png"

const MenuData = [
    {
        id: 1,
        img: Espresso,
        name: "Espresso",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eveniet.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: Cappuccino,
        name: "Cappuccino",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eveniet.",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Americano,
        name: "Americano",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eveniet.",
        aosDelay: "300",
    },
    {
        id: 4,
        img: Affogato,
        name: "Affogato",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eveniet.",
        aosDelay: "100",
    },
    {
        id: 5,
        img: Flat_White,
        name: "Flat White",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eveniet.",
        aosDelay: "200",
    },
    {
        id: 6,
        img: Cold_Brew,
        name: "Cold Brew",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eveniet.",
        aosDelay: "300",
    }
]

const Menu = () => {
  return (
    <section id = "menu">
        <div className='py-10 bg-primary/50'>
            <div className='container'>
                {/* Header */}
                <div className='text-center mb-20'>
                    <h1 className='text-4xl font-bold font-cursive text-brandDark'>
                        Best Coffee For You
                    </h1>
                </div>

                {/* Services Card Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-x-5 md:gap-y-20 place-items-center'>
                    {
                        MenuData.map((data, index) => {
                            return (
                                <div
                                    data-aos = "fade-up"
                                    data-aos-delay = {data.aosDelay} 
                                    key={index}
                                    className='rounded-2xl bg-black/40 hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative flex flex-col items-center pt-10'
                                >
                                    <div className='h-[150px] flex items-center justify-center'>
                                        <img src={data.img} alt='' className='size-full object-contain block mx-auto transform translate-y-[-100px] group-hover:scale-110 group-hover:rotate-6 duration-300'/>
                                    </div>
                                    <div className='pb-4 text-center'>
                                        <h1 className='text-xl font-bold mt-[-90px]'>{data.name}</h1>
                                        <p className='text-gray/20 group-hover:text-white duration-100 text-sm line-clamp-2'>{data.description}</p>
                                    </div>
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

export default Menu