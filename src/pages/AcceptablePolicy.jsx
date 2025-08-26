import { Link } from "react-router-dom"
import PageTitle from "../components/PageTitle"

const AcceptablePolicy = () => {
    return (
        <>
            <PageTitle title="MindClaire | Acceptable Use Policy" keywords=""
                description="Review the terms governing your use of MindClaire's services. By accessing our platform, you agree to abide by these terms and conditions."
            />

            <div className="lg:px-[6rem] sm:px-7 px-5 pt-12">
                <div className='container mx-auto mt-[70px]'>
                    <h1 className='text-black lg:text-[40px] text-3xl inter_semibold'>Acceptable Use Policy</h1>

                    <p className="text-base lg:mb-4 text-black lg:mt-2 mt-4 inter">
                        This is the acceptable use policy, which, together with our terms of website use, sets out the terms
                        under which we MindClaire allow you to use our site{" "}
                        <Link className='text-[#0d6efd] underline' to='/'>www.mindclaire.com</Link> (“site”)
                        whether you are a visitor or a registered user.
                    </p>

                    <p className="text-base lg:mb-4 text-black mt-5 inter">
                        Please read the terms of this policy carefully, as by using our site you indicate that you agree
                        to comply with and be bound by them.
                    </p>

                    <h2 className='text-black text-[2rem] inter_medium mt-6'>
                        PROHIBITED USES OF OUR SITE
                    </h2>

                    <p className="text-base lg:mb-4 text-black mt-5 inter">
                        Whether you are a visitor or registered user, you must comply with our terms of website use, and use our
                        site for lawful purposes only. In particular, you must not use our site for the uses listed
                        (without limitation) below:
                    </p>

                    <ul className="list-disc list-outside pl-7 text-black text-base mt-6">
                        <li>any fraudulent activity;</li>
                        <li>any activity which breaches any applicable law or regulation, whether national or international;</li>
                        <li>any activity which may cause or result in harm to a child under 18 years of age;</li>
                        <li>sending unsolicited advertising or other content (spam), or entering into any arrangement for such material to be sent;</li>
                        <li>reproducing, selling or otherwise handling our site or its contents in breach of our terms of website use;</li>
                        <li>knowingly introducing to our site, or transmit or attempt to transmit to any other site, computer or network, viruses, trojans, worms, logic bombs or other material, code or programme which is malicious or technologically harmful;</li>
                        <li>attempting to gain unauthorized access to our site, our software, our server, or any server, computer or database connected to our site; or</li>
                        <li>attacking our site via a denial-of-service attack or a distributed denial-of service attack.</li>
                    </ul>

                    <p className="text-base lg:mb-4 text-black mt-6 inter">
                        Our site may offer users the facilities to upload or contribute content or other material, or to interact
                        with other users. When making use of these facilities, it is your responsibility to ensure that any
                        contribution or interaction is, as far as you are aware, factually correct, represents your honest opinion,
                        and does not breach any applicable law or regulation.
                    </p>

                    <p className="text-base lg:mb-4 text-black mt-5 inter">
                        In addition, any contribution or interaction must not include any material which (without limitation):
                    </p>

                    <ul className="list-disc list-outside pl-7 text-black text-base mt-6">
                        <li>is defamatory, obscene, offensive, hateful or inflammatory;</li>
                        <li>is, or refers to material which is, sexually explicit;</li>
                        <li>promotes violence, illegal activity or any form of discrimination;</li>
                        <li>infringes any other person’s copyright, database right or trade mark;</li>
                        <li>threatens, harasses, upsets, embarrasses, alarms or annoys any other person, or is likely to do so;</li>
                        <li>advocates, promotes or assists any illegal activity;</li>
                        <li>is likely to deceive any person or is made in breach of a legal duty owed to a third party (such as a duty of confidence);</li>
                        <li>invades another’s privacy or cause inconvenience or anxiety to any person;</li>
                        <li>is used to impersonate any person, or to misrepresent your identity or affiliation with any person; or</li>
                        <li>gives the impression that the material emanates from us, if this is not the case.</li>
                    </ul>

                    <h2 className='text-black text-3xl inter_medium mt-6'>MODERATION</h2>
                    <p className="text-base lg:mb-4 text-black mt-5 inter">
                        If we at any time use our site to provide users with any interactive service, the following moderation
                        provisions will apply:
                    </p>

                    <ul className="list-disc list-outside pl-7 text-black text-base mt-6">
                        <li>we will notify users if moderation is in place, and, if so, whether the moderation is provided by a person or is automated;</li>
                        <li>if moderation is in place, we will give you a means to contact the moderator;</li>
                        <li>although we will do our best to assess any risks which such interactive service may pose, we will be under no obligation to moderate it, and we expressly exclude any liability for any loss or damage to any person caused by use of it; and</li>
                        <li>children should at all times be supervised when using the interactive services on our site, whether such services are moderated or not.</li>
                    </ul>

                    <h2 className='text-black text-3xl inter_medium mt-6'>BREACHES OF THIS POLICY</h2>
                    <p className="text-base lg:mb-4 text-black mt-5 inter">
                        Any breach of this acceptable use policy will be dealt with in the same way as breach of our terms of
                        website use, and we reserve the right to take any other action we reasonably deem appropriate, including
                        restricting your use of our site and/or taking legal action against you. We are not liable for any loss or
                        damage caused by any breach of this acceptable use policy.
                    </p>

                    <h2 className='text-black text-3xl inter_medium mt-6'>AMENDMENTS</h2>
                    <p className="text-base lg:mb-4 text-black mt-5 inter">
                        Please check this page regularly, as we may revise this acceptable use policy at any time. We may also
                        change or update our acceptable use policy at any time by means of notices published anywhere on our site.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AcceptablePolicy