// src/pages/projetos/PortalDigitalTech.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

import { 
    SiFigma, 
    SiReact, 
    SiNextdotjs, 
    SiTailwindcss, 
    SiNodedotjs
} from "react-icons/si";

import './portalDigitalTech.scss';

// --- Animações ---
const staggerContainer = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } } 
};
const fadeInUp = { 
    hidden: { y: 40, opacity: 0 }, 
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } 
};

const DigitalTechPage = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            className="project-page"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <motion.header className="project-hero" variants={fadeInUp}>
                <img src="/header_digital_tech.png" alt={t('digitaltech.hero.alt')} className="hero-image" />
            </motion.header>

            <main className="project-container">
                <motion.section className="project-title-section" variants={fadeInUp}>
                    <h1>{t('digitaltech.meta.title')}</h1>
                </motion.section>

                <motion.section
                    className="project-meta"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div className="meta-description" variants={fadeInUp}>
                        <h2>{t('digitaltech.meta.about.title')}</h2>
                        <p>{t('digitaltech.meta.about.description')}</p>
                    </motion.div>
                    <motion.div className="meta-details" variants={fadeInUp}>
                        <div className="detail-item">
                            <strong>{t('digitaltech.meta.role.label')}</strong>
                            <span>{t('digitaltech.meta.role.value')}</span>
                        </div>
                        <div className="detail-item">
                            <strong>{t('digitaltech.meta.date.label')}</strong>
                            <span>{t('digitaltech.meta.date.value')}</span>
                        </div>
                        <div className="detail-item">
                            <strong>{t('digitaltech.meta.tools.label')}</strong>
                            <div className="tool-icons">
                                <SiFigma title="Figma" />
                                <SiReact title="React" />
                                <SiNextdotjs title="Next.js" />
                                <SiTailwindcss title="Tailwind CSS" />
                                <SiNodedotjs title="Node.js" />
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                <div className="content-section">
                    <motion.section className="project-content" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                        <h2>{t('digitaltech.scenario.title')}</h2>
                        <p>{t('digitaltech.scenario.description')}</p>
                    </motion.section>

                    <motion.section className="project-challenge" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                         <h2>{t('digitaltech.challenge.title')}</h2>
                        <blockquote>{t('digitaltech.challenge.description')}</blockquote>
                    </motion.section>

                    <motion.section className="project-content" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={staggerContainer}>
                        <motion.h2 variants={fadeInUp}>{t('digitaltech.designProcess.title')}</motion.h2>
                        <motion.p variants={fadeInUp}>{t('digitaltech.designProcess.description')}</motion.p>
                        <div className="image-gallery">
                            <motion.img variants={fadeInUp} src="/double-diamond-design.jpg" alt={t('digitaltech.designProcess.imageAlts.discovery')} />
                        </div>
                    </motion.section>

                    <motion.section className="project-content" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={staggerContainer}>
                        <motion.h2 variants={fadeInUp}>{t('digitaltech.research.title')}</motion.h2>
                        <div className="split-section">
                            <motion.div className="split-item" variants={fadeInUp}>
                                <h3>{t('digitaltech.research.user.title')}</h3>
                                <p>{t('digitaltech.research.user.description')}</p>
                            </motion.div>
                            <motion.div className="split-item" variants={fadeInUp}>
                                <h3>{t('digitaltech.research.competitors.title')}</h3>
                                <p>{t('digitaltech.research.competitors.description')}</p>
                            </motion.div>
                        </div>
                        
                        <div className="benchmarking-container">
                            <table className="benchmarking-table">
                                <thead>
                                    <tr>
                                        <th>{t('digitaltech.benchmarking.header')}</th>
                                        <th>{t('digitaltech.benchmarking.hotmart.name')}</th>
                                        <th>{t('digitaltech.benchmarking.udemy.name')}</th>
                                        <th>{t('digitaltech.benchmarking.alura.name')}</th>
                                        <th className="your-project-col">{t('digitaltech.benchmarking.digitalTech.name')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Adicionando classes para controle no CSS mobile */}
                                    <tr className="bench-row-branch">
                                        <td className="row-header" data-label={t('digitaltech.benchmarking.rows.branch')}>{t('digitaltech.benchmarking.rows.branch')}</td>
                                        <td data-label={t('digitaltech.benchmarking.hotmart.name')}>{t('digitaltech.benchmarking.hotmart.branch')}</td>
                                        <td data-label={t('digitaltech.benchmarking.udemy.name')}>{t('digitaltech.benchmarking.udemy.branch')}</td>
                                        <td data-label={t('digitaltech.benchmarking.alura.name')}>{t('digitaltech.benchmarking.alura.branch')}</td>
                                        <td data-label={t('digitaltech.benchmarking.digitalTech.name')}>{t('digitaltech.benchmarking.digitalTech.branch')}</td>
                                    </tr>
                                    <tr className="bench-row-services">
                                        <td className="row-header" data-label={t('digitaltech.benchmarking.rows.services')}>{t('digitaltech.benchmarking.rows.services')}</td>
                                        <td data-label={t('digitaltech.benchmarking.hotmart.name')}><ul>
                                            <li>{t('digitaltech.benchmarking.hotmart.services.0')}</li>
                                            <li>{t('digitaltech.benchmarking.hotmart.services.1')}</li>
                                            <li>{t('digitaltech.benchmarking.hotmart.services.2')}</li>
                                        </ul></td>
                                        <td data-label={t('digitaltech.benchmarking.udemy.name')}><ul>
                                            <li>{t('digitaltech.benchmarking.udemy.services.0')}</li>
                                            <li>{t('digitaltech.benchmarking.udemy.services.1')}</li>
                                            <li>{t('digitaltech.benchmarking.udemy.services.2')}</li>
                                        </ul></td>
                                        <td data-label={t('digitaltech.benchmarking.alura.name')}><ul>
                                            <li>{t('digitaltech.benchmarking.alura.services.0')}</li>
                                            <li>{t('digitaltech.benchmarking.alura.services.1')}</li>
                                            <li>{t('digitaltech.benchmarking.alura.services.2')}</li>
                                        </ul></td>
                                        <td data-label={t('digitaltech.benchmarking.digitalTech.name')}><ul>
                                            <li>{t('digitaltech.benchmarking.digitalTech.services.0')}</li>
                                            <li>{t('digitaltech.benchmarking.digitalTech.services.1')}</li>
                                            <li>{t('digitaltech.benchmarking.digitalTech.services.2')}</li>
                                        </ul></td>
                                    </tr>
                                    <tr className="bench-row-strengths">
                                        <td className="row-header" data-label={t('digitaltech.benchmarking.rows.strengths')}>{t('digitaltech.benchmarking.rows.strengths')}</td>
                                        <td data-label={t('digitaltech.benchmarking.hotmart.name')}><ul>
                                            <li>{t('digitaltech.benchmarking.hotmart.strengths.0')}</li>
                                            <li>{t('digitaltech.benchmarking.hotmart.strengths.1')}</li>
                                        </ul></td>
                                        <td data-label={t('digitaltech.benchmarking.udemy.name')}><ul>
                                            <li>{t('digitaltech.benchmarking.udemy.strengths.0')}</li>
                                            <li>{t('digitaltech.benchmarking.udemy.strengths.1')}</li>
                                            <li>{t('digitaltech.benchmarking.udemy.strengths.2')}</li>
                                        </ul></td>
                                        <td data-label={t('digitaltech.benchmarking.alura.name')}><ul>
                                            <li>{t('digitaltech.benchmarking.alura.strengths.0')}</li>
                                            <li>{t('digitaltech.benchmarking.alura.strengths.1')}</li>
                                            <li>{t('digitaltech.benchmarking.alura.strengths.2')}</li>
                                        </ul></td>
                                        <td data-label={t('digitaltech.benchmarking.digitalTech.name')}><ul>
                                            <li>{t('digitaltech.benchmarking.digitalTech.strengths.0')}</li>
                                            <li>{t('digitaltech.benchmarking.digitalTech.strengths.1')}</li>
                                            <li>{t('digitaltech.benchmarking.digitalTech.strengths.2')}</li>
                                        </ul></td>
                                    </tr>
                                    <tr className="bench-row-weaknesses">
                                        <td className="row-header" data-label={t('digitaltech.benchmarking.rows.weaknesses')}>{t('digitaltech.benchmarking.rows.weaknesses')}</td>
                                        <td data-label={t('digitaltech.benchmarking.hotmart.name')}><ul>
                                            <li>{t('digitaltech.benchmarking.hotmart.weaknesses.0')}</li>
                                            <li>{t('digitaltech.benchmarking.hotmart.weaknesses.1')}</li>
                                        </ul></td>
                                        <td data-label={t('digitaltech.benchmarking.udemy.name')}><ul>
                                            <li>{t('digitaltech.benchmarking.udemy.weaknesses.0')}</li>
                                            <li>{t('digitaltech.benchmarking.udemy.weaknesses.1')}</li>
                                        </ul></td>
                                        <td data-label={t('digitaltech.benchmarking.alura.name')}><ul>
                                            <li>{t('digitaltech.benchmarking.alura.weaknesses.0')}</li>
                                            <li>{t('digitaltech.benchmarking.alura.weaknesses.1')}</li>
                                        </ul></td>
                                        <td data-label={t('digitaltech.benchmarking.digitalTech.name')}><ul>
                                            <li>{t('digitaltech.benchmarking.digitalTech.weaknesses.0')}</li>
                                            <li>{t('digitaltech.benchmarking.digitalTech.weaknesses.1')}</li>
                                        </ul></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.section>

                    <motion.section className="project-content" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}>
                        <h2>{t('digitaltech.solution.title')}</h2>
                        <p>{t('digitaltech.solution.description')}</p>
                        <motion.a href="#" target="_blank" rel="noopener noreferrer" className="cta-button figma-cta" variants={fadeInUp}>
                            <SiFigma />
                            {t('digitaltech.solution.cta')}
                        </motion.a>
                        <h3 className="table-title">{t('digitaltech.usabilityTest.title')}</h3>
                        <div className="table-container">
                             <table className="usability-table">
                                <thead>
                                    <tr>
                                        <th>{t('digitaltech.usabilityTest.headers.task')}</th>
                                        <th>{t('digitaltech.usabilityTest.headers.result')}</th>
                                        <th>{t('digitaltech.usabilityTest.headers.insights')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t('digitaltech.usabilityTest.rows.0.task')}</td>
                                        <td className={t('digitaltech.usabilityTest.rows.0.result') === 'Sucesso' ? 'status-success' : 'status-difficulty'}>
                                            {t('digitaltech.usabilityTest.rows.0.result')}
                                        </td>
                                        <td>{t('digitaltech.usabilityTest.rows.0.insights')}</td>
                                    </tr>
                                    <tr>
                                        <td>{t('digitaltech.usabilityTest.rows.1.task')}</td>
                                        <td className={t('digitaltech.usabilityTest.rows.1.result') === 'Sucesso' ? 'status-success' : 'status-difficulty'}>
                                            {t('digitaltech.usabilityTest.rows.1.result')}
                                        </td>
                                        <td>
                                            <Trans
                                                i18nKey={'digitaltech.usabilityTest.rows.1.insights'}
                                                components={{ 0: <strong />, 1: <br />, 2: <strong /> }}
                                                t={t}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t('digitaltech.usabilityTest.rows.2.task')}</td>
                                        <td className={t('digitaltech.usabilityTest.rows.2.result') === 'Sucesso' ? 'status-success' : 'status-difficulty'}>
                                            {t('digitaltech.usabilityTest.rows.2.result')}
                                        </td>
                                        <td>
                                            <Trans
                                                i18nKey={'digitaltech.usabilityTest.rows.2.insights'}
                                                components={{ 0: <strong />, 1: <br />, 2: <strong /> }}
                                                t={t}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                         <div className="image-gallery">
                            <motion.img src="/figma_prototype.png" alt={t('digitaltech.solution.finalImageAlt')} className="final-image" />
                        </div>
                    </motion.section>

                    <motion.section className="project-content" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={staggerContainer}>
                        <motion.h2 variants={fadeInUp}>{t('digitaltech.results.title')}</motion.h2>
                        <div className="split-section">
                            <motion.div className="split-item" variants={fadeInUp}>
                                <h3>{t('digitaltech.results.results.title')}</h3>
                                <p>{t('digitaltech.results.results.description')}</p>
                            </motion.div>
                            <motion.div className="split-item" variants={fadeInUp}>
                                <h3>{t('digitaltech.results.learnings.title')}</h3>
                                <p>{t('digitaltech.results.learnings.description')}</p>
                            </motion.div>
                        </div>
                    </motion.section>
                </div>
            </main>
        </motion.div>
    );
};

export default DigitalTechPage;