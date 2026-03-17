import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Certifications from './components/Certifications/Certifications';
import VisitorDashboard from './components/VisitorDashboard/VisitorDashboard';
import { Analytics } from '@vercel/analytics/react';

function App() {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Secret Shortcut: Ctrl + Shift + V
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'v') {
                e.preventDefault();
                setIsDashboardOpen((prev) => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Services />
                <Certifications />
                <Contact />
            </main>
            <Footer />
            <VisitorDashboard 
                isOpen={isDashboardOpen} 
                onClose={() => setIsDashboardOpen(false)} 
            />
            <Analytics />
        </>
    );
}

export default App;
