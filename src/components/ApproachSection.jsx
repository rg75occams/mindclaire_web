const ApproachSection = ({ title, sub_title, description, data = [], className = 'text-[#3C0A6D]' }) => {

    return (
        <div className="lg:px-[6rem] sm:px-7 px-5 pt-14">
            <div className='container mx-auto'>
                <div className="max-w-4xl mx-auto">
                    <h2 className={`lg:text-[2rem] text-3xl inter_semibold text-center ${className}`}>
                        {title} <span className="text-[#984AD7]">{sub_title}</span>
                    </h2>

                    <p className="text-center sm:px-14 px-0 text-black inter">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 space-x-[30px]">
                    {data?.map((item, index) => (
                        <div key={index} className="group flex items-center border-b border-[#808080] py-8 cursor-pointer 
                            gap-5 duration-300 ease-in-out hover:border-b-[0.125rem] hover:border-[#9d4edd] transition-all 
                            md:gap-7 lg:pr-20"
                        >
                            <img src={item?.icon} alt={item?.title} className="transition-all duration-300 
                                ease-in-out group-hover:scale-[1.2]"
                            />

                            <div>
                                <h6 className="inter_medium text-black sm:text-[19px] text-base whitespace-normal
                                    lg:whitespace-pre-line"
                                >
                                    {item?.title}
                                </h6>

                                <p className="text-black sm:text-base text-sm mt-1 inter whitespace-normal
                                    lg:whitespace-pre-line"
                                >
                                    {item?.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApproachSection