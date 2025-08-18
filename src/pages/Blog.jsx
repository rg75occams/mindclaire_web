import { useState } from "react";
import BannerSection from "../components/BannerSection"
import { Link } from "react-router-dom";

const blogs = [
    {
        id: 1,
        title: "Unseen Battles: Understanding PTSD and the Path to Healing",
        description: "June marks National PTSD Awareness Month—a crucial reminder of the invisible struggles faced by millions worldwide. Post-Traumatic Stress Disorder (PTSD) is real, complex, and deeply impactful, affecting every aspect of an individual's life. Understanding its dynamics is the first step toward healing and support.",
        image: "/assets/understanding-ptsd-thumbnail.webp",
        category: "ADHD",
    },
    {
        id: 2,
        title: "Thriving Without Burning Out: 11 Habits for a More Aligned Life",
        description: "In a world that glorifies hustle, it’s easy to believe that success means working harder, longer, and louder. But as a psychiatrist, entrepreneur, and coach to high-performing professionals, I’ve seen a different truth: real success comes from alignment. It’s about crafting habits that protect your energy, sharpen your focus, and let you thrive without the burnout. These 11 habits aren’t just about doing more—they’re about being more, in a way that feels purposeful and sustainable.",
        image: "/assets/thriving_blog.webp",
        category: "Autism",
    },
    {
        id: 3,
        title: "The Silent Burnout: Why High-Achievers Are Hiding Their Mental Health Struggles",
        description: "She’s the top student, juggling school and side projects. He’s the executive who never misses a deadline. They’re the parents doing it all and still showing up smiling. On the outside, high achievers seem unstoppable. But behind the scenes? Many are running on fumes. Welcome to the world of silent burnout—where success masks stress, and ambition hides anxiety. Unlike traditional burnout, which often ends in collapse, silent burnout is sneakier. It’s a quiet, chronic erosion of energy and mental wellness—harder to spot, easier to dismiss. But here's the thing: ignoring it doesn’t make it go away. Let’s unpack what it looks like, why it’s so common, and how to regain control.",
        image: "/assets/blog-6-profile.webp",
        category: "Nutrition",
    },
    {
        id: 4,
        title: "A Journey Through Emotions - A Child Psychiatrist's Perspective",
        description: "Summer break is here, and it's the perfect time for kids to unwind, have fun, and explore new experiences. While outdoor activities and vacations are a blast, there's also plenty of room for some quality indoor entertainment. If you're looking for a meaningful way to spend time with your kids that combines fun with valuable lessons, Disney-Pixar's Inside Out 2 is a must-watch.",
        image: "/assets/a-journey-through-emotions-thumb.webp",
        category: "ADHD",
    },
    {
        id: 5,
        title: "Case Study: Comprehensive Integrative Treatment Approach in a child with autism.",
        description: "Background: XY, a nine-year-old boy diagnosed with ASD, exhibited severe anxiety, hyperactivity, and sleep disturbances. His parents were seeking a holistic approach to manage his symptoms as they felt traditional methods alone were not sufficient.",
        image: "/assets/mom-dad-son-their-dog-play-with-plasticine-paint-home.webp",
        category: "ADHD",
    },
    {
        id: 6,
        title: "Integrative Psychiatry Practices for Children and Youth with Autism Spectrum Disorder",
        description: "Navigating the world of Autism Spectrum Disorder (ASD) can be challenging for parents and caregivers. Finding the right treatments for your child is crucial. I’m Dr. Ritu Goel, an integrative child and adolescent psychiatrist, dedicated to offering holistic and effective care for children and teens with ASD. This guide will walk you through various integrative psychiatry practices that can complement traditional treatments and help your child thrive.",
        image: "/assets/midsection-woman-holding-paper-white.webp",
        category: "ADHD",
    },
    {
        id: 7,
        title: "ADHD in Children, Adolescents, and Young Adults: Integrative Psychiatry Treatments",
        description: "If you're concerned that your child or teen may have Attention-Deficit/Hyperactivity Disorder (ADHD), you're not alone. Many parents have questions and seek the best care for their young ones. I'm Dr. Ritu Goel, an integrative child and adolescent psychiatrist, and I'm here to guide you through understanding ADHD and the comprehensive integrative treatment options available.",
        image: "/assets/authentic-scene-young-person-undergoing-psychological-therapy.webp",
        category: "ADHD",
    },
    {
        id: 8,
        title: "Comprehensive Guide to Integrative Child Psychiatry: Bridging Traditional and Holistic Approaches",
        description: "Are you on the lookout for a compassionate, holistic approach to your or your child's or teen’s mental health challenges? Well, you've hit the jackpot! Integrative psychiatry is like the superhero of mental health care for everyone, combining the best of both worlds – traditional medical treatments and holistic healing methods. It's all about personalized care that addresses not just the symptoms but the root cause of mental health issues. Before we dive into the nitty-gritty, how does this sound for a start? Ready to explore this fascinating world together?",
        image: "/assets/blog-thumb.webp",
        category: "ADHD",
    },
];

const Blog = () => {
    const tabs = ["All", "ADHD", "Autism", "Nutrition"];
    const [activeTab, setActiveTab] = useState("All");
    const blogsData = activeTab === "All" ? blogs : blogs.filter(blog => blog?.category === activeTab);

    return (
        <>
            <BannerSection image={'/assets/blog_banner.webp'} title={'Blog'} fontSize={'text-[50px]'}
                className={'bg-[40%]'}
            />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-12">
                <div className='container mx-auto'>
                    <div className="flex gap-6 justify-end mb-8 text-lg">
                        {tabs.map((tab, index) => (
                            <button key={index} onClick={() => setActiveTab(tab)} className={`group relative 
                                text-base whitespace-nowrap transition-all duration-300 ease cursor-pointer 
                                ${activeTab === tab ? "text-theme-2 font-bold" : ""}`}
                            >
                                {tab}

                                <span className={`absolute -bottom-[5px] left-0 bg-[#984AD7] transition-all rounded-full
                                    duration-500 h-1 ease-in-out ${activeTab === tab ? "w-1/2" : "w-0 group-hover:w-1/2"}`}
                                />
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-left">
                        {blogsData?.map((blog, index) => (
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

export default Blog