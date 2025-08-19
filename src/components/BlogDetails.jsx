import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { blogs } from "./staticData";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
    const { name } = useParams();
    const slugify = (text) => {
        return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    };
    const blog = blogs.find((blog) => slugify(blog?.title) === name)

    return (
        <>
            <Helmet>
                <title>MindClaire | {blog?.title}</title>
                <meta name="description" content=" Discover MindClaire's integrative approach to psychiatry, combining traditional and alternative therapies for comprehensive mental health treatment." />
                <meta name="keywords" content="" />
            </Helmet>

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-12">
                <div className='container mx-auto mt-[70px]'>
                    <div className="grid grid-cols-12 gap-7 lg:gap-10">
                        <div className="col-span-12 lg:col-span-7" data-aos="zoom-in">
                            <h1 className="text-[26px] text-[#3c0a6d] mb-2 inter_medium">{blog?.title}</h1>
                            <p className="text-[1.18rem] lg:mb-4 text-black mt-3 inter">
                                by Dr. Ritu Goel, MD | June 24, 2025 | Blogs | 0 comments
                            </p>

                            <img src={blog?.image} alt={blog?.title}
                                className="rounded-[30px] w-auto h-auto mb-10"
                            />

                            <h3 className="text-[27px] text-[#3c0a6d] mb-2 inter_medium">Introduction</h3>
                            <p className="text-[17.92px] text-black inter mt-2.5">
                                {blog?.description}
                            </p>
                        </div>

                        <div className="col-span-12 lg:col-span-5 md:text-left" data-aos="fade-right">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-[26px] text-[#3c0a6d] mb-4 inter_medium">Recent Posts</h1>
                                {blogs?.filter((blog) => slugify(blog?.title) !== name)?.map((blog, index) => (
                                    <Link key={index} to={`/blog/${slugify(blog.title)}`} className='text-[#3c0a6d] 
                                    flex inter_medium hover:text-[#0a58ca] items-center inter gap-2'
                                    >
                                        <p className='sm:text-lg text-sm font-normal'>{blog?.title}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails