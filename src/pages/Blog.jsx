import { useState } from "react";
import BannerSection from "../components/BannerSection"
import { Link } from "react-router-dom";
import { blogs } from "../components/staticData";
import { Helmet } from "react-helmet-async";

const Blog = () => {
    const tabs = ["All", "ADHD", "Autism", "Nutrition"];
    const [activeTab, setActiveTab] = useState("All");
    const blogsData = activeTab === "All" ? blogs : blogs.filter(blog => blog?.category === activeTab);

    const slugify = (text) => {
        return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    };

    return (
        <>
            <Helmet>
                <title>Blogs on Mental health & Integrated treatment</title>
                <meta name="description" content=" Insights and guidance on integrative psychiatry, ADHD, autism, nutrition, and emotional wellness. MindClaire’s blog offers practical information to support mental health across all ages." />
                <meta name="keywords" content="" />
            </Helmet>

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

                                <Link to={`/blog/${slugify(blog?.title)}`} target="_blank" className='mt-6 text-[#3c0a6d] 
                                    flex inter_semibold hover:text-[#0a58ca] items-center inter gap-1'
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