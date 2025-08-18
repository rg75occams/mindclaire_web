import { Link } from 'react-router-dom'
import BannerSection from '../components/BannerSection'

const events = [
    {
        id: 1,
        title: "Meet & Greet with President Of Estonia",
        description: "Dr. Ritu Goel, Founder of MindClaire, visited the Office of the President of Estonia—celebrating leadership, culture, and global collaboration.",
        image: "/events/event_11.webp",
    },
    {
        id: 2,
        title: "Tie Global Retreat at Estonia - Dr Ritu Goel",
        description: "Dr. Ritu Goel, Founder of MindClaire, joins global leaders at the TiE Global Retreat in Estonia—sharing insights on vision, legacy, and mental wellness, and meeting the President of Estonia.",
        image: "/events/event_10.webp",
    },
    {
        id: 3,
        title: "MindClaire Champions Hope & Courage at CHOC Gala 2025",
        description: "MindClaire proudly supported the 2025 CHOC Gala, championing pediatric healthcare. The inspiring event celebrated stories of hope and featured captivating performances by Blake Shelton and MONTAGE!",
        image: "/events/event_09.webp",
    },
    {
        id: 4,
        title: "MindClaire Supports SKY Campus: Breathe, Belong, Become",
        description: "MindClaire proudly supports SKY Campus Happiness in its mission to enhance student mental wellness through breathwork, meditation, and resilience-building programs.",
        image: "/events/sky-support.webp",
    },
    {
        id: 5,
        title: "MindClaire Fostering Entrepreneurship at TieSoCal held in Irvine, California.",
        description: "Mindclaire, represented by Dr. Ritu Goel, participated in the TiE SoCal event in Irvine, California, on July 29th and 30th, 2022. The event focused on fostering entrepreneurship and provided a platform for networking and mentorship.",
        image: "/events/event_01.webp",
    },
    {
        id: 6,
        title: "MindClaire as the Proud Sponsor for Saahas Cause Gala 2024",
        description: "Mindclaire proudly sponsored the Saahas for Cause Gala held in California on November 10th, 2024. The event celebrated community support and raised awareness for mental health initiatives",
        image: "/events/event_02.webp",
    },
    {
        id: 7,
        title: "EmpowerHer: TiE Women Global Mentorship & Pitch Competition 2024.",
        description: 'Mindclaire is proud to support the "EmpowerHer: TiE Women Global Mentorship & Pitch Competition 2024," a prestigious event dedicated to mentoring and empowering women founders.',
        image: "/events/event_03.webp",
    },
    {
        id: 8,
        title: "Integrated Health Symposium: Mindclaire with Advanced Integrated Health.",
        description: "Dr. Ritu Goel, Founder and CEO of Mindclaire, was a distinguished speaker at the Integrated Health Symposium 2024. She shared her expertise in mental health and wellness, emphasizing innovative approaches to integrative psychiatry.",
        image: "/events/event_04.webp",
    },
    {
        id: 9,
        title: "Behavioral Health Technology 2024 at Phoenix, Arizona.",
        description: "Dr. Ritu Goel, Founder and CEO of Mindclaire, was a featured speaker at the Behavioral Health Technology 2024 conference held from November 5th to 7th, 2024, in Phoenix, Arizona. She highlighted Mindclaire's innovative use of AI in mental health care, emphasizing the importance of technology in improving patient outcomes.",
        image: "/events/event_05.webp",
    },
    {
        id: 10,
        title: "TieConWest 2024 Conference and MindClaire’s participation.",
        description: "Mindclaire, represented by Dr. Ritu Goel, participated in TieCon West 2024 on October 25th. Dr. Goel contributed significantly by sharing insights on the integration of AI in mental health care, highlighting Mindclaire's innovative approaches.",
        image: "/events/event_06.webp",
    },
    {
        id: 11,
        title: "Forbes Business Council - Future Focused Leadership: Integrating Emotional, Intelligence, Resilience and a Growth Mindset in Executive Strategy Hosted by Mental Health Group Member Leader, Ronke Komolafe with Dr. Ritu Goel. ",
        description: "Dr. Ritu Goel, as a part of Forbes Business Council, shares her insights on future-focused leadership, emphasizing adaptability, innovation, and the role of technology in shaping modern businesses.",
        image: "/events/event_07.webp",
    },
];

const Events = () => {
    return (
        <>
            <BannerSection image={'/assets/edu_banner.webp'} title={'Events'} fontSize={'text-[50px]'}
                className={'bg-[40%]'}
            />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-12">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 text-left">
                        {events?.map((blog, index) => (
                            <div key={index}>
                                <div className="rounded-[30px] overflow-hidden">
                                    <img src={blog?.image} alt={blog?.title} />
                                </div>

                                <h2 className="font-semibold text-[#3c0a6d] text-[21px] pt-[30px] inter_medium
                                    line-clamp-3"
                                >
                                    {blog?.title}
                                </h2>

                                <p className="text-[17.92px] text-black inter mt-2.5 line-clamp-5">
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

export default Events