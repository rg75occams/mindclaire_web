import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const ConsultationForm = () => {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", acknowledge: false,
        phone: "", problem: "", reviewedFees: "yes",
    });

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const problemRef = useRef();
    const acknowledgeRef = useRef();
    const recaptchaRef = useRef();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const smoothScrollTo = (targetY, duration = 800) => {
        const startY = window.scrollY;
        const distance = targetY - startY;
        let startTime = null;

        const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, startY + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.firstName.trim()) {
            smoothScrollTo(firstNameRef.current.getBoundingClientRect().top + window.scrollY - 100);
            firstNameRef.current.focus();
            return;
        }
        if (!formData.lastName.trim()) {
            smoothScrollTo(lastNameRef.current.getBoundingClientRect().top + window.scrollY - 100);
            lastNameRef.current.focus();
            return;
        }
        if (!formData.email.trim()) {
            smoothScrollTo(emailRef.current.getBoundingClientRect().top + window.scrollY - 100);
            emailRef.current.focus();
            return;
        }
        if (!formData.phone.trim()) {
            smoothScrollTo(phoneRef.current.getBoundingClientRect().top + window.scrollY - 100);
            phoneRef.current.focus();
            return;
        }
        if (!formData.problem.trim()) {
            smoothScrollTo(problemRef.current.getBoundingClientRect().top + window.scrollY - 100);
            problemRef.current.focus();
            return;
        }
        if (!formData.acknowledge) {
            smoothScrollTo(acknowledgeRef.current.getBoundingClientRect().top + window.scrollY - 100);
            acknowledgeRef.current.focus();
            alert("You must acknowledge the terms.");
            return;
        }
        const token = await recaptchaRef.current.executeAsync();
        recaptchaRef.current.reset();

        const postData = {
            ...formData,
            "g-recaptcha-response": token,
        };

        console.log(postData);
    };

    return (
        <div id="contact-box" className="lg:px-[6rem] sm:px-7 px-5 pt-14">
            <div className='container mx-auto'>
                <div className="max-w-4xl mx-auto">
                    <h2 className="lg:text-[2rem] text-3xl inter_semibold text-center text-[#3C0A6D] mb-4">
                        Schedule a <span className="text-[#984AD7]">free 15 minute Consultation</span>
                    </h2>

                    <p className="text-center mb-6 text-black inter">
                        I offer a free 15-min consultation call to learn more about you and your treatment goals to see
                        if we would be a good fit. Please be sure to read over my services page to learn more about my
                        appointment types and fees before booking your call.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-4 inter">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" name="firstName" placeholder="First name*"
                                value={formData.firstName} onChange={handleChange} ref={firstNameRef}
                                className="w-full block px-[25px] py-3.5 text-base font-normal leading-0.5
                                text-black bg-white border border-[#ced4da] rounded-full focus:border-[#86b7fe]
                                transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#0d6efd40]"
                            />

                            <input type="text" name="lastName" placeholder="Last name*"
                                value={formData.lastName} onChange={handleChange} ref={lastNameRef}
                                className="w-full block px-[25px] py-3.5 text-base font-normal leading-0.5
                                text-black bg-white border border-[#ced4da] rounded-full focus:border-[#86b7fe]
                                transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#0d6efd40]"
                            />

                            <input type="email" name="email" placeholder="Email*"
                                value={formData.email} onChange={handleChange} ref={emailRef}
                                className="w-full block px-[25px] py-3.5 text-base font-normal leading-0.5
                                text-black bg-white border border-[#ced4da] rounded-full focus:border-[#86b7fe]
                                transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#0d6efd40]"
                            />

                            <input type="tel" name="phone" placeholder="Phone Number*" value={formData.phone}
                                ref={phoneRef} onChange={(e) => {
                                    const numericValue = e.target.value.replace(/\D/g, '');
                                    handleChange({ target: { name: e.target.name, value: numericValue } });
                                }}
                                className="w-full block px-[25px] py-3.5 text-base font-normal leading-0.5
                                text-black bg-white border border-[#ced4da] rounded-full focus:border-[#86b7fe]
                                transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#0d6efd40]"
                            />
                        </div>

                        <textarea name="problem" value={formData.problem} onChange={handleChange} ref={problemRef}
                            placeholder="What problem led you to seek help and what do you hope to get out of treatment?*"
                            className="w-full block md:px-[25px] px-4 md:pt-5 pt-3 pb-2.5 sm:text-base text-sm font-normal h-28
                            text-black bg-white border border-[#ced4da] rounded-[30px] focus:border-[#86b7fe]
                            transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#0d6efd40]"
                        />

                        <div className="space-y-2">
                            <p className="text-black mb-3">Acknowledgement</p>

                            <label className="flex items-start gap-3">
                                <input type="radio" name="reviewedFees" value="yes" className="mt-1 w-4 h-4 shrink-0"
                                    checked={formData.reviewedFees === "yes"} onChange={handleChange}
                                />

                                <span className="text-black">
                                    Yes, I have reviewed the fee list on the Services page and I am willing and
                                    able to pay the fees.
                                </span>
                            </label>

                            <label className="flex items-start gap-3">
                                <input type="radio" name="reviewedFees" value="no" className="mt-1 w-4 h-4 shrink-0"
                                    checked={formData.reviewedFees === "no"} onChange={handleChange}
                                />

                                <span className="text-black">
                                    No, I have not reviewed the fees or am not able or willing to pay them. I will
                                    seek out a different psychiatrist and not be contacted.

                                    {formData?.reviewedFees === "no" && (
                                        <Link to="#" className="text-[#0d6efd] underline ml-1 block sm:inline">
                                            Please see our fee structure here.
                                        </Link>
                                    )}

                                    {/* <Link to="#" className={`text-[#0d6efd] underline ml-1 block sm:inline 
                                        ${formData?.reviewedFees === "no" ? "visible" : "hidden"}`}
                                    >
                                        Please see our fee structure here.
                                    </Link> */}
                                </span>
                            </label>
                        </div>

                        <div className="space-y-2">
                            <p className="text-black mb-3">Acknowledgement</p>

                            <label className="flex gap-2 items-start">
                                <input type="checkbox" name="acknowledge" checked={formData.acknowledge}
                                    onChange={handleChange} className="w-5 h-5 mt-[3px] scale-125" ref={acknowledgeRef}
                                />

                                <span className="text-black">
                                    I acknowledge that an initial free phone call will not establish a provider-patient
                                    relationship and the intention of this call is to offer guidance regarding treatment
                                    track and answer general questions, rather than offer specific medical advice.
                                </span>
                            </label>
                        </div>

                        <div className="flex">
                            <ReCAPTCHA sitekey="6Leb7wErAAAAAAb8BewzAqgfyODCoTTy712uOOw3"
                                size="normal" ref={recaptchaRef}
                            />
                        </div>

                        <button type="submit" className="bg-[#9D4EDD] hover:bg-[#3c0a6d] cursor-pointer text-white 
                            py-[15px] rounded-full text-base px-7"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConsultationForm