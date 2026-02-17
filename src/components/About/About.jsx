import { motion } from 'framer-motion';
import styles from './About.module.css';
import aboutImg from '../../assets/about.jpg';

const About = () => {
    return (
        <section className={styles.about} id="about">
            <motion.div
                className={styles.aboutImg}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <img src={aboutImg} alt="About Me" />
            </motion.div>

            <motion.div
                className={styles.aboutContent}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="heading">About <span className="highlight">Me</span></h2>
                <h3>Senior .Net Developer & Technical Architect</h3>
                <p>With over two decades of hands-on experience in the software industry, I specialize in the Microsoft technology stack. My journey has taken me from the early days of .NET to creating cloud-native applications on Azure using .NET Core. I am passionate about clean architecture, code quality, and mentoring the next generation of developers.</p>
                <p>I excel in translating complex business requirements into technical solutions that are robust, secure, and scalable. My expertise extends beyond coding to system design, database optimization, and CI/CD implementation.</p>

                <div className={styles.experienceStats}>
                    <div className={styles.statItem}>
                        <span className={styles.num}>20</span><span>+</span>
                        <span className={styles.text}>Years Experience</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.num}>30</span><span>+</span>
                        <span className={styles.text}>Projects Completed</span>
                    </div>
                </div>

                <a href="#contact" className="btn">Read More</a>
            </motion.div>
        </section>
    );
};

export default About;
