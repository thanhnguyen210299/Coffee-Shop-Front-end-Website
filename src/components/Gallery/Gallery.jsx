import React, { useState, useEffect } from 'react'

import Pic01 from './../../assets/gallery_01.jpg'
import Pic02 from './../../assets/gallery_02.jpg'
import Pic03 from './../../assets/gallery_03.jpg'
import Pic04 from './../../assets/gallery_04.jpg'
import Pic05 from './../../assets/gallery_05.jpg'
import Pic06 from './../../assets/gallery_06.jpg'
import Pic07 from './../../assets/gallery_07.jpg'
import Pic08 from './../../assets/gallery_08.jpg'
import Pic09 from './../../assets/gallery_09.jpg'
import Pic10 from './../../assets/gallery_10.jpg'
import Pic11 from './../../assets/gallery_11.jpg'
import Pic12 from './../../assets/gallery_12.jpg'
import Pic13 from './../../assets/gallery_13.jpg'

const images = [
    { id: 1, src: Pic01,},
    { id: 2, src: Pic02,},
    { id: 3, src: Pic03, },
    { id: 4, src: Pic04,},
    { id: 5, src: Pic05,},
    { id: 6, src: Pic06, },
    { id: 7, src: Pic07,},
    { id: 8, src: Pic08,},
    { id: 9, src: Pic09, },
    { id: 10, src: Pic10,},
    { id: 11, src: Pic11,},
    { id: 12, src: Pic12,}, 
    { id: 13, src: Pic13,}
];

const Gallery = () => {

  return (
    <section id = "gallery">
        <div className='py-14 bg-black/80'>
            <div className='container'>
                <div data-aos = "flip-down" className='text-center mb-10'>
                    <h1 className='text-4xl font-bold font-cursive text-secondary '>
                        Our Photo Gallery
                    </h1>
                </div>
                
                <div data-aos = "fade-up" className="masonry sm:masonry-sm md:masonry-md">
                    {images.map((image, index) => (
                        <div key={index} className='p-4 break-inside drop-shadow-xl'>
                            <img
                                className="w-full h-auto rounded-lg"
                                src={image.src}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery;