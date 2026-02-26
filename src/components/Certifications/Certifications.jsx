import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import styles from './Certifications.module.css';

const Certifications = () => {
    return (
        <section className={styles.certifications} id="certifications">
            <h2 className="heading">My <span className="highlight">Certifications</span></h2>

            <div className={styles.certificationsContainer}>
                {[
                    {
                        title: 'Certified SAFe® 5 Practitioner',
                        issuer: 'Scaled Agile, Inc.'
                    },
                    {
                        title: 'MCTS (.NET Framework 2.0 – Windows Apps)',
                        issuer: 'Microsoft'
                    },
                    {
                        title: 'MCP (Web Apps with C# / Visual Studio)',
                        issuer: 'Microsoft'
                    }
                ].map((cert, index) => (
                    <motion.div
                        className={styles.certBox}
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ translateY: -10 }}
                    >
                        <div className={styles.icon}>
                            <FaCertificate />
                        </div>
                        <h3>{cert.title}</h3>
                        <p>{cert.issuer}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
