import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section style={{ backgroundImage: `url(/assets/home_banner.webp)` }} className='h-screen bg-cover 
            bg-no-repeat bg-center lg:px-[6rem] sm:px-7 px-5 flex items-center'
        >
            <div className='container mx-auto'>
                <div className='pt-[150px]' data-aos="zoom-in-right">
                    <div className='xl:w-1/2 lg:w-[60%] w-full'>
                        <h2 className='xl:text-[3rem] text-3xl text-white font-semibold ringift lg:pr-12 pr-0'>
                            Empowering you to achieve holistic mental wellness through personalized & integrative care.

                            <Link to='#' className='mt-6 text-white flex gap-0.5 items-center border-b-[3px] w-max inter'>
                                <p className='sm:text-lg text-sm font-normal'>Now accepting new patients in California.</p>
                                <GoArrowUpRight className='sm:text-lg text-sm sm:mt-1.5 mt-1 font-normal' />

                                {/* <img src={'/assets/mindclaire_cta.png'} alt='mindclaire_cta'
                                    className="w-auto mt-6"
                                /> */}
                            </Link>
                        </h2>
                    </div>

                    <div>
                        <h5 className='text-white lg:w-[45%] w-full mt-6 sm:text-lg text-base font-sans pb-[90px] inter'>
                            Welcome to MindClaire, where I assist you towards harmony among mind, body, and spirit. As a
                            board-certified psychiatrist specializing in child, adolescent, and adult care, I'm here to
                            guide you through the challenges of depression, anxiety, ADHD, insomnia and autism.
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner