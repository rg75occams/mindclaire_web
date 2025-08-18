import { HashLink } from "react-router-hash-link";

const Profile = () => {
    return (
        <div className="lg:px-[6rem] sm:px-7 px-5 pt-14">
            <div className='container mx-auto'>
                <div className="grid grid-cols-12 gap-7 lg:gap-10 items-center">
                    <div className="col-span-12 lg:col-span-5" data-aos="zoom-in">
                        <img src="/assets/ritu_12.webp" alt="Dr. Ritu Goel"
                            className="rounded-[30px]"
                        />
                    </div>

                    <div className="col-span-12 lg:col-span-7 md:text-left h-full" data-aos="fade-right">
                        <div className="flex justify-evenly flex-col h-full lg:pr-12 pr-0" data-aos="fade-right">
                            <h6 className="text-black text-lg inter">Hi, I'm</h6>
                            <h1 className="text-4xl md:text-[41px] text-[#3C0A6D] mt-2 ringift">
                                Ritu Goel <span className="text-[#984AD7] text-xl inter">MD.</span>
                            </h1>

                            <p className="text-lg lg:mb-4 text-black mt-3 inter">
                                Welcome to my practice, MindClaire. I’m an integrative psychiatrist who believes in nurturing
                                mental wellness by harmoniously integrating the wisdom of traditional psychiatry with the
                                personalized touch of holistic healing methods
                            </p>

                            <p className="text-lg lg:mb-4 text-black lg:mt-2 mt-4 inter">
                                My approach combines traditional psychiatric treatments with holistic methods to help you feel
                                more confident, perform better at school or work, and enhance your relationships. Whether it's
                                improving focus, managing emotions, or boosting social skills, my personalized treatment plans
                                are tailored to your unique needs. They include education, nutrition, exercise, therapy,
                                medications, supplementation, meditation,spiritual guidance through yoga and more.
                            </p>

                            <HashLink smooth to="/about#ritu-bio">
                                <button className="bg-[#9D4EDD] hover:bg-[#3c0a6d] cursor-pointer text-white 
                                    pt-[15px] pb-[15px] rounded-full text-base px-7 w-max lg:mt-1 mt-5 inter"
                                >
                                    Read More
                                </button>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile