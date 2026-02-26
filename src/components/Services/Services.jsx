import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import styles from './Services.module.css';

const Services = () => {
    return (
        <section className={styles.services} id="services">
            <h2 className="heading">My <span className="highlight">Services</span></h2>

            <div className={styles.servicesContainer}>
                {[
                    {
                        icon: <FaCode />,
                        title: 'Custom Software Development',
                        desc: 'Tailored software solutions delivering high performance and reliability for your business needs.',
                        deliverables: ['Full-stack web applications', 'Secure RESTful APIs', 'Cloud-native architecture'],
                        duration: '4-12 weeks'
                    },
                    {
                        icon: <FaLaptopCode />,
                        title: 'Migration & Modernization',
                        desc: 'Expertise in upgrading legacy .NET applications to modern .NET Core and Cloud architectures.',
                        deliverables: ['Lift-and-shift to Azure', 'Monolith to microservices', 'CI/CD pipeline implementation'],
                        duration: '2-8 weeks'
                    },
                    {
                        icon: <FaChartLine />,
                        title: 'Technical Consultation',
                        desc: 'Strategic advice on technology stack selection, architecture design, and development processes.',
                        deliverables: ['Architecture reviews & ADRs', 'Team mentoring & best practices', 'Performance & audits'],
                        duration: '1-4 weeks'
                    }
                ].map((service, index) => (
                    <motion.div
                        className={styles.serviceBox}
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ translateY: -10 }}
                    >
                        <div className={styles.icon}>{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>

                        <div className={styles.deliverables}>
                            <h4>Typical deliverables:</h4>
                            <ul>
                                {service.deliverables.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                            <div className={styles.duration}><strong>Engagement:</strong> {service.duration}</div>
                        </div>

                        <a href="#contact" className="btn">Book a 15-min call</a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
