import { motion } from 'framer-motion';
import { FaMicrosoft, FaCloud, FaDatabase, FaProjectDiagram, FaJs, FaUsersCog } from 'react-icons/fa';
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <section className={styles.skills} id="skills">
            <h2 className="heading">My <span className="highlight">Skills</span></h2>

            <div className={styles.skillsContainer}>
                {[
                    { icon: <FaMicrosoft />, title: '.NET & C#', list: '.NET Core, ASP.NET MVC, Web API, WPF, WinForms, Entity Framework' },
                    { icon: <FaCloud />, title: 'Cloud & DevOps', list: 'Azure Services, Docker, Kubernetes, CI/CD Pipelines (Azure DevOps, GitHub Actions)' },
                    { icon: <FaDatabase />, title: 'Database', list: 'SQL Server, PostgreSQL, MongoDB, Database Design & Optimization' },
                    { icon: <FaProjectDiagram />, title: 'Architecture', list: 'Microservices, Clean Architecture, Domain-Driven Design (DDD), SOLID Principles' },
                    { icon: <FaJs />, title: 'Frontend', list: 'HTML5, CSS3, JavaScript, Angular, React, Vue.js (Basic)' },
                    { icon: <FaUsersCog />, title: 'Leadership', list: 'Team Mentoring, Agile/Scrum, Code Reviews, Technical Strategy' }
                ].map((skill, index) => (
                    <motion.div
                        className={styles.skillBox}
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ translateY: -10 }}
                    >
                        <div className={styles.icon}>{skill.icon}</div>
                        <h3>{skill.title}</h3>
                        <p>{skill.list}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
