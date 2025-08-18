import { Fragment } from "react";
import Banner from "../components/Banner";
import ConsultationForm from "../components/ConsultationForm";
import Profile from "../components/Profile";
import AreasOfFocus from "./AreasOfFocus";
import Featured from "../components/Featured";
import ApproachSection from "../components/ApproachSection";
import { approach } from "../components/staticData";

const HomePage = () => {
    return (
        <Fragment>
            <Banner />
            <Profile />
            <Featured />
            <AreasOfFocus />

            <ApproachSection data={approach} title={'My'} sub_title={'Approach'}
                className={'mb-4'} description={`
                    MindClaire is a haven for those of you who face the invisible battles of mental health challenges daily. 
                    If traditional approaches have left you seeking more, my integrative methods extend beyond personalized 
                    medication to include therapy, nutrition, and complementary practices like yoga and meditation. I'm 
                    committed to providing comprehensive care that includes all aspects of your well-being.`
                }
            />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-14">
                <div className='container mx-auto'>
                    <div style={{ backgroundImage: `url(/assets/purp-rec.jpg)` }} className='md:pt-[100px]
                        pb-[72px] px-[40px] text-center rounded-4xl pt-[72px] bg-center bg-cover'
                    >
                        <h2 className="text-4xl md:text-[41px] mb-3 text-white ringift">
                            “Out of your vulnerabilities will come your strength."
                        </h2>
                        
                        <p className="text-2xl text-white mb-3 inter">— Sigmund Freud</p>
                    </div>
                </div>
            </div>
            <ConsultationForm />
        </Fragment>
    );
};

export default HomePage