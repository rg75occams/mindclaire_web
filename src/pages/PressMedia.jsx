import React from 'react'
import BannerSection from '../components/BannerSection'
import { Link } from 'react-router-dom';

const press_media = [
    {
        id: 1,
        title: "Mindful steps today. Enduring wellness tomorrow. - Dr. Ritu Goel, Mindclaire.",
        description: "Dr. Ritu Goel suggests what to do when insurance forces a Vyvanse switch, understand your options, find safe alternatives, and stay in control of your ADHD treatment.",
        image: "/pressrelease/pr-forbes.webp",
    },
    {
        id: 2,
        title: "No Vyvanse? No Panic. Dr. Ritu Goel Breaks It Down",
        description: "Dr. Ritu Goel suggests what to do when insurance forces a Vyvanse switch, understand your options, find safe alternatives, and stay in control of your ADHD treatment.",
        image: "/pressrelease/pr-singlecare-1.webp",
    },
    {
        id: 3,
        title: '"Nebivolol: Tiny Dose, Big Calm”- Dr. Ritu Goel on The Checkup by Singlecare',
        description: "Dr. Ritu Goel, Founder of MindClaire, shares insights on using nebivolol—a beta blocker—for off-label anxiety treatment, featured on SingleCare.",
        image: "/pressrelease/pr-singlecare.webp",
    },
    {
        id: 4,
        title: "Anhedonia drains joy and motivation. With compassionate care, Dr. Ritu and MindClaire help you rediscover connection and meaning.",
        description: "Anhedonia causes emotional numbness and loss of joy. At MindClaire, Dr. Ritu offers thoughtful, integrative care to help you heal and feel again.",
        image: "/pressrelease/pr_12.webp",
    },
    {
        id: 5,
        title: '"Eat Smart, Feel Better: Balanced Eating for Body & Mind" Dr. Ritu Goel | MindClaire',
        description: "Dr. Ritu Goel from MindClaire shares why balanced eating matters for both body and mind.",
        image: "/pressrelease/pr_11.webp",
    },
    {
        id: 6,
        title: "Building Mental Resilience: Growth Mindset & Confidence with Dr. Ritu Goel | Forbes Business Council",
        description: "Dr. Ritu Goel of MindClaire shares expert strategies on cultivating growth mindset and mental resilience at the Forbes Business Council Roundtable, empowering leaders to prioritize well-being.",
        image: "/pressrelease/pr_10.webp",
    },
    {
        id: 7,
        title: "Dr. Ritu Goel on Teen Mental Health",
        description: "Dr. Ritu Goel of MindClaire addresses the mental health impacts of teens’ increasing social media use, as highlighted by The Epoch Times.",
        image: "/pressrelease/pr_09.webp",
    },
    {
        id: 8,
        title: "Dr. Ritu Goel of MindClaire featured in Forbes: Insights on empowering introverts in the workplace.",
        description: "Dr. Ritu Goel of MindClaire shares insights with Forbes Business Council on fostering supportive environments that help introverted employees flourish.",
        image: "/pressrelease/pr_08.webp",
    },
    {
        id: 9,
        title: "Dr. Ritu Goel Honored in Marquis Who’s Who – Ritu Goel_ Feature",
        description: "MindClaire celebrates Dr. Ritu Goel’s recognition in Marquis Who’s Who for her outstanding contributions to mental health care and her role as our Executive Advisor for Wellness Initiatives.",
        image: "/pressrelease/edu-thumb.webp",
    },
    {
        id: 10,
        title: "Dr.Ritu Goel- TieSoCal Charter Member",
        description: "Dr. Ritu Goel -child and adolescent psychiatrist with 20+ years of global experience pioneers AI-Driven Mental Wellness Startup.",
        image: "/pressrelease/pr_01.webp",
    },
    {
        id: 11,
        title: "Honoring Dr. Ritu Goel for Expertise in Mental Health Care",
        description: "Dr. Ritu Goel's selection for inclusion in Marquis Who's Who, recognizing her significant contributions and leadership in the field of mental health care.",
        image: "/pressrelease/pr_02.webp",
    },
    {
        id: 12,
        title: "Dr Ritu Goel- A Journey of Courage",
        description: "Dr. Ritu Goel discusses the integration of AI and mindfulness techniques in mental health care to enhance patient outcomes and overall well-being.",
        image: "/pressrelease/pr_03.webp",
    },
    {
        id: 13,
        title: "Dr. Ritu Goel- Why Managers need to be self aware in todays corporate world",
        description: "Dr. Ritu Goel discusses integrating emotional intelligence, resilience, and a growth mindset into executive strategy",
        image: "/pressrelease/pr_04.webp",
    },
    {
        id: 14,
        title: "Dr. Ritu Goel - 20 Ways Young Entrepreneurs Can Prove Their Value",
        description: "Dr.Ritu Goel shares her insights and valuable tips for young entrepreneurs on proving their worth",
        image: "/pressrelease/pr_05.webp",
    },
    {
        id: 15,
        title: "Pioneering Mental Health Advancements in our Digital Age",
        description: "Dr. Ritu Goel explores groundbreaking advancements in mental health in the digital age in her Forbes Business Council article.",
        image: "/pressrelease/pr_06.webp",
    },
];

const PressMedia = () => {
    return (
        <>
            <BannerSection image={'/assets/edu_banner.webp'} title={'Press & Media'} fontSize={'text-[50px]'}
                className={'bg-[40%]'}
            />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-12">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 text-left">
                        {press_media?.map((blog, index) => (
                            <div key={index}>
                                <div className="rounded-[30px] overflow-hidden">
                                    <img src={blog?.image} alt={blog?.title} />
                                </div>

                                <h2 className="font-semibold text-[#3c0a6d] text-[21px] pt-[30px] inter_medium
                                    line-clamp-3"
                                >
                                    {blog?.title}
                                </h2>

                                <p className="text-[17.92px] text-black inter mt-2.5">
                                    {blog?.description}
                                </p>

                                <Link to='#' target="_blank" className='mt-6 text-[#3c0a6d] flex gap-1 
                                    inter_semibold hover:text-[#0a58ca] items-center inter'
                                >
                                    <p className='sm:text-lg text-sm font-normal'>Read More</p>
                                    <img src={'/icons/cta_arrow.svg'} alt='cta_arrow' className="mt-0.5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PressMedia