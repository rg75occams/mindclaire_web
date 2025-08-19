import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { events } from "./staticData";
import { Helmet } from "react-helmet-async";

const EventsDetails = () => {
    const { name } = useParams();
    const slugify = (text) => {
        return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    };
    const singleEvents = events.find((event) => slugify(event?.title) === name)

    return (
        <>
            <Helmet>
                <title> MindClaire | MindClaire Champions Hope & Courage at CHOC Gala 2025.</title>
                <meta name="description" content="Join MindClaire in supporting the CHOC Gala 2025, celebrating resilience and raising awareness for children's health initiatives." />
                <meta name="keywords" content="" />
            </Helmet>

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-12">
                <div className='container mx-auto mt-[70px]'>
                    <div className="grid grid-cols-12 gap-7 lg:gap-10">
                        <div className="col-span-12 lg:col-span-7" data-aos="zoom-in">
                            <h1 className="text-[26px] text-[#3c0a6d] mb-2 inter_medium">{singleEvents?.title}</h1>
                            <p className="text-[1.18rem] lg:mb-4 text-black mt-3 inter">
                                by Dr. Ritu Goel, MD | June 24, 2025 | Events
                            </p>

                            <img src={singleEvents?.image} alt={singleEvents?.title}
                                className="rounded-[30px] w-auto h-auto mb-10"
                            />

                            <p className="text-[17.92px] text-black inter mt-2.5">
                                {singleEvents?.description}
                            </p>
                        </div>

                        <div className="col-span-12 lg:col-span-5 md:text-left" data-aos="fade-right">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-[26px] text-[#3c0a6d] mb-4 inter_medium">Recent Posts</h1>
                                {events?.filter((event) => slugify(event?.title) !== name)?.map((event, index) => (
                                    <Link key={index} to={`/events/${slugify(event.title)}`} className='text-[#3c0a6d] 
                                    flex inter_medium hover:text-[#0a58ca] items-center inter gap-2'
                                    >
                                        <p className='sm:text-lg text-sm font-normal'>{event?.title}</p>
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

export default EventsDetails