import { motion } from 'framer-motion';
import { FaMicrosoft, FaCloud, FaDatabase, FaProjectDiagram, FaJs, FaUsersCog } from 'react-icons/fa';
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <section className={styles.skills} id="skills">
            <h2 className="heading">My <span className="highlight">Skills</span></h2>

            <div className={styles.skillsContainer}>
                {[
                    {
                        icon: <FaMicrosoft />, title: '.NET & APIs', list: [
                            'ASP.NET Core Web API, Minimal APIs',
                            'REST: versioning, pagination, ProblemDetails',
                            'Auth: OAuth2/OIDC, JWT, claims/roles',
                            'Resilience: idempotency, retries, correlation IDs'
                        ]
                    },
                    {
                        icon: <FaCloud />, title: 'Azure & DevOps', list: [
                            'App Services, Azure Functions, Key Vault, Storage',
                            'AppInsights + Log Analytics: dashboards, alerts',
                            'Azure DevOps YAML pipelines, environments, approvals',
                            'Secrets/config strategy across environments'
                        ]
                    },
                    {
                        icon: <FaDatabase />, title: 'Data & Performance', list: [
                            'SQL Server indexing, execution plans, tuning',
                            'EF Core performance: tracking, batching, compiled queries',
                            'Transactions, concurrency, deadlock mitigation',
                            'Caching strategies where appropriate'
                        ]
                    },
                    {
                        icon: <FaProjectDiagram />, title: 'Architecture', list: [
                            'API-first integration strategy, gateway patterns',
                            'Clean Architecture, SOLID, pragmatic DDD boundaries',
                            'Event-driven patterns (when applicable)',
                            'Documentation: ADRs, OpenAPI/Swagger'
                        ]
                    },
                    {
                        icon: <FaJs />, title: 'Frontend', list: [
                            'React/Vue experience, modern JS/TS',
                            'API integration, state management basics',
                            'Accessible UI, responsive design',
                            'Performance minded UI (lazy load, bundle hygiene)'
                        ]
                    },
                    {
                        icon: <FaUsersCog />, title: 'Leadership', list: [
                            'Tech lead across Agile (Scrum/Kanban/SAFe)',
                            'Mentoring, peer reviews, coding standards',
                            'Stakeholder communication & backlog shaping',
                            'Delivery ownership, quality gates'
                        ]
                    }
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
                        <ul>
                            {skill.list.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
