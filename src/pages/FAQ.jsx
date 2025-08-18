import { useState } from 'react';
import BannerSection from '../components/BannerSection'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(0);

    const toggle = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    const faqs = [
        {
            question: "Do you accept insurance?",
            answer: "I currently do not accept insurance directly. However, I can provide you with a superbill that you may submit to your insurance company for possible reimbursement. Please check with your insurer to understand your coverage for out-of-network providers.",
        },
        {
            question: "How are you different from an in-network provider?",
            answer: "As an out-of-network provider, I offer personalized and integrative psychiatric care that combines the best of conventional medicine with holistic treatments. This allows for more flexible and extended sessions, personalized treatment plans, and a focus on overall well-being rather than just symptom management.",
        },
        {
            question: "Do you prescribe stimulants?",
            answer: "Yes, I do prescribe stimulants when clinically appropriate as part of a comprehensive treatment plan. All prescriptions are based on a careful evaluation and are aimed at achieving the best possible outcomes with careful monitoring for safety and effectiveness.",
        },
        {
            question: "What should I expect during the initial consultation?",
            answer: "During the initial 15-minute consultation, we will discuss your current challenges and treatment goals. This is a great opportunity for us to determine if we are a good fit for each other. It’s also your time to ask any questions about my practice and approach.",
        },
        {
            question: "Can I book appointments online?",
            answer: "Yes, you can book appointments directly through our website using the booking widget. This allows you to choose a time and date that are most convenient for you, and you will receive immediate confirmation of your appointment.",
        },
        {
            question: "What is your cancellation policy?",
            answer: "I understand that unforeseen circumstances can arise. If you need to cancel or reschedule your appointment, please do so at least 48 hours in advance to avoid being charged for the session.",
        },
        {
            question: "Do you offer telehealth services?",
            answer: "Yes, I offer telehealth services to patients who are in California. This is a convenient way to access care from the comfort of your own home or any private space. Telehealth appointments are available for both initial evaluations and follow-up sessions.",
        },
        {
            question: "How long does each session last?",
            answer: "Initial evaluations typically last 90 minutes. This allows us adequate time to thoroughly evaluate your history and needs. Follow-up appointments can be either 25 or 50 minutes, depending on the complexity and needs.",
        },
        {
            question: "What ages do you treat?",
            answer: "I provide services to children, adolescents, and adults. My practice is equipped to address the unique challenges faced by each age group with tailored interventions.",
        },
        {
            question: "How do I prepare for my first appointment?",
            answer: "Before your first appointment, please fill out the forms sent to you and gather any previous medical or therapy records that might be relevant. It’s helpful to write down any symptoms, concerns, and goals you wish to discuss during our session.",
        },
    ];

    return (
        <>
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