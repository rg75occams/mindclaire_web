import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa"

const Footer = () => {
    const location = useLocation();
    const path = location.pathname;
    const isHome = path === '/';

    return (
        <footer className="lg:pl-[6rem] sm:pl-7 pl-5 py-14 flex flex-col lg:flex-row gap-7 justify-center">
            <div className="flex flex-row lg:justify-start justify-end gap-12 lg:pr-0 pr-9">
                <img src={`/assets/logo.svg`} alt='logo' className="w-auto lg:h-[70px] h-[60px]" />
            </div>

            <div className=" text-white rounded-l-[50px]" style={{
                background: "linear-gradient(96.68deg, #3C0A6D 1.9%, #3C0A6D 25.44%, #9D4EDD 141.01%)",
            }}>
                <div className="grid grid-cols-12 md:pr-16 md:pl-14 md:pt-16 md:pb-8 pr-9 sm:pl-14 pl-9 pt-12 pb-0">
                    <div className="flex gap-12 xl:col-span-9 col-span-12">
                        <div className="grid grid-cols-12 lg:gap-8 gap-6">
                            <div className="lg:col-span-2 col-span-12 text-lg inter">
                                <Link to="/about">About</Link>
                            </div>

                            <div className="lg:col-span-2 col-span-12 text-lg inter">
                                <Link to="/services">Services</Link>
                            </div>

                            <div className="lg:col-span-8 col-span-12 grid lg:grid-cols-3 gap-6 text-lg inter">
                                <div className="flex flex-col lg:gap-0 sm:gap-6 gap-0">
                                    <Link to="/blog">Blog</Link>
                                    {isHome && (
                                        <Link to="/media-mentions">Media Mentions</Link>
                                    )}
                                    <Link to="/resources">Resources</Link>
                                    <Link to="/events">Events</Link>
                                    <Link to="/press_media">Press Release</Link>
                                </div>

                                <div className="flex flex-col">
                                    <Link to="/contact">Contact</Link>
                                </div>

                                <div className="flex flex-col lg:gap-0 sm:gap-6 gap-0">
                                    <div>Office Address</div>

                                    <p className="text-sm text-[#ffffffa6] font-extralight inter lg:pr-4 pr-0">
                                        5150 E. Pacific Coast Highway, 2nd Floor,<br />
                                        Long Beach, CA 90804
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-3 col-span-12 lg:mt-0 mt-10">
                        <div className="flex xl:justify-end justify-start">
                            <h4 className="text-lg inter">
                                Connect With Us

                                <div className="flex gap-3 mt-2">
                                    <Link to='https://www.facebook.com/people/MindClaire/61560276094752/?mibextid=ZbWKwL'
                                        target="_blank"
                                    >
                                        <FaFacebook className="text-2xl" />
                                    </Link>

                                    <Link to='https://www.tiktok.com/@mindclaire_?_t=ZP-8tPrGNlLrtG&_r=1' target="_blank">
                                        <FaTiktok className="text-2xl" />
                                    </Link>

                                    <Link to='https://www.instagram.com/mindclaire/' target="_blank">
                                        <FaInstagram className="text-2xl" />
                                    </Link>

                                    <Link to='https://www.youtube.com/@mindclaire' target="_blank">
                                        <FaYoutube className="text-2xl" />
                                    </Link>

                                    <Link to='https://www.linkedin.com/company/mindclaire/' target="_blank">
                                        <FaLinkedin className="text-2xl" />
                                    </Link>
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="md:pl-14 sm:pl-14 pl-9">
                    <hr className="my-4 bg-current/25 opacity-25" />

                    <div className="flex lg:flex-wrap flex-nowrap lg:flex-row flex-col gap-6 pb-10 pt-3">
                        <h4 className="text-sm text-[#ffffff99] inter">
                            <Link to='/terms-of-use'>Terms of Use</Link>
                        </h4>

                        <h4 className="text-sm text-[#ffffff99] inter">
                            <Link to='/acceptable-use-policy'>Acceptable Use Policy</Link>
                        </h4>

                        <h4 className="text-sm text-[#ffffff99] inter">
                            <Link to='/privacy-policy'>Privacy Policy</Link>
                        </h4>

                        <h4 className="text-sm text-[#ffffff99] inter">
                            <Link to='/medical-disclaimer'>Medical Disclaimer</Link>
                        </h4>

                        <h4 className="text-sm text-[#ffffff99] inter">
                            © 2025 MindClaire. All Rights Reserved.
                        </h4>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer