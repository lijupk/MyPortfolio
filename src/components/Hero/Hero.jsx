import { useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import profileImg from '../../assets/profile.jpg';

const Hero = () => {
    return (
        <section className={styles.home} id="home">
            <motion.div
                className={styles.homeContent}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h3>Hello, I{"'"}m</h3>
                <h1>Liju Pullely Kochappan</h1>
                <h3>
                    I am a{' '}
                    <span className={styles.multipleText}>
                        <ReactTyped
                            strings={['Senior .Net Developer', 'Technical Lead', 'Problem Solver', 'Team Leader']}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={1000}
                            loop
                        />
                    </span>
                </h3>
                <p>Senior .Net Developer with 20+ years of experience in designing and developing scalable, high-performance enterprise applications. Expert in modernizing legacy systems and leading technical teams.</p>

                <div className={styles.socialMedia}>
                    <a href="https://www.linkedin.com/in/lijupk" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.seek.com.au/profiles/liju-pullelykochappan-KBCdZyCK0Q" target="_blank" rel="noopener noreferrer"><FaSearch /></a>
                    <a href="mailto:lijupk@gmail.com"><FaEnvelope /></a>
                </div>

                <div className={styles.btnBox}>
                    <a href="#projects" className={styles.btn}>View My Work</a>
                    <a href="https://drive.google.com/file/d/1g4VCKlFncP5OpktlfdAK8QzhfKTislKl/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.btn}>Resume</a>
                </div>
            </motion.div>

            <motion.div
                className={styles.homeImg}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className={styles.imgBox}>
                    <img src={profileImg} alt="Liju Pullely Kochappan" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
