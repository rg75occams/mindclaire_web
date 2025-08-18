const BannerSection = ({ title, image, className = 'bg-[85%]' , fontSize = 'text-[4rem]'}) => {

    return (
        <div className="lg:px-[6rem] sm:px-7">
            <div className='container mx-auto sm:mt-[120px] mt-0'>
                <section style={{ backgroundImage: `url(${image})` }} className={`${className} bg-cover sm:bg-right
                    sm:h-auto h-[90vh] sm:rounded-[30px] rounded-none bg-no-repeat flex items-center`}
                >
                    <div className='container mx-auto'>
                        <div className='pt-[195px] pb-[210px] md:pl-[120px] sm:pl-20 pl-10' data-aos="zoom-in-right">
                            <h2 className={`${fontSize} text-white font-semibold ringift`}>
                                {title}
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default BannerSection