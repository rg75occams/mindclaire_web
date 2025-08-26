import { useState } from 'react';
import BannerSection from '../components/BannerSection'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { faqs } from '../components/staticData';
import PageTitle from '../components/PageTitle';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(0);

    const toggle = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    return (
        <>
            <PageTitle title="Mindclaire Faqs" keywords=""
                description="Find quick answers to common questions about our mental wellness services, policies, and support. Explore our FAQ to get the help you need, fast."
            />

            <BannerSection image={'/assets/faq_banner.png'} title={'FAQ’s'} className={'bg-[95%]'}
                fontSize={'text-[50px]'}
            />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-14">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-1 items-center gap-4">
                        {faqs.map((item, index) => (
                            <div key={index} className="border border-[#d9d9d9] rounded-2xl overflow-hidden 
                                transition-all duration-300 ease"
                            >
                                <button onClick={() => toggle(index)} className="cursor-pointer w-full text-left flex 
                                    justify-between items-center px-3.5 py-4"
                                >
                                    <h3 className='px-3.5 text-black inter_semibold'>{item?.question}</h3>

                                    <p className={`h-6 w-6 bg-[#3C0A6D] rounded-full flex justify-center 
                                        items-center text-white ${isOpen === index ? 'pb-[1.5px]' : 'pt-[1.5px]'}`}
                                    >
                                        {isOpen === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </p>
                                </button>

                                <div className={`px-7 overflow-hidden transition-all duration-300 ease 
                                    ${isOpen === index ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}
                                >
                                    <p className="opacity-100 text-base text-black inter_medium">
                                        {item?.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ