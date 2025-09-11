import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from '@/utils/util';

const Hero = () => {
    return (
        <section id="home-section" className='bg-slateGray'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center'>
                    <div className='col-span-6 flex flex-col gap-8 '>
                        <h1 className='text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0'>
                            Inspirar jovens estudantes a alcançar seus sonhos
                        </h1>
                        <h3 className='text-black/70 text-lg pt-5 lg:pt-0'>
                            Oferecemos cursos de alta qualidade para capacitar jovens estudantes a alcançar seus objetivos acadêmicos e profissionais.
                        </h3>
                        
                    </div>
                    <div className='col-span-6 flex justify-center'>
                        <div
                            className='w-full h-80 lg:h-96 bg-center bg-cover'
                            style={{
                                backgroundImage: `url(${getImagePrefix()}images/banner/class.jpg)`,
                                WebkitMaskImage: `url(${getImagePrefix()}images/banner/mahila.png)`,
                                maskImage: `url(${getImagePrefix()}images/banner/mahila.png)`,
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                                WebkitMaskSize: 'contain',
                                maskSize: 'contain',
                                WebkitMaskPosition: 'center',
                                maskPosition: 'center',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero;
