import { HashLink } from "react-router-hash-link";
import { focusAreas } from "../components/staticData";

const AreasOfFocus = () => {
    return (
        <div className="lg:px-[6rem] sm:px-7 px-5 pt-20">
            <div className='container mx-auto'>
                <h2 className="lg:text-[2rem] text-3xl inter_semibold text-center text-[#3C0A6D] mb-5">
                    My Areas of <span className="text-[#984AD7]">Focus</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 text-left">
                    {focusAreas.map((area, index) => (
                        <div key={index}>
                            <div className="rounded-[30px] overflow-hidden">
                                <img src={area.image} alt={area.title}
                                    className="transform transition duration-300 ease-in-out hover:scale-110"
                                />
                            </div>

                            <h5 className="font-semibold text-[#3c0a6d] text-[21px] pt-[30px] inter_medium">
                                {area?.title}
                            </h5>

                            <p className="text-gray-700 text-lg inter">{area.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <h4 className="text-xl text-black inter">
                        I understand your unique challenges and I can help you to feel understood, clear, calm, and
                        become connected and empowered.
                    </h4>

                    <h5 className="text-xl text-black mt-2 font-medium lg:mb-12 inter_medium">
                        Start your transformative journey with MindClaire today
                    </h5>

                    <HashLink smooth to="/services#serv-appont">
                        <button className="bg-[#9D4EDD] hover:bg-[#3c0a6d] py-[15px] rounded-full text-base 
                            px-7 w-max inter cursor-pointer text-white"
                        >
                            Learn More
                        </button>
                    </HashLink>
                </div>
            </div>
        </div>
    );
};

export default AreasOfFocus