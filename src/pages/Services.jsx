import ApproachSection from '../components/ApproachSection'
import BannerSection from '../components/BannerSection'
import { HashLink } from 'react-router-hash-link';

const Services = () => {
    const services = [
        {
            icon: '/icons/Anxiety_Disorders.svg',
            title: "Anxiety Disorders",
            description: "Including generalized anxiety disorder, panic attacks, and \n social anxiety.",
        },
        {
            icon: '/icons/Depression.svg',
            title: "Depression",
            description: "From mild to severe depressive episodes, including treatment-resistant depression.",
        },
        {
            icon: '/icons/Attention_Deficit_Hyperactivity_Disorder_(ADHD).svg',
            title: "Attention Deficit Hyperactivity \n Disorder (ADHD)",
            description: "Addressing attention issues, impulsivity, and \n hyperactivity in children, teens, and adults.",
        },
        {
            icon: '/icons/autism_spectrum.svg',
            title: "Autism Spectrum Disorders & Comorbid \n Psychiatric Conditions",
            description: "Providing tailored interventions to enhance \n communication, social skills, and daily functioning.",
        },
        {
            icon: '/icons/Sleep_Disorders.svg',
            title: "Sleep Disorders",
            description: "Focused on improving sleep quality and addressing \n issues like insomnia and circadian rhythm disorders.",
        },
        {
            icon: '/icons/development_disorder.svg',
            title: "Developmental Disorders",
            description: "Special focus on conditions that affect children and adolescents, \n impacting their learning, behavior, and social interactions.",
        },
    ];

    const treatment = [
        {
            title: "Medication Management",
            description: "Carefully considered pharmacological treatment to manage and alleviate symptoms.",
            image: "/assets/medication-management.webp",
        },
        {
            title: "Plant based and herbal medicines",
            description: "Supplements and vitamins that support mental health, often used alongside other treatments.",
            image: "/assets/plant-based-and-herbal-medicines.webp",
        },
        {
            title: "Ayurveda",
            description: "Balancing your body and mind through diet, herbs, and relaxation techniques like yoga and meditation. It's about creating harmony inside to improve your overall health and mental state.",
            image: "/assets/ayurevda.webp",
        },
        {
            title: "Cognitive Behavioral Therapy (CBT)",
            description: "A structured, practical therapy that helps patients identify and change destructive thought patterns.",
            image: "/assets/cognitive-behavioral-therapy.webp",
        },
        {
            title: "Interpersonal Therapy (IPT)",
            description: "A short-term supportive therapy focusing on improving interpersonal relationships and social functioning.",
            image: "/assets/interpersonal-therapy.webp",
        },
        {
            title: "Family Therapy",
            description: "Involves family members in the treatment process to improve communication and resolve conflicts.",
            image: "/assets/family-therapy.webp",
        },
        {
            title: "Autism Assessments & \n Integrated Treatment",
            description: "Comprehensive evaluations followed by a combination of medical, behavioral, and educational interventions.",
            image: "/assets/autism-assessments-integrated-treatment.webp",
        },
        {
            title: "Parenting Resources",
            description: "Guidance and support for parents dealing with children's mental health issues.",
            image: "/assets/parenting-resources.webp",
        },
        {
            title: "Lifestyle Modifications",
            description: "Recommendations on exercise, sleep habits, and nutrition to improve overall health.",
            image: "/assets/lifestyle-modifications.webp",
        },
    ];

    return (
        <>
            <BannerSection image={'/assets/service_banner.webp'} title={'Services'} fontSize={'text-[50px]'} />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-14">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-12 gap-7 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-5" data-aos="zoom-in">
                            <img src="/assets/service_image.webp" alt="Mindclaire-Mental Health Wellness"
                                className="rounded-[30px] w-[456px] h-[451px]"
                            />
                        </div>

                        <div className="col-span-12 lg:col-span-7 md:text-left items-center" data-aos="fade-right">
                            <p className="text-lg lg:mb-4 text-black mt-3 inter">
                                At MindClaire, I believe in empowerment via addressing the root causes of mental
                                health challenges through a personalized and integrative approach. Together, we will
                                a plan that combines the leading traditional medicine with integrative approaches to
                                help you regain control of your mental health. We'll focus on not just alleviating
                                symptoms but also on achieving a vibrant and fulfilling life.
                            </p>

                            <p className="text-lg lg:mb-4 text-black lg:mt-2 mt-4 inter">
                                I go beyond treating individuals with the diagnosis; I also educate and empower families
                                to create a supportive environment at home.  My commitment is to guide you toward
                                holistic mental wellness, providing a treatment that is as unique as you are.
                            </p>

                            <p className="text-lg lg:mb-4 text-black lg:mt-2 mt-4 inter">
                                My work through nonprofit, writing, and speaking engagements is dedicated to educating
                                and reducing the stigma around mental health conditions.  I attempt to advocate for
                                my patients and their families at an individual level but also within the community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ApproachSection data={services} title={'Diagnoses/Conditions'} sub_title={'Treated'}
                className={'text-black mb-2'} description={`
                    I specialize in a broad spectrum of psychiatric conditions, offering comprehensive care for:`
                }
            />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-20">
                <div className='container mx-auto'>
                    <h2 className="lg:text-[2rem] text-3xl inter_semibold text-center text-black mb-1">
                        My Integrative <span className="text-[#984AD7]">Treatment Modalities</span>
                    </h2>

                    <p className="text-center sm:px-14 px-0 text-black inter mb-8">
                        I offer a variety of treatment modalities to cater to the specific needs and preferences of my patients
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 text-left">
                        {treatment?.map((data, index) => (
                            <div key={index}>
                                <div className="rounded-[30px] overflow-hidden">
                                    <img src={data?.image} alt={data?.title} />
                                </div>

                                <h5 className="font-semibold text-[#3c0a6d] text-[21px] pt-[30px] inter_medium
                                    whitespace-normal lg:whitespace-pre-line"
                                >
                                    {data?.title}
                                </h5>

                                <p className="text-black text-base inter mt-2.5">{data?.description}</p>
                            </div>
                        ))}
                    </div>

                    <div id='serv-appont' className="grid grid-cols-12 gap-7 lg:gap-10 items-center pt-14">
                        <div className="col-span-12">
                            <h2 className="lg:text-[2rem] text-3xl inter_semibold text-center text-black mb-1">
                                My <span className="text-[#984AD7]">Appointments</span>
                            </h2>

                            <p className="mt-2 text-center text-black inter">
                                I am currently accepting new patients in-person in Southern California or via telehealth
                                in the entire California.
                            </p>
                        </div>

                        <div className="col-span-12 -mt-5 text-center">
                            <em className="mt-5 text-xl text-center text-black font-bold">
                                I am an out of network provider. I do not accept any insurance. I provide superbills.
                            </em>
                        </div>

                        <div className="col-span-12 lg:col-span-6">
                            <div className='lg:h-[180px] md:h-32 h-auto'>
                                <h2 className="lg:text-[2rem] text-3xl inter_semibold text-[#3C0A6D] mb-1 sm:text-left">
                                    Initial Evaluation
                                </h2>

                                <p className="mt-2 text-black inter">
                                    The intake experience in my practice aims to be more comprehensive, collaborative, and
                                    personalized compared to traditional psychiatric evaluations, with a focus on treating the
                                    whole person, not just the symptoms.
                                </p>
                            </div>

                            <div className="lg:pt-6 md:pt-5 pt-7 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4">
                                <div className="bg-[#3C0A6D] text-white xl:h-[410px] h-[350px] pl-5 pr-4 rounded-[20px]">
                                    <h3 className="text-lg inter_semibold pb-3 mt-7 mb-2">90 Minute Intake</h3>
                                    <h2 className="text-4xl inter_semibold pb-3 mb-4">$795</h2>

                                    <p className="text-sm mb-14">
                                        This appointment will be 90 minutes long. We will spend time getting to know you
                                        and your current struggles, we will discuss your relationships, lifestyle habits,
                                        health history, and previous care.
                                    </p>

                                    <HashLink smooth to="/contact#contact-box">
                                        <button className='py-2.5 px-5 inter rounded-[30px] bg-[#9D4EDD] text-white
                                            cursor-pointer hover:!text-[#0a58ca]'
                                        >
                                            Schedule an appointment
                                        </button>
                                    </HashLink>
                                </div>

                                <div className="bg-[#3C0A6D] text-white xl:h-[410px] h-[350px] pl-5 pr-4 rounded-[20px]">
                                    <h3 className="text-lg inter_semibold pb-3 mt-7 mb-2">120 Minute Intake</h3>
                                    <h2 className="text-4xl inter_semibold pb-3 mb-4">$1195</h2>

                                    <p className="text-sm mb-14">
                                        I also offer extended initial appointments lasting 2 hours to minors and adults
                                        with autism or complex diagnoses for diagnostic evaluation and treatment planning.
                                    </p>

                                    <HashLink smooth to="/contact#contact-box">
                                        <button className='py-2.5 px-5 inter rounded-[30px] bg-[#9D4EDD] text-white
                                            cursor-pointer hover:!text-[#0a58ca]'
                                        >
                                            Schedule an appointment
                                        </button>
                                    </HashLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-6">
                            <div className='lg:h-[180px] md:h-32 h-auto'>
                                <h2 className="lg:text-[2rem] text-3xl inter_semibold text-[#9D4EDD] mb-1 sm:text-left">
                                    Follow-Up
                                </h2>

                                <p className="mt-2 text-black inter">
                                    The intake experience in my practice aims to be more comprehensive, collaborative, and
                                    personalized compared to traditional psychiatric evaluations, with a focus on treating the
                                    whole person.
                                </p>
                            </div>

                            <div className="lg:pt-6 md:pt-0 pt-7 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4">
                                <div className="bg-[#9D4EDD] text-white xl:h-[410px] h-[350px] pl-5 pr-4 rounded-[20px]">
                                    <h3 className="text-lg inter_semibold pb-3 mt-7 mb-2">25-Minute Follow-Up</h3>
                                    <h2 className="text-4xl inter_semibold pb-3 mb-4">$295</h2>

                                    <p className="text-sm mb-14">
                                        We will check in about previous recommendations, and discuss medications and other
                                        brief integrative approaches. We will discuss additional recommendations.
                                    </p>

                                    <HashLink smooth to="/contact#contact-box">
                                        <button className='py-2.5 px-5 inter rounded-[30px] bg-white text-black
                                            cursor-pointer hover:!text-[#0a58ca]'
                                        >
                                            Schedule an appointment
                                        </button>
                                    </HashLink>
                                </div>

                                <div className="bg-[#9D4EDD] text-white xl:h-[410px] h-[350px] pl-5 pr-4 rounded-[20px]">
                                    <h3 className="text-lg inter_semibold pb-3 mt-7 mb-2">50-Minute Follow-Up</h3>
                                    <h2 className="text-4xl inter_semibold pb-3 mb-4">$495</h2>

                                    <p className="text-sm mb-14">
                                        We will check in about previous recommendations, and discuss therapy, complementary
                                        approaches, follow ups and ongoing medication management.
                                    </p>

                                    <HashLink smooth to="/contact#contact-box">
                                        <button className='py-2.5 px-5 inter rounded-[30px] bg-white text-black
                                            cursor-pointer hover:!text-[#0a58ca]'
                                        >
                                            Schedule an appointment
                                        </button>
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 pt-10">
                        <div className='p-7 bg-[#F8F0FF] rounded-[30px]'>
                            <h2 className="text-[25px] inter_semibold text-black mb-4">
                                FREE Consultation
                            </h2>

                            <p className="text-[15px] text-black mb-8 lg:pr-16 pr-0">
                                I offer a free 15-minute consultation to discuss your needs and treatment goals, and
                                to determine if we might be a good fit. If interested, please book a consultation to
                                begin our conversation, click here.
                            </p>

                            <HashLink smooth to="/contact#contact-box">
                                <button className='py-2.5 px-5 inter rounded-[30px] bg-[#9D4EDD] text-white
                                    cursor-pointer hover:!text-[#0a58ca]'
                                >
                                    Schedule an appointment
                                </button>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services