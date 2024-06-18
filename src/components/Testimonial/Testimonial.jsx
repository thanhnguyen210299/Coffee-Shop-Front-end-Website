import React from 'react'
import Slider from 'react-slick'

const TestimonialsData = [
    {
        id: 1,
        name: "David Jung",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit placeat et dicta fugit consequatur corporis numquam rem ipsum veritatis minus facere quis, incidunt facilis optio delectus veniam. Corrupti, cupiditate ducimus!",
        img: "https://picsum.photos/130/130",
    },
    {
        id: 2,
        name: "Emily Glober",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit placeat et dicta fugit consequatur corporis numquam rem ipsum veritatis minus facere quis, incidunt facilis optio delectus veniam. Corrupti, cupiditate ducimus!",
        img: "https://picsum.photos/140/140",
    },
    {
        id: 3,
        name: "Henry To",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit placeat et dicta fugit consequatur corporis numquam rem ipsum veritatis minus facere quis, incidunt facilis optio delectus veniam. Corrupti, cupiditate ducimus!",
        img: "https://picsum.photos/135/135",
    },
    {
        id: 4,
        name: "Nicole Dang",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit placeat et dicta fugit consequatur corporis numquam rem ipsum veritatis minus facere quis, incidunt facilis optio delectus veniam. Corrupti, cupiditate ducimus!",
        img: "https://picsum.photos/145/145",
    },
    {
        id: 5,
        name: "Jacob Loren",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit placeat et dicta fugit consequatur corporis numquam rem ipsum veritatis minus facere quis, incidunt facilis optio delectus veniam. Corrupti, cupiditate ducimus!",
        img: "https://picsum.photos/148/148",
    },
    {
        id: 6,
        name: "Noah Lessie",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit placeat et dicta fugit consequatur corporis numquam rem ipsum veritatis minus facere quis, incidunt facilis optio delectus veniam. Corrupti, cupiditate ducimus!",
        img: "https://picsum.photos/165/165",
    }
]

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }
  return (
    <section id = "testimonials">
        <div className='py-14 pb-10 bg-primary/50'>
            <div className='container'>
                <div data-aos = "fade-up" className='text-center mb-10'>
                    <h1 className='text-4xl font-bold font-cursive text-brandDark'>
                        Testimonials
                    </h1>
                </div>

                <div data-aos = "zoom-in">
                    <Slider {... settings}>
                        {
                            TestimonialsData.map((data, index) => {
                                return (
                                    <div className='my-6' key={data.id}>
                                        <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/30 relative'>
                                            <div className='mb-4'>
                                                <img src={data.img} className='rounded-full w-20 h-20'/>
                                            </div>
                                            <div className='flex flex-col items-center gap-4'>
                                                <div className='space-y-3'>
                                                    <p className='text-xs text-primary'>{data.text}</p>
                                                    <h1 className='text-xl font-bold text-brandDark/60 font-cursive'>{data.name}</h1>
                                                </div>
                                            </div>
                                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial