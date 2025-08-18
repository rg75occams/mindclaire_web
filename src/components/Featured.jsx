import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const featuredLogos = [
    { src: '/assets/Cambridge_1.webp', alt: 'Cambridge' },
    { src: '/assets/Taylor.webp', alt: 'Taylor' },
    { src: '/assets/FBC-Web-Horiz-Blue.webp', alt: 'FBC Web Horiz Blue Today' },
    { src: '/assets/Current_1.webp', alt: 'Current' },
    { src: '/assets/Psycology-today_1.webp', alt: 'Psychology Today' },
    { src: '/assets/Honored-Listee_1.webp', alt: 'Honored Listee' },
    { src: '/assets/integrative.webp', alt: 'Integrative' },
];

const Featured = () => {
    const settings = {
        dots: true, arrows: false, infinite: true,
        autoplay: true, autoplaySpeed: 3000, speed: 300,
        slidesToShow: 4, slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
        customPaging: () => (
            <div className="dot-wrapper">
                <div className="dot"></div>
            </div>
        ),
    };

    return (
        <div className="lg:px-[6rem] sm:px-7 px-5 pt-14">
            <div className='container mx-auto'>
                <div className="featured-slider flex flex-col items-center">
                    <h2 className="lg:text-[2rem] text-3xl inter_semibold text-[#3C0A6D] mb-5">
                        As Featured <span className="text-[#984AD7]">In:</span>
                    </h2>

                    <div className="w-full">
                        <Slider {...settings}>
                            {featuredLogos.map((feature, index) => (
                                <div key={index} className="flex justify-center items-center">
                                    <img src={feature?.src} alt={feature?.alt}
                                        className="w-auto h-[85px] mx-auto"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured