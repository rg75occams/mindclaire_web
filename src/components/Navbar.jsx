import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { RiMenuLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Navbar = ({ isScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [open, setOpen] = useState(null);
    const location = useLocation();
    const path = location.pathname;
    const isHome = path === '/';

    const nav_menu = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        {
            label: 'Resources',
            children: [
                { label: 'Blog', path: '/blog' },
                { label: 'Press & Media', path: '/press_media' },
                { label: 'Resources', path: '/resources' },
                { label: 'Events', path: '/events' }
            ]
        },
        { label: 'FAQ’s', path: '/faqs' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 mt-4 lg:px-[6rem] sm:px-7 px-5">
            <div className='container mx-auto'>
                <div className={`rounded-full md:h-20 h-[70px] flex items-center justify-between ${isScrolled ? `shadow-md
                    transition-all bg-[#ffffff9e] md:backdrop-blur-[12px] duration-300 ease-in-out` : `shadow-md
                    md:bg-transparent bg-[#ffffff9e] md:backdrop-blur-none backdrop-blur-[12px] md:shadow-none`}`}
                >
                    <div className={`flex justify-between w-full md:px-0 px-6`}>
                        <div className="flex items-center" data-aos="fade-right">
                            <Link to='/' className="md:block hidden">
                                {!isHome ? (
                                    <img src='/assets/logo.svg' alt='logo' className={`${isScrolled ? 'pl-7' : ''}`}
                                    />
                                ) : (
                                    <img src={`${isScrolled ? '/assets/logo.svg' : '/assets/logo_white.svg'}`} alt='logo'
                                        className={`${isScrolled ? 'pl-7' : 'w-auto lg:h-[60px] md:h-[45px] h-[50px]'}`}
                                    />
                                )}
                            </Link>

                            <Link to='/' className="md:hidden block">
                                <img src={'/assets/logo.svg'} alt='logo' className='w-auto h-[40px]' />
                            </Link>
                        </div>

                        <div data-aos="zoom-in-up">
                            <div className={`md:flex items-center xl:gap-10 lg:gap-6 md:gap-4 gap-8 md:text-lg text-base
                                hidden ${isScrolled ? 'text-[#8a2be2] px-4' : isHome ? 'text-white' : 'text-black'}`}
                            >
                                {nav_menu?.filter((nav) => !(nav.path === '/' && path === '/')).map((nav, index) => (
                                    <div key={index} className="relative group">
                                        {nav?.children ? (
                                            <div className={`cursor-pointer ${isScrolled ? '' : 'hover:text-[#0a58ca]'}`}>
                                                <div className="flex items-center gap-1">
                                                    <span className={`block inter ${isScrolled ? 'text-[#8a2be2]' : ''} 
                                                        ${nav?.children?.some(child => child?.path === path) ? 'font-bold' : ''}`}
                                                    >
                                                        {nav.label}
                                                    </span>

                                                    <span className="transition-transform duration-200">
                                                        <FiChevronDown className="transition-transform duration-300 
                                                            ease-in-out group-hover:rotate-180"
                                                        />
                                                    </span>
                                                </div>

                                                <div className="absolute left-0 p-[18px_10px_16px_20px] bg-white text-black 
                                                    rounded-xl shadow-lg opacity-0 group-hover:opacity-100 w-max invisible 
                                                    group-hover:visible transition-all duration-200 z-50 top-[54px]"
                                                >
                                                    <div className="flex flex-col space-y-2.5">
                                                        {nav.children.map((child, idx) => (
                                                            <Link key={idx} to={child?.path} className={`flex items-center 
                                                                gap-2.5 pr-5 ${path === child.path ? 'font-bold' : ''}`}
                                                            >
                                                                <span className="w-2 h-2 bg-[#9d4edd] rounded-full"></span>
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link to={nav?.path} className={`${isScrolled ? '' : 'hover:text-[#0a58ca]'} 
                                                    ${path === nav?.path ? 'font-bold' : ''}`}
                                            >
                                                {nav?.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}

                                <Link to='/contact' className={`${isScrolled ? '' : 'hover:text-[#0a58ca]'} 
                                    ${path === '/contact' ? 'font-bold' : ''} hidden lg:block`}
                                >
                                    Contact
                                </Link>

                                <Link to='/login' className="bg-[#9D4EDD] hover:bg-[#3c0a6d] text-white px-7 
                                    py-[15px] rounded-full text-base inter cursor-pointer"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-end items-center md:hidden gap-5"
                            data-aos="zoom-in-up"
                        >
                            <button className="text-[#8a2be2] cursor-pointer" onClick={toggleMenu}>
                                {isMenuOpen ? <RxCross2 size={30} /> : <RiMenuLine size={30} />}
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`md:hidden fixed top-0 right-0 w-[70%] bg-white text-black z-50
                    shadow-lg transform transition-transform duration-300 ease-in-out rounded-[30px]
                    ${isMenuOpen ? 'translate-x-0 mx-10 my-28' : 'translate-x-full mx-0 my-26'}`}
                >
                    <div className="py-8 px-6 flex flex-col">
                        <ul className="flex-grow space-y-2">
                            {nav_menu?.filter((nav) => !(nav.path === '/' && path === '/')).map((nav, index) => (
                                <div key={index}>
                                    {nav?.children ? (
                                        <>
                                            <button className="flex items-center justify-center gap-2 inter"
                                                onClick={() => setOpen(open === index ? null : index)}
                                            >
                                                {nav.label}

                                                {open === index ? (
                                                    <FiChevronUp className="mt-1" />
                                                ) : (
                                                    <FiChevronDown className="mt-1" />
                                                )}
                                            </button>

                                            {open === index && (
                                                <div className="rounded-[20px] px-5 py-3.5 ml-3 mt-2 inter"
                                                    style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
                                                >
                                                    <div className="flex flex-col space-y-2.5">
                                                        {nav?.children?.map((child, idx) => (
                                                            <Link key={idx} to={child?.path} className={`
                                                                ${path === child.path ? 'font-bold' : ''}`}
                                                                onClick={() => {
                                                                    setIsMenuOpen(false); setOpen(null);
                                                                }}
                                                            >
                                                                {child.label}

                                                                {idx !== nav.children.length - 1 && (
                                                                    <div className="border-b border-gray-200 pt-[10px]" />
                                                                )}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link to={nav?.path} className={`block ${path === nav?.path ? 'font-bold' : ''}`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {nav?.label}
                                        </Link>
                                    )}

                                    <div className="border-b border-gray-200 pt-[10px]" />
                                </div>
                            ))}
                        </ul>

                        <ul className="flex-grow mt-2">
                            <Link to='/contact' className={`block ${path === '/contact' ? 'font-bold' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            <div className="border-b border-gray-200 pt-[10px]" />
                        </ul>

                        <Link to='/login' className="w-full bg-[#9D4EDD] px-6 py-[15px] text-base text-white 
                            rounded-full cursor-pointer text-start inter mt-3"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar