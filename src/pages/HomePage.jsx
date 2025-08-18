import { Fragment } from "react";
import Banner from "../components/Banner";
import ConsultationForm from "../components/ConsultationForm";
import Profile from "../components/Profile";
import AreasOfFocus from "./AreasOfFocus";
import Featured from "../components/Featured";
import ApproachSection from "../components/ApproachSection";

const HomePage = () => {
    const approach = [
        {
            icon: '/icons/icon_1.png',
            title: "Psychoeducation",
            description: "Education about your mental health, empowering you to manage and improve your daily life effectively.",
        },
        {
            icon: '/icons/Ayurveda.svg',
            title: "Ayurveda Approaches",
            description: "Personalized traditional approaches to balance your body and mind, enhancing your overall well-being through natural practices.",
        },
        {
            icon: '/icons/Medication.svg',
            title: "Medication Management",
            description: "Tailored to minimize side effects while maximizing benefits.",
        },
        {
            icon: '/icons/Laboratory.svg',
            title: "Laboratory Testing",
            description: "Tests to accurately assess your health and tailor your treatment plan to your specific needs.",
        },
        {
            icon: '/icons/Interpersonal.svg',
            title: "Therapy",
            description: "Cognitive Behavioral Therapy (CBT): A structured, practical therapy that helps patients identify and change destructive thought patterns.",
        },
        {
            icon: '/icons/Interpersonal.svg',
            title: "Interpersonal therapy",
            description: "A short-term supportive therapy focusing on improving interpersonal relationships and social functioning.",
        },
        {
            icon: '/icons/Family.svg',
            title: "Family Supportive Therapy",
            description: "Involves family members in the treatment process to improve communication and resolve conflicts.",
        },
        {
            icon: '/icons/Natural.svg',
            title: "Natural herbs",
            description: "Supplements and vitamins that support mental health, often used alongside other treatments",
        },
        {
            icon: '/icons/Nutrition.svg',
            title: 'Nutrition Protocols',
            description: "Designed to improve your health by matching your diet to your body’s needs.",
        },
        {
            icon: '/icons/Autism_Treatment.svg',
            title: "Autism Assessments, Diagnosis & Treatment",
            description: "Comprehensive evaluations followed by a combination of medical, behavioral, and educational interventions.",
        },
    ];

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