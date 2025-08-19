import { FaLocationDot } from 'react-icons/fa6'
import BannerSection from '../components/BannerSection'
import ConsultationForm from '../components/ConsultationForm'
import { HiOutlineMail } from 'react-icons/hi'
import { FaFax, FaPhoneAlt } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>MindClaire Contact</title>
                <meta name="description" content="Contact MindClaire for personalized mental health support. Schedule a free 15-minute consultation with Dr. Ritu Goel to discuss treatment goals and explore tailored psychiatric services." />
                <meta name="keywords" content="" />
            </Helmet>

            <BannerSection image={'/assets/contact_banner.jpg'} title={'Contact'} fontSize={'text-[50px]'}
                className={'bg-[100%]'}
            />

            <ConsultationForm />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-12">
                <div className='container mx-auto'>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-12 gap-7 lg:gap-10 items-center">
                            <div className="col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-5" data-aos="zoom-in">
                                <img src="/assets/ritu_1.webp" alt="Dr. Ritu Goel"
                                    className="rounded-[30px] h-auto"
                                />
                            </div>

                            <div className="lg:ml-20 col-span-12 lg:col-span-7 md:text-left" data-aos="fade-right">
                                <h2 className="text-4xl md:text-[41px] text-[#3C0A6D] mt-2 ringift">
                                    Ritu Goel <span className="text-[#984AD7] text-xl inter">MD.</span>
                                </h2>

                                <div className='flex gap-4 items-center mt-5'>
                                    <FaLocationDot className='text-[#3C0A6D] text-xl' />

                                    <h6 className='text-base inter_semibold'>Office Address</h6>
                                </div>

                                <p className='ml-[36.5px] mt-1 inter_medium'>
                                    5150 E. Pacific Coast Hwy, 2nd Floor,<br />
                                    Long Beach, CA 90804
                                </p>

                                <div className='flex gap-4 items-center mt-3'>
                                    <HiOutlineMail className='text-[#3C0A6D] text-xl' />

                                    <h6 className='text-base inter_semibold'>Email</h6>
                                </div>

                                <p className='ml-[36.5px] mt-1 inter_medium'>
                                    ritu.goel@mindclaire.com
                                </p>

                                <div className='flex gap-4 items-center mt-3'>
                                    <FaPhoneAlt className='text-[#3C0A6D] text-xl' />

                                    <h6 className='text-base inter_semibold'>Phone</h6>
                                </div>

                                <p className='ml-[36.5px] mt-1 inter_medium'>
                                    562- 448-2222
                                </p>

                                <div className='flex gap-4 items-center mt-3'>
                                    <FaFax className='text-[#3C0A6D] text-xl' />

                                    <h6 className='text-base inter_semibold'>FAX</h6>
                                </div>

                                <p className='ml-[36.5px] mt-1 inter_medium'>
                                    562-661-9707
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 items-center pt-14">
                            <h2 className="lg:text-[2rem] text-3xl inter_semibold text-black text-center">
                                Location
                            </h2>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.137635398423!2d-118.13845381921612!3d33.78294376297269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd31c0da01afa3%3A0xe2747d65d1d9e27a!2s5150%20E%20Pacific%20Coast%20Hwy%2C%20Long%20Beach%2C%20CA%2090804%2C%20USA!5e0!3m2!1sen!2sin!4v1715865692285!5m2!1sen!2sin"
                                width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" className='rounded-[20px] mt-5'>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact