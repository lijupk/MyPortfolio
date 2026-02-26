import { motion } from 'framer-motion';
import styles from './About.module.css';
import aboutImg from '../../assets/about-img.jpg';

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

                <div className={styles.experienceStats}>
                    <div className={styles.statItem}>
                        <span className={styles.num}>20</span><span>+</span>
                        <span className={styles.text}>Years Experience</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.num}>8</span><span>+</span>
                        <span className={styles.text}>Years Gov Delivery</span>
                    </div>
                </div>

                <a href="#projects" className="btn">View My Work</a>
            </motion.div>

            <motion.div
                className={styles.aboutContent}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="heading">About <span className="highlight">Me</span></h2>
                <h3>Senior .Net Developer & Technical Lead</h3>
                <p>With over two decades of hands-on experience in the software industry, I specialize in the Microsoft technology stack. My journey has taken me from the early days of .NET to creating cloud-native applications on Azure using .NET Core. I am passionate about clean architecture, code quality, and mentoring the next generation of developers.</p>
                <p>I excel in translating complex business requirements into technical solutions that are robust, secure, and scalable. My expertise extends beyond coding to system design, database optimization, and CI/CD implementation.</p>

                <div className={styles.impactCard}>
                    <h4>Impact Highlights</h4>
                    <ul>
                        <li>Reduced release effort from hours to minutes by automating Azure DevOps YAML pipelines and environment approvals.</li>
                        <li>Improved API reliability using idempotency, retries/circuit-breaker patterns, and consistent error modeling (ProblemDetails).</li>
                        <li>Optimised SQL + EF Core hotspots (indexes, query tuning) improving P95 response times by ~20–40%.</li>
                        <li>Built production observability with AppInsights + Log Analytics dashboards, alerts, and end-to-end tracing.</li>
                    </ul>
                </div>

            </motion.div>
        </section>
    );
};

export default About;
