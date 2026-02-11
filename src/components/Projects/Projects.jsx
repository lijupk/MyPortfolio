import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <section className={styles.portfolio} id="projects">
            <h2 className="heading">Latest <span className="highlight">Projects</span></h2>

            <div className={styles.portfolioContainer}>
                {[
                    { title: 'Enterprise E-Commerce', desc: 'A scalable e-commerce platform built with .NET Core microservices and React, handling high traffic loads.', img: 'https://placehold.co/600x400/1a1a1a/FFF?text=E-Commerce+Platform' },
                    { title: 'FinTech Analytics Dashboard', desc: 'Real-time financial data visualization tool using SignalR and Angular for a major banking client.', img: 'https://placehold.co/600x400/1a1a1a/FFF?text=FinTech+Dashboard' },
                    { title: 'Healthcare Management System', desc: 'Secure patient management system compliant with HIPAA, utilizing Azure SQL and Identity Server.', img: 'https://placehold.co/600x400/1a1a1a/FFF?text=Healthcare+System' },
                    { title: 'IoT Supply Chain Tracker', desc: 'IoT solution for tracking logistics in real-time using Azure IoT Hub and Serverless functions.', img: 'https://placehold.co/600x400/1a1a1a/FFF?text=Supply+Chain+IOT' }
                ].map((project, index) => (
                    <motion.div
                        className={styles.portfolioBox}
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <img src={project.img} alt={project.title} />
                        <div className={styles.portfolioLayer}>
                            <h4>{project.title}</h4>
                            <p>{project.desc}</p>
                            <a href="#"><FaExternalLinkAlt /></a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
