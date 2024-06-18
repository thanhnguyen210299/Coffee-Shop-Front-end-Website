import React, { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
//npx gltfjsx _.gltf
import Coffee_Cup from './../../../public/Coffee_cup'

const Home = () => {
  return (
    <section id = "home">
        <div className='min-h-[550px] bg-brandDark flex justify-center items-center text-white pt-4 lg:pt-20 pb-2'>
            <div className='container pb-8 sm:pb-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* Text Content */}
                    <div className='order-2 sm:order-1 flex flex-col justify-center gap-6'>
                        <span data-aos = "fade-up" data-aos-delay = "200" className='text-secondary font-cursive font-medium text-2xl pb-0'>Welcome to ILULatte!</span>
                        <h1 
                            data-aos = "fade-up"
                            data-aos-once = "true"
                            className='text-5xl sm:text-6xl lg:text-7xl font-bold'
                        >
                            Discover Amazing
                            {" "}
                            <span 
                                data-aos = "zoom-out"
                                data-aos-delay = "200"
                                className='text-primary font-cursive'
                            > 
                                 Coffee 
                            </span>
                            {" "}
                            and Get Energy
                        </h1>
                        <p data-aos = "fade-up" data-aos-delay = "300">There are many variations of passages available, but the majority have suffered alternation in some from by injected humor or randomized words.</p>
                        <div data-aos = "fade-up" data-aos-delay = "300">
                            <a href="#menu" className='cursor-pointer bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 transition hover:text-brandDark duration-200'>See Our Menu</a>
                        </div>
                    </div>
                    {/* Image Content */}
                    <div className='min-h-[450px] sm:min-h-[550px] flex justify-center items-center order-1 sm:order-2 relative'>
                        <Canvas camera={{fov: 50, position: [2, 4, 2]}}>
                            <Suspense fallback = {null}>
                                <ambientLight/>
                                <spotLight intensity={0.9} angle={0.5} penumbra={1} position={[20,20,20]} castShadow/>
                                <Coffee_Cup/>
                                <OrbitControls enablePan={true} enableRotate={true}/>
                                {/* <Environment files={""}/> */}
                            </Suspense>
                        </Canvas> 
                        <div data-aos = "fade-left" className='bg-gradient-to-r from-secondary to-primary absolute top-10 left-12 sm:-top-3 lg:top-10 lg:left-8 p-3 rounded-xl'><h1>Hey Coder</h1></div>
                        <div data-aos = "fade-right" className='bg-gradient-to-r from-secondary to-primary absolute bottom-10 right-12 p-3 rounded-xl'><h1>Best Coffee</h1></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home