import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import styles from './Services.module.css';

const Services = () => {
    return (
        <section className={styles.services} id="services">
            <h2 className="heading">My <span className="highlight">Services</span></h2>

            <div className={styles.servicesContainer}>
                {[
                    { icon: <FaCode />, title: 'Custom Software Development', desc: 'Tailored software solutions delivering high performance and reliability for your business needs.' },
                    { icon: <FaLaptopCode />, title: 'Migration & Modernization', desc: 'Expertise in upgrading legacy .NET applications to modern .NET Core and Cloud architectures.' },
                    { icon: <FaChartLine />, title: 'Technical Consultation', desc: 'Strategic advice on technology stack selection, architecture design, and development processes.' }
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
                        <a href="#contact" className="btn">Learn More</a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
