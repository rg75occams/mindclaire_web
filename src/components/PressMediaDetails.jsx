import { useParams } from 'react-router-dom';
import { press_media } from './staticData';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PressMediaDetails = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        comment: "", website: "",
        firstName: "", lastName: "", email: "",
    });

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const commentRef = useRef();
    const websiteRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const smoothScrollTo = (targetY, duration = 800) => {
        const startY = window.scrollY;
        const distance = targetY - startY;
        let startTime = null;

        const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, startY + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.comment.trim()) {
            smoothScrollTo(commentRef.current.getBoundingClientRect().top + window.scrollY - 100);
            commentRef.current.focus();
            return;
        }
        if (!formData.firstName.trim()) {
            smoothScrollTo(firstNameRef.current.getBoundingClientRect().top + window.scrollY - 100);
            firstNameRef.current.focus();
            return;
        }
        if (!formData.lastName.trim()) {
            smoothScrollTo(lastNameRef.current.getBoundingClientRect().top + window.scrollY - 100);
            lastNameRef.current.focus();
            return;
        }
        if (!formData.email.trim()) {
            smoothScrollTo(emailRef.current.getBoundingClientRect().top + window.scrollY - 100);
            emailRef.current.focus();
            return;
        }
        if (!formData.website.trim()) {
            smoothScrollTo(websiteRef.current.getBoundingClientRect().top + window.scrollY - 100);
            websiteRef.current.focus();
            return;
        }

        const postData = { ...formData };
        console.log(postData);
    };

    const singleMedia = press_media.find((media) => media?.id == id)

    return (
        <>
            <Helmet>
                <title>MindClaire | Dr. Ritu Goel of MindClaire featured in Forbes: Insights on empowering introverts in the workplace.</title>
                <meta name="description" content="Learn effective strategies to empower introverts in the workplace, fostering inclusivity and leveraging diverse strengths" />
                <meta name="keywords" content="" />
            </Helmet>

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-12">
                <div className='container mx-auto mt-[70px]'>
                    <div className="grid grid-cols-12 gap-7 lg:gap-10">
                        <div className="col-span-12 lg:col-span-7" data-aos="zoom-in">
                            <h1 className="text-[26px] text-[#3c0a6d] mb-2 inter_medium">{singleMedia?.title}</h1>
                            <p className="text-[1.18rem] lg:mb-4 text-black mt-3 inter">
                                by Dr. Ritu Goel | July 23, 2025 | Press Releases | 0 comments
                            </p>

                            <img src={singleMedia?.image} alt={singleMedia?.title}
                                className="rounded-[30px] w-auto h-auto mb-10 mt-3"
                            />

                            <p className="text-[17.92px] text-black inter mt-2.5">{singleMedia?.description}</p>

                            <h2 className="lg:text-[2rem] text-3xl inter_semibold text-center text-[#3C0A6D] mt-20">
                                Submit a <span className="text-[#984AD7]">Comment</span>
                            </h2>

                            <p className="text-center mb-6 text-black inter">
                                Your email address will not be published. Required fields are marked *
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4 inter">
                                <textarea name="comment" value={formData.comment} onChange={handleChange}
                                    ref={commentRef} placeholder="Comment*" className="w-full block md:px-[25px] px-4 
                                md:pt-5 pt-3 pb-2.5 sm:text-base text-sm font-normal h-28 text-black bg-white 
                                border border-[#ced4da] rounded-[30px] focus:border-[#86b7fe] transition 
                                duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#0d6efd40]"
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input type="text" name="firstName" placeholder="First name*"
                                        value={formData.firstName} onChange={handleChange} ref={firstNameRef}
                                        className="w-full block px-[25px] py-3.5 text-base font-normal leading-0.5 transition
                                    text-black bg-white border border-[#ced4da] focus:border-[#86b7fe] focus:ring-4
                                    duration-150 ease-in-out focus:outline-none focus:ring-[#0d6efd40] rounded-full"
                                    />

                                    <input type="text" name="lastName" placeholder="Last name*"
                                        value={formData.lastName} onChange={handleChange} ref={lastNameRef}
                                        className="w-full block px-[25px] py-3.5 text-base font-normal leading-0.5 transition
                                    text-black bg-white border border-[#ced4da] focus:border-[#86b7fe] focus:ring-4
                                    duration-150 ease-in-out focus:outline-none focus:ring-[#0d6efd40] rounded-full"
                                    />

                                    <input type="email" name="email" placeholder="Email*"
                                        value={formData.email} onChange={handleChange} ref={emailRef}
                                        className="w-full block px-[25px] py-3.5 text-base font-normal leading-0.5 transition
                                    text-black bg-white border border-[#ced4da] focus:border-[#86b7fe] focus:ring-4
                                    duration-150 ease-in-out focus:outline-none focus:ring-[#0d6efd40] rounded-full"
                                    />

                                    <input type="text" name="website" placeholder="Website*" value={formData.website}
                                        ref={websiteRef} onChange={handleChange} className="w-full block px-[25px] py-3.5 
                                    text-base font-normal leading-0.5 text-black bg-white border border-[#ced4da] 
                                    rounded-full focus:border-[#86b7fe] transition duration-150 ease-in-out 
                                    focus:outline-none focus:ring-4 focus:ring-[#0d6efd40]"
                                    />
                                </div>

                                <button type="submit" className="bg-[#9D4EDD] hover:bg-[#3c0a6d] text-white 
                                py-[15px] rounded-full text-base px-7 cursor-pointer"
                                >
                                    Send
                                </button>
                            </form>
                        </div>

                        <div className="col-span-12 lg:col-span-5 md:text-left" data-aos="fade-right">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-[26px] text-[#3c0a6d] mb-4 inter_medium">Recent Posts</h1>
                                {press_media?.filter((media) => media?.title !== id)?.map((media, index) => (
                                    <Link key={index} to={`/press_media/${media?.id}`} className='gap-2
                                    flex inter_medium hover:text-[#0a58ca] items-center inter text-[#3c0a6d]'
                                    >
                                        <p className='sm:text-lg text-sm font-normal'>{media?.title}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PressMediaDetails