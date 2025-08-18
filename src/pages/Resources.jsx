import { Link } from 'react-router-dom'
import BannerSection from '../components/BannerSection'
import { caregivers, patients, sections } from '../components/staticData'

const Resources = () => {
    return (
        <>
            <BannerSection image={'/assets/resource_banner.webp'} title={'Resource'} fontSize={'text-[50px]'}
                className={'bg-[70%]'}
            />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-7">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-1">
                        <p className="text-[16.5px] text-black lg:mt-2 inter">
                            <b>Welcome to MindClaire — a space dedicated to restoring mind, body, and spirit balance.</b>
                            {" "}As a board-certified psychiatrist specializing in child, adolescent, and adult care, I offer
                            compassionate, expert support to help you and your family navigate life’s mental health
                            challenges. Whether you're facing depression, anxiety, ADHD, insomnia, or autism or simply
                            seeking to enhance emotional well-being, these resources are designed to empower, educate,
                            and support you at every step of your journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-12 gap-7 lg:gap-6 items-center pt-10">
                        <div className="col-span-12 text-center">
                            <h2 className="lg:text-[2rem] text-3xl inter_semibold text-black mb-3">
                                Wellness Wednesday &{" "}
                                <span className="text-[#984AD7]">Social Media Resources</span>
                            </h2>
                        </div>

                        <div className="col-span-12 lg:col-span-6 flex flex-col md:flex-row lg:flex-col gap-6
                            xl:flex-row justify-center items-center"
                        >
                            <div className="border border-[#A3A3A3] rounded-2xl p-10 text-center w-full">
                                <img src="/assets/linkedin1.svg" alt="LinkedIn" className="mb-6 h-[40px]" />

                                <Link to='https://www.linkedin.com/company/mindclaire/' target="_blank" 
                                    className='mt-4 ml-0.5 text-[#3c0a6d] flex gap-1 
                                    inter hover:text-[#0a58ca] items-center inter'
                                >
                                    <p className='text-lg font-normal'>Follow now </p>
                                    <img src={'/icons/cta_arrow.svg'} alt='cta_arrow' className="mt-0.5" />
                                </Link>
                            </div>

                            <div className="border border-[#A3A3A3] rounded-2xl p-10 text-center w-full">
                                <img src="/assets/facebook.svg" alt="Facebook" className="mb-6 h-[40px]" />

                                <Link to='https://www.facebook.com/people/MindClaire/61560276094752/' target="_blank"
                                    className='mt-4 ml-0.5 text-[#3c0a6d] flex gap-1 inter hover:text-[#0a58ca] 
                                    items-center inter'
                                >
                                    <p className='text-lg font-normal'>Follow now </p>
                                    <img src={'/icons/cta_arrow.svg'} alt='cta_arrow' className="mt-0.5" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-6">
                            <p className="text-xl lg:mb-4 text-black inter">
                                At MindClaire, we regularly share integrative strategies and wellness insights across our
                                social media platforms. Join our community for:
                            </p>

                            <ul className="list-disc list-outside pl-6 xl:pr-5 text-black text-xl inter">
                                <li>
                                    Guidance on recognizing early signs of anxiety, depression, ADHD, and autism
                                    in children and teens
                                </li>
                                <li>Practical tips for promoting emotional regulation and well-being at home</li>
                                <li>Mindfulness practices, self-care routines, and tools for everyday balance</li>
                                <li>Parenting support and communication strategies tailored to developmental needs</li>
                                <li>Resources to help you know when to seek professional help.</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="lg:text-[2rem] text-3xl inter_semibold text-black text-center pt-10">
                        For Parents <span className="text-[#984AD7]">& Caregivers</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 text-left mt-7">
                        {caregivers?.map((item, index) => (
                            <div key={index} className="flex flex-col bg-white rounded-[20px] shadow px-5 py-4 h-full">
                                <h1 className="font-semibold text-[#984AD7] text-2xl inter_medium mb-4">
                                    {item?.title}
                                </h1>

                                <div className="rounded-[20px] overflow-hidden">
                                    <img src={item?.image} alt={item?.title} />
                                </div>

                                <ul className="mt-4 list-disc list-outside pl-4 text-black text-[15px] leading-6 inter">
                                    {item?.points.map((point, index) => (
                                        <li key={index} className='text-black'>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-6 pb-3">
                                    <Link to={item?.url} target="_blank">
                                        <button className='py-2.5 inter_medium rounded-[30px] bg-[#9D4EDD] text-white
                                            cursor-pointer hover:bg-[#3c0a6d] px-5'
                                        >
                                            Visit now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="lg:text-[2rem] text-3xl inter_semibold text-black text-center pt-10">
                        For Patients
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 text-left mt-7">
                        {patients?.map((item, index) => (
                            <div key={index} className="flex flex-col bg-white rounded-[20px] shadow px-5 py-4 h-full">
                                <h1 className="font-semibold text-[#984AD7] text-2xl inter_medium mb-4">
                                    {item?.title}
                                </h1>

                                <div className="rounded-[20px] overflow-hidden">
                                    <img src={item?.image} alt={item?.title} />
                                </div>

                                <ul className="mt-4 list-disc list-outside pl-4 text-black text-[15px] leading-6 inter">
                                    {item?.points.map((point, index) => (
                                        <li key={index} className='text-black'>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-6 pb-3">
                                    <Link to={item?.url} target="_blank">
                                        <button className='py-2.5 inter_medium rounded-[30px] bg-[#9D4EDD] text-white
                                            cursor-pointer hover:bg-[#3c0a6d] px-5'
                                        >
                                            Visit now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="lg:text-[2rem] text-3xl inter_semibold text-black text-center py-10">
                        Trusted External <span className="text-[#984AD7]">Resources</span>
                    </h2>

                    <div className="space-y-10">
                        {sections.map((data, idx) => (
                            <div key={idx}>
                                <h1 className="text-[25px] inter_medium text-[#984AD7]">
                                    {data?.title}
                                </h1>

                                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 text-left mt-5">
                                    {data?.items?.map((item, index) => (
                                        <div key={index} className='flex items-center p-4 rounded-xl gap-5 bg-[#f9f9ff]'>
                                            <img src={item.logo} alt={item.title}
                                                className="w-[100px] h-[100px] object-contain"
                                            />

                                            <div className="flex-1">
                                                <h1 className="text-base inter text-black mb-3 pr-5 whitespace-normal lg:whitespace-pre-line">
                                                    {item?.bold ? (<b>{item?.title}</b>) : (item?.title)}
                                                    {item?.description && (
                                                        <span className='inter'>{item.description}</span>
                                                    )}
                                                </h1>

                                                <Link to={item?.link} target="_blank">
                                                    <button className='py-1.5 inter rounded-[30px] bg-[#9D4EDD] text-[13px]
                                                        cursor-pointer hover:bg-[#3c0a6d] px-3 text-white'
                                                    >
                                                        Visit now
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <h1 className="lg:text-3xl text-2xl inter text-black pt-10">
                        Explore these resources and take the next step in your mental wellness journey. If you need 
                        personalized guidance, our team at MindClaire is here to help.
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Resources