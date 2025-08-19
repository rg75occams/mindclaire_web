import { Link } from 'react-router-dom';
import BannerSection from '../components/BannerSection';
import { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashLink } from 'react-router-hash-link';
import { publications, slides } from '../components/staticData';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const credentials = [
        "MD, Doctor Bhimrao Ambedkar University, India",
        "Psychiatry Training, NHS, UK",
        "Psychiatry Residency and Fellowship, University at Buffalo, USA",
        "Board Certification in General Psychiatry",
        "Board Certification in Child & Adolescent Psychiatry",
        "Licensed Medical Practitioner in California",
        "Executive Program in Artificial Intelligence, MIT",
        "Certificate in Integrative Psychiatry, Dream Psychiatry Academy"
    ];

    const settings = {
        dots: false, infinite: true, speed: 500, slidesToScroll: 1,
        autoplay: true, autoplaySpeed: 3000, slidesToShow: 1, arrows: false,
        beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    };

    return (
        <>
            <Helmet>
                <title>About MindClaire | Meet Dr. Ritu Goel - Integrative Psychiatrist Long Beach</title>
                <meta name="description" content=" Mindclaire, Ritu Goel MD. provides holistic healing, traditional psychiatry & AI-driven diagnostics that fosters growth, healing, relief from symptoms & overall wellness" />
                <meta name="keywords" content="Dr. Ritu Goel, integrative psychiatry expert, child psychiatry, adolescent psychiatry, adult psychiatry, personalized treatment, mental health care, holistic psychiatry, Long Beach, California. "/>
            </Helmet>

            <BannerSection image={'/assets/about_banner.webp'} title={'About'} />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-14">
                <div className='container mx-auto'>
                    <div id='ritu-bio' className="grid grid-cols-12 gap-7 lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-5" data-aos="zoom-in">
                            <img src="/assets/ritu.jpg" alt="Dr. Ritu Goel"
                                className="rounded-[30px] w-[409px] sm:h-[500px] h-auto"
                            />
                        </div>

                        <div className="col-span-12 lg:col-span-7 md:text-left h-full" data-aos="fade-right">
                            <div className="flex justify-evenly flex-col h-full" data-aos="fade-right">
                                <h6 className="text-black text-[1.18rem] inter">Hi, I'm</h6>
                                <h1 className="text-4xl md:text-[41px] text-[#3C0A6D] mt-2 ringift">
                                    Ritu Goel <span className="text-[#984AD7] text-xl inter">MD.</span>
                                </h1>

                                <p className="text-[1.18rem] lg:mb-4 text-black mt-3 inter">
                                    Welcome to my practice, MindClaire. I’m an integrative psychiatrist who believes in nurturing
                                    mental wellness by harmoniously integrating the wisdom of traditional psychiatry with the
                                    personalized touch of holistic healing methods.
                                </p>

                                <p className="text-[1.18rem] lg:mb-4 text-black lg:mt-2 mt-4 inter">
                                    My approach combines traditional psychiatric treatments with holistic methods to help you
                                    feel more confident, perform better at school or work, and enhance your relationships.
                                    Whether it's improving focus, managing emotions, or boosting social skills, my personalized
                                    treatment plans are tailored to your unique needs. They include education, nutrition,
                                    exercise, therapy, medications, supplementation, meditation, spiritual guidance through
                                    yoga and more.
                                </p>

                                <p className="text-[1.18rem] lg:mb-4 text-black lg:mt-2 mt-4 inter">
                                    For children, adolescents and families, I work closely with parents to support your
                                    child's mental health, helping you to foster a nurturing environment at home. I understand
                                    the struggles of navigating these conditions. I'm here to make you feel equipped, and
                                    empowered to improve your quality of life.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 pt-5">
                        <div className="flex justify-evenly flex-col h-full" data-aos="fade-right">
                            <p className="text-[1.18rem] lg:mb-4 text-black lg:mt-2 inter">
                                My journey into mental health began with the desire to understand the mind's intricacies and
                                to offer relief not just from symptoms but to achieve overall well-being. With over two decades
                                of experience across the globe, my treatment philosophy has been shaped by the myriad of
                                stories that spoke of a need for a more compassionate, and comprehensive approach to
                                psychiatric care.
                            </p>

                            <p className="text-[1.18rem] lg:mb-4 text-black lg:mt-2 mt-4 inter">
                                At MindClaire, I am committed to fostering an environment that supports growth, understanding,
                                and lasting change.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 pt-14">
                        <div className="col-span-12 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
                            <div className="w-full lg:w-6/12 md:text-left flex justify-evenly flex-col h-full text-center
                                order-2 lg:order-none" data-aos="fade-right"
                            >
                                <h2 className="lg:text-[2rem] text-3xl inter_semibold text-black">
                                    My Path to <span className="text-[#984AD7]">Psychiatry</span>
                                </h2>

                                <p className="text-lg lg:mb-4 text-black mt-3 inter">
                                    My educational journey began in India, where I completed medical school and MD degree,
                                    followed by advanced psychiatric training at the NHS in the UK, and further specialization;
                                    residency and child and adolescent psychiatry fellowship in the United States at the
                                    University of Buffalo. Each step in my journey has not only provided me with a robust
                                    understanding of mental health but also an appreciation for the diverse ways in which
                                    it impacts individuals and families. My recent training includes an executive program
                                    in artificial intelligence from MIT and integrative psychiatry at Dream Practice Academy,
                                    equipping me with cutting-edge tools to complement traditional practices.
                                </p>

                                <p className="text-lg lg:mb-4 text-black lg:mt-2 mt-5 inter">
                                    Throughout over two decades, from roles as a Senior House Officer to leading as a Child
                                    and Adolescent Psychiatrist at esteemed institutions like Johns Hopkins and SCPMG Kaiser
                                    Mental Health, I have honed my approach to focus on developmental disabilities,
                                    and co-occurring psychiatric conditions in young populations. My practice thrives on a
                                    blend of empathy, evidence, and innovation, reflecting my commitment not only to care
                                    but also to educate and mentor the next generation of mental health professionals.
                                </p>
                            </div>

                            <div className="w-full lg:w-5/12 order-1 lg:order-none" data-aos="zoom-in">
                                <img src="/assets/about_right.jpg" alt="About Section"
                                    className="rounded-[30px] w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-14 relative">
                        <h2 className="lg:text-[2rem] text-3xl inter_semibold text-black mb-8 text-center">
                            More Than a <span className="text-[#984AD7]">Psychiatrist</span>
                        </h2>

                        <Slider ref={sliderRef} {...settings}>
                            {slides?.map((slide, index) => (
                                <img key={index} src={slide?.image} alt={`Slide_${index + 1}`}
                                    className="w-auto rounded-[30px]"
                                />
                            ))}
                        </Slider>

                        <div className="absolute bottom-0 w-full flex justify-center rounded-b-[30px]">
                            <div className="bg-black/40 w-full flex justify-center gap-10 items-center 
                                pt-6 pb-3.5 rounded-b-[30px]"
                            >
                                <button onClick={() => sliderRef.current?.slickPrev()}
                                    className="text-white text-3xl cursor-pointer"
                                >
                                    <IoIosArrowBack />
                                </button>

                                <div className="flex gap-4">
                                    {slides.map((_, index) => (
                                        <button key={index} onClick={() => sliderRef.current?.slickGoTo(index)} className={`
                                            transition-all duration-300 ease cursor-pointer ${index === currentSlide ? `w-[25px] 
                                            h-2.5 bg-white rounded-[30px]` : `w-2.5 h-2.5 bg-white rounded-full`}`}
                                        />
                                    ))}
                                </div>

                                <button onClick={() => sliderRef.current?.slickNext()}
                                    className="text-white text-3xl cursor-pointer"
                                >
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 pt-10" data-aos="fade-right">
                        <p className="text-[1.18rem] text-black inter">
                            Beyond the clinic, I am a storyteller, an adventurer, and a lifelong learner. Motherhood has
                            been my most rewarding role, guiding two energetic boys through the wonders of soccer,
                            baseball, tennis, golf, swimming, chess and more. Our family adventures, from ziplining,
                            horseback riding to exploring local trails, are cherished chapters in my story. I am also a
                            devoted caretaker to our three dogs, who teach me daily about loyalty and unconditional love.
                            My personal journey with mental health began in my teenage years, observing the silent
                            struggles of loved ones with learning disabilities. These early experiences profoundly shaped
                            my clinical focus and my holistic view of psychiatric care, emphasizing the importance of
                            understanding each individual's unique experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-12 pt-14">
                        <div className="col-span-12 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 items-center">
                            <div className="w-full lg:w-5/12" data-aos="zoom-in">
                                <img src="/assets/about_left.jpg" alt="Dr. Ritu Goel"
                                    className="rounded-[30px] w-full h-auto"
                                />
                            </div>

                            <div className="w-full lg:w-6/12 md:text-left text-center" data-aos="fade-right">
                                <h2 className="lg:text-[2rem] text-3xl inter_semibold text-black mb-3">
                                    A Unique Approach to <span className="text-[#984AD7]">Healing</span>
                                </h2>

                                <p className="text-[1.18rem] lg:mb-4 text-black mt-3 inter">
                                    At MindClaire, I see beyond the symptoms. My approach integrates traditional
                                    psychiatric care with nutraceuticals, nutrition, therapy, and innovative treatments
                                    like AI-driven diagnostics and complementary therapies, including Ayurveda and
                                    meditation. I believe in empowering our patients and their families to understand and
                                    manage their conditions effectively, providing a supportive environment that fosters
                                    growth and healing.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 pt-14">
                        <div className="col-span-12 flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 items-center">
                            <div className="w-full lg:w-6/12 md:text-left text-center order-2 lg:order-none"
                                data-aos="fade-right"
                            >
                                <h2 className="lg:text-[2rem] text-3xl inter_semibold text-black mb-3">
                                    My <span className="text-[#984AD7]">Belief</span>
                                </h2>

                                <p className="text-[1.18rem] lg:mb-6 text-black mt-3 inter">
                                    I am driven by the conviction that mental wellness should be accessible, holistic, and
                                    deeply respectful of the individual's journey. This belief is at the core of my
                                    practice, where I strive to blend the best of medical science with a deep respect for
                                    the psychological, social, and spiritual dimensions of health
                                </p>

                                <p className="text-[1.18rem] text-black mt-5 inter">
                                    At MindClaire, I am committed to your journey of discovery and healing. Whether you're
                                    seeking relief from symptoms or striving for overall wellness, my approach is designed
                                    to embrace and enhance your unique life story.
                                </p>
                            </div>

                            <div className="w-full lg:w-5/12 order-1 lg:order-none" data-aos="zoom-in">
                                <img src="/assets/butterfly.jpg" alt="Dr. Ritu Goel"
                                    className="rounded-[30px] w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-14">
                        <div style={{ backgroundImage: `url(/assets/purp-rec.jpg)` }} className='md:pt-[100px]
                            pb-[129px] px-[47px] text-center rounded-4xl pt-[135px] bg-center bg-cover bg-no-repeat'
                        >
                            <h2 className="text-4xl md:text-[41px] mb-3 text-white ringift">
                                Think we would be a good fit?
                            </h2>

                            <h2 className="lg:text-lg text-base text-white mb-3 inter_medium">
                                Explore more about my practice and how we can work together for your mental well-being
                            </h2>

                            <HashLink smooth to='/services#serv-appont'>
                                <button className='py-3.5 px-6 inter_medium rounded-[30px] text-black bg-white 
                                    hover:!text-[#0a58ca] cursor-pointer'
                                >
                                    Learn More About My Approach
                                </button>
                            </HashLink>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-14">
                        <h2 className="lg:text-[2rem] text-3xl inter_semibold text-black mb-3">
                            My <span className="text-[#984AD7]">Credentials</span>
                        </h2>

                        <ul className="mt-2 list-disc list-outside pl-6 text-black text-base">
                            {credentials?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-14">
                        <h2 className="lg:text-[2rem] text-3xl inter_semibold text-black mb-3">
                            My <span className="text-[#984AD7]">Publications</span>
                        </h2>

                        <ul className="max-w-4xl mt-2 list-disc list-outside pl-6 pr-5 text-black text-base">
                            {publications.map((data, index) => (
                                <li key={index}>
                                    <Link to={data?.url} target="_blank" className="underline text-black">
                                        {data?.title}
                                    </Link>

                                    <span className="text-black"> | {" "}{data?.authors}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs