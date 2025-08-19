import BannerSection from '../components/BannerSection'
import { Link } from 'react-router-dom';
import { press_media } from '../components/staticData';
import { Helmet } from 'react-helmet-async';


const PressMedia = () => {
    return (
        <>
            <Helmet>
                <title>Mindclaire | Press media</title>
                <meta name="description" content="Media coverage and press mentions of Dr. Ritu Goel and MindClaire's innovative approach to mental health, including features in Marquis Who’s Who and Forbes Business Council." />
                <meta name="keywords" content="" />
            </Helmet>

            <BannerSection image={'/assets/edu_banner.webp'} title={'Press & Media'} fontSize={'text-[50px]'}
                className={'bg-[40%]'}
            />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-12">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 text-left">
                        {press_media?.map((media, index) => (
                            <div key={index}>
                                <div className="rounded-[30px] overflow-hidden">
                                    <img src={media?.image} alt={media?.title} />
                                </div>

                                <h2 className="font-semibold text-[#3c0a6d] text-[21px] pt-[30px] inter_medium
                                    line-clamp-3"
                                >
                                    {media?.title}
                                </h2>

                                <p className="text-[17.92px] text-black inter mt-2.5">
                                    {media?.description}
                                </p>

                                <Link to={`/press_media/${media?.id}`} target="_blank" className='mt-6
                                    inter_semibold hover:text-[#0a58ca] items-center inter text-[#3c0a6d] flex gap-1'
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

export default PressMedia