import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
    const projectList = [
        {
            title: 'VSLConnect - DEWR',
            desc: 'Delivered .NET Core APIs and Vue.js components across Student, Provider, and Course modules. Engineered scalable data migration support using Azure Functions.',
            tech: '.NET Core, Vue.js, Azure Functions, SQL',
            link: 'https://www.dewr.gov.au/vet-student-loans' // URL Link Placeholder
        },
        {
            title: 'CDR Conformance Suite - ACCC',
            desc: 'Built an automated Conformance Test Suite in .NET Core API + React to validate financial entities against CDR/FAPI security standards. Implemented Playwright automation.',
            tech: '.NET Core, React, Playwright, Azure DevOps',
            link: 'https://www.cdr.gov.au/' // URL Link Placeholder
        },
        {
            title: 'ServiceNow/JIRA Integration - ATO',
            desc: 'Built .NET Core Web APIs to automate ticket synchronization between ATO ServiceNow and MacGov JIRA, streamlining cross-platform workflows.',
            tech: '.NET Core API, REST, ServiceNow, JIRA'
        },
        {
            title: 'Defence Jobs Portal',
            desc: 'Improved defencejobs.gov.au on .NET/Sitecore. Built new campaign features with C# REST APIs and streamlined reporting using Sitecore PowerShell.',
            tech: '.NET, Sitecore, C#, SQL Server',
            link: 'https://www.defencejobs.gov.au' // URL Link Placeholder
        },
        {
            title: 'AICIS Online Forms',
            desc: 'Delivered modern online forms (Razor Pages, Bootstrap) and integrated .NET Web API with Dynamics 365 CRM across hybrid cloud environments.',
            tech: '.NET Web API, Dynamics 365, Azure, Bootstrap',
            link: 'https://www.industrialchemicals.gov.au/' // URL Link Placeholder
        },
        {
            title: 'CommSec Trading Apps',
            desc: 'Maintained high-traffic web apps. Optimized data performance with SQL Server and engineered SSIS packages for back-office ETL.',
            tech: 'ASP.NET, C#, SQL Server, SSIS',
            link: 'https://www.commsec.com.au/' // URL Link Placeholder
        }
    ];

    return (
        <section className={styles.portfolio} id="projects">
            <h2 className="heading">Latest <span className="highlight">Projects</span></h2>

            <div className={styles.portfolioContainer}>
                {projectList.map((project, index) => (
                    <motion.div
                        className={styles.portfolioBox}
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <img src={`https://placehold.co/600x400/1a1a1a/FFF?text=${project.title.replace(/ /g, '+')}`} alt={project.title} />
                        <div className={styles.portfolioLayer}>
                            <h4>{project.title}</h4>
                            <p>{project.desc}</p>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem', fontSize: '0.9rem' }}>{project.tech}</p>
                            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
