import { Link } from 'react-router-dom'
import BannerSection from '../components/BannerSection'
import { events } from '../components/staticData'
import PageTitle from '../components/PageTitle';

const Events = () => {
    const slugify = (text) => {
        return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    };

    return (
        <>
            <PageTitle title="Mindclaire Events" keywords=""
                description="Discover upcoming mental health workshops, retreats, and support groups at MindClaire. Join our events to enhance well-being, build community, and gain valuable insights."
            />

            <BannerSection image={'/assets/edu_banner.webp'} title={'Events'} fontSize={'text-[50px]'}
                className={'bg-[40%]'}
            />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-12">
                <div className='container mx-auto'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-[60px] h-full text-left">
                        {events?.map((event, index) => (
                            <div key={index} className='flex flex-col h-full justify-between'>
                                <div>
                                    <div className="rounded-[30px] overflow-hidden">
                                        <img src={event?.image} alt={event?.title} />
                                    </div>

                                    <h2 className="font-semibold text-[#3c0a6d] text-[21px] pt-[30px] inter_medium
                                    line-clamp-3"
                                    >
                                        {event?.title}
                                    </h2>

                                    <p className="text-[17.92px] text-black inter mt-2.5 line-clamp-5">
                                        {event?.description}
                                    </p>
                                </div>

                                <Link to={`/events/${slugify(event?.title)}`} target="_blank" className='mt-4 gap-1
                                    flex text-[#3c0a6d] inter_semibold hover:text-[#0a58ca] items-center inter'
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

export default Events