import { Fragment, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import PressMedia from './pages/PressMedia';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';
import TermsOfUse from './pages/TermsOfUse';
import AcceptablePolicy from './pages/AcceptablePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MedicalDisclaimer from './pages/MedicalDisclaimer';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    const allRoutes = [
        '/', '/about', '/services', '/blog', '/press_media',
        '/resources', '/events', '/faqs', '/contact', '/terms-of-use',
        '/acceptable-use-policy', '/privacy-policy', '/medical-disclaimer',
    ];

    const isNotFoundPage = !allRoutes.includes(location.pathname);

    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease-in-out',
            once: true, mirror: false
        });

        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const isLargeScreen = window.innerWidth >= 768;
            if (isLargeScreen) {
                setIsScrolled(window.scrollY > 0);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fragment>
            {!isNotFoundPage && <Navbar isScrolled={isScrolled} />}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/services' element={<Services />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/press_media' element={<PressMedia />} />
                <Route path='/resources' element={<Resources />} />
                <Route path='/events' element={<Events />} />
                <Route path='/faqs' element={<FAQ />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/terms-of-use' element={<TermsOfUse />} />
                <Route path='/acceptable-use-policy' element={<AcceptablePolicy />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/medical-disclaimer' element={<MedicalDisclaimer />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            {!isNotFoundPage && <Footer />}
        </Fragment>
    )
}

export default App