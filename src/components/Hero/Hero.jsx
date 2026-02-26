import { FaLinkedinIn, FaGithub, FaEnvelope, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ChipRow, Chip } from '../Chip/Chip';
import styles from './Hero.module.css';
import profileImg from '../../assets/profile.jpg';

const Hero = () => {
    return (
        <section className={styles.home} id="home">
            <motion.div
                className={styles.homeHeader}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3>Liju Pullely Kochappan</h3>
                <h1 className={styles.heroTitle}>Senior Full-Stack .NET Developer</h1>
            </motion.div>

            <div className={styles.homeBody}>
                <motion.div
                    className={styles.homeContent}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className={styles.heroDesc}>I build and modernise secure enterprise platforms using ASP.NET Core, Azure (App Services/Functions), SQL Server, and Azure DevOps—focused on reliability, security, performance, and clean API design.</p>

                    <div className={styles.chipContainer}>
                        <ChipRow>
                            <Chip text="C# • ASP.NET Core • EF Core • SQL Server" />
                            <Chip text="Azure App Services • Functions • Key Vault • AppInsights" />
                            <Chip text="Azure DevOps • YAML CI/CD • Git • Release governance" />
                        </ChipRow>
                    </div>

                    <div className={styles.socialMedia}>
                        <a href="https://www.linkedin.com/in/lijupk" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.seek.com.au/profiles/liju-pullelykochappan-KBCdZyCK0Q" target="_blank" rel="noopener noreferrer"><FaSearch /></a>
                        <a href="mailto:lijupk@gmail.com"><FaEnvelope /></a>
                    </div>

                    <div className={styles.btnBox}>
                        <a href="#projects" className={styles.btn}>View My Work</a>
                        <a href="https://drive.google.com/file/d/1g4VCKlFncP5OpktlfdAK8QzhfKTislKl/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.btn}>Download Resume (PDF)</a>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.homeImg}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.imgBox}>
                        <img src={profileImg} alt="Liju Pullely Kochappan" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
