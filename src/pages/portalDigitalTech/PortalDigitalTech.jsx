// // src/pages/projetos/PortalDigitalTech.jsx

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation, Trans } from 'react-i18next';

// import { 
//     SiFigma, 
//     SiReact, 
//     SiNextdotjs, 
//     SiTailwindcss, 
//     SiNodedotjs
// } from "react-icons/si";

// import './portalDigitalTech.scss';

// // --- Animações ---
// const staggerContainer = { 
//     hidden: { opacity: 0 }, 
//     visible: { opacity: 1, transition: { staggerChildren: 0.2 } } 
// };
// const fadeInUp = { 
//     hidden: { y: 40, opacity: 0 }, 
//     visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } 
// };

// const DigitalTechPage = () => {
//     const { t } = useTranslation();

//     return (
//         <motion.div
//             className="project-page"
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//         >
//             <motion.header className="project-hero" variants={fadeInUp}>
//                 <img src="/header_digital_tech.png" alt={t('digitaltech.hero.alt')} className="hero-image" />
//             </motion.header>

//             <main className="project-container">
//                 <motion.section className="project-title-section" variants={fadeInUp}>
//                     <h1>{t('digitaltech.meta.title')}</h1>
//                 </motion.section>

//                 <motion.section
//                     className="project-meta"
//                     variants={staggerContainer}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.5 }}
//                 >
//                     <motion.div className="meta-description" variants={fadeInUp}>
//                         <h2>{t('digitaltech.meta.about.title')}</h2>
//                         <p>{t('digitaltech.meta.about.description')}</p>
//                     </motion.div>
//                     <motion.div className="meta-details" variants={fadeInUp}>
//                         <div className="detail-item">
//                             <strong>{t('digitaltech.meta.role.label')}</strong>
//                             <span>{t('digitaltech.meta.role.value')}</span>
//                         </div>
//                         <div className="detail-item">
//                             <strong>{t('digitaltech.meta.date.label')}</strong>
//                             <span>{t('digitaltech.meta.date.value')}</span>
//                         </div>
//                         <div className="detail-item">
//                             <strong>{t('digitaltech.meta.tools.label')}</strong>
//                             <div className="tool-icons">
//                                 <SiFigma title="Figma" />
//                                 <SiReact title="React" />
//                                 <SiNextdotjs title="Next.js" />
//                                 <SiTailwindcss title="Tailwind CSS" />
//                                 <SiNodedotjs title="Node.js" />
//                             </div>
//                         </div>
//                     </motion.div>
//                 </motion.section>

//                 {/* --- CORREÇÃO APLICADA AQUI --- */}
//                 {/* O container .content-section agora é um motion.div que controla a animação dos filhos */}
//                 <motion.div 
//                     className="content-section"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.1 }}
//                     variants={staggerContainer}
//                 >
//                     <motion.section className="project-content" variants={fadeInUp}>
//                         <h2>{t('digitaltech.scenario.title')}</h2>
//                         <p>{t('digitaltech.scenario.description')}</p>
//                     </motion.section>

//                     <motion.section className="project-challenge" variants={fadeInUp}>
//                         <h2>{t('digitaltech.challenge.title')}</h2>
//                         <blockquote>{t('digitaltech.challenge.description')}</blockquote>
//                     </motion.section>

//                     <motion.section className="project-content" variants={fadeInUp}>
//                         <h2>{t('digitaltech.designProcess.title')}</h2>
//                         <p>{t('digitaltech.designProcess.description')}</p>
//                         <div className="image-gallery">
//                             <motion.img variants={fadeInUp} src="/double-diamond-design.jpg" alt={t('digitaltech.designProcess.imageAlts.discovery')} />
//                         </div>
//                     </motion.section>

//                     <motion.section className="project-content" variants={fadeInUp}>
//                         <h2>{t('digitaltech.research.title')}</h2>
//                         <div className="split-section">
//                             <motion.div className="split-item" variants={fadeInUp}>
//                                 <h3>{t('digitaltech.research.user.title')}</h3>
//                                 <p>{t('digitaltech.research.user.description')}</p>
//                             </motion.div>
//                             <motion.div className="split-item" variants={fadeInUp}>
//                                 <h3>{t('digitaltech.research.competitors.title')}</h3>
//                                 <p>{t('digitaltech.research.competitors.description')}</p>
//                             </motion.div>
//                         </div>
                        
//                         <div className="benchmarking-container">
//                             <table className="benchmarking-table">
//                                 <thead>
//                                     <tr>
//                                         <th>{t('digitaltech.benchmarking.header')}</th>
//                                         <th>{t('digitaltech.benchmarking.hotmart.name')}</th>
//                                         <th>{t('digitaltech.benchmarking.udemy.name')}</th>
//                                         <th>{t('digitaltech.benchmarking.alura.name')}</th>
//                                         <th className="your-project-col">{t('digitaltech.benchmarking.digitalTech.name')}</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr className="bench-row-branch">
//                                         <td className="row-header" data-label={t('digitaltech.benchmarking.rows.branch')}>{t('digitaltech.benchmarking.rows.branch')}</td>
//                                         <td data-label={t('digitaltech.benchmarking.hotmart.name')}>{t('digitaltech.benchmarking.hotmart.branch')}</td>
//                                         <td data-label={t('digitaltech.benchmarking.udemy.name')}>{t('digitaltech.benchmarking.udemy.branch')}</td>
//                                         <td data-label={t('digitaltech.benchmarking.alura.name')}>{t('digitaltech.benchmarking.alura.branch')}</td>
//                                         <td data-label={t('digitaltech.benchmarking.digitalTech.name')}>{t('digitaltech.benchmarking.digitalTech.branch')}</td>
//                                     </tr>
//                                     <tr className="bench-row-services">
//                                         <td className="row-header" data-label={t('digitaltech.benchmarking.rows.services')}>{t('digitaltech.benchmarking.rows.services')}</td>
//                                         <td data-label={t('digitaltech.benchmarking.hotmart.name')}><ul>
//                                             <li>{t('digitaltech.benchmarking.hotmart.services.0')}</li>
//                                             <li>{t('digitaltech.benchmarking.hotmart.services.1')}</li>
//                                             <li>{t('digitaltech.benchmarking.hotmart.services.2')}</li>
//                                         </ul></td>
//                                         <td data-label={t('digitaltech.benchmarking.udemy.name')}><ul>
//                                             <li>{t('digitaltech.benchmarking.udemy.services.0')}</li>
//                                             <li>{t('digitaltech.benchmarking.udemy.services.1')}</li>
//                                             <li>{t('digitaltech.benchmarking.udemy.services.2')}</li>
//                                         </ul></td>
//                                         <td data-label={t('digitaltech.benchmarking.alura.name')}><ul>
//                                             <li>{t('digitaltech.benchmarking.alura.services.0')}</li>
//                                             <li>{t('digitaltech.benchmarking.alura.services.1')}</li>
//                                             <li>{t('digitaltech.benchmarking.alura.services.2')}</li>
//                                         </ul></td>
//                                         <td data-label={t('digitaltech.benchmarking.digitalTech.name')}><ul>
//                                             <li>{t('digitaltech.benchmarking.digitalTech.services.0')}</li>
//                                             <li>{t('digitaltech.benchmarking.digitalTech.services.1')}</li>
//                                             <li>{t('digitaltech.benchmarking.digitalTech.services.2')}</li>
//                                         </ul></td>
//                                     </tr>
//                                     <tr className="bench-row-strengths">
//                                         <td className="row-header" data-label={t('digitaltech.benchmarking.rows.strengths')}>{t('digitaltech.benchmarking.rows.strengths')}</td>
//                                         <td data-label={t('digitaltech.benchmarking.hotmart.name')}><ul>
//                                             <li>{t('digitaltech.benchmarking.hotmart.strengths.0')}</li>
//                                             <li>{t('digitaltech.benchmarking.hotmart.strengths.1')}</li>
//                                         </ul></td>
//                                         <td data-label={t('digitaltech.benchmarking.udemy.name')}><ul>
//                                             <li>{t('digitaltech.benchmarking.udemy.strengths.0')}</li>
//                                             <li>{t('digitaltech.benchmarking.udemy.strengths.1')}</li>
//                                             <li>{t('digitaltech.benchmarking.udemy.strengths.2')}</li>
//                                         </ul></td>
//                                         <td data-label={t('digitaltech.benchmarking.alura.name')}><ul>
//                                             <li>{t('digitaltech.benchmarking.alura.strengths.0')}</li>
//                                             <li>{t('digitaltech.benchmarking.alura.strengths.1')}</li>
//                                             <li>{t('digitaltech.benchmarking.alura.strengths.2')}</li>
//                                         </ul></td>
//                                         <td data-label={t('digitaltech.benchmarking.digitalTech.name')}><ul>
//                                             <li>{t('digitaltech.benchmarking.digitalTech.strengths.0')}</li>
//                                             <li>{t('digitaltech.benchmarking.digitalTech.strengths.1')}</li>
//                                             <li>{t('digitaltech.benchmarking.digitalTech.strengths.2')}</li>
//                                         </ul></td>
//                                     </tr>
//                                     <tr className="bench-row-weaknesses">
//                                         <td className="row-header" data-label={t('digitaltech.benchmarking.rows.weaknesses')}>{t('digitaltech.benchmarking.rows.weaknesses')}</td>
//                                         <td data-label={t('digitaltech.benchmarking.hotmart.name')}><ul>
//                                             <li>{t('digitaltech.benchmarking.hotmart.weaknesses.0')}</li>
//                                             <li>{t('digitaltech.benchmarking.hotmart.weaknesses.1')}</li>
//                                         </ul></td>
//                                         <td data-label={t('digitaltech.benchmarking.udemy.name')}><ul>
//                                             <li>{t('digitaltech.benchmarking.udemy.weaknesses.0')}</li>
//                                             <li>{t('digitaltech.benchmarking.udemy.weaknesses.1')}</li>
//                                         </ul></td>
//                                         <td data-label={t('digitaltech.benchmarking.alura.name')}><ul>
//                                             <li>{t('digitaltech.benchmarking.alura.weaknesses.0')}</li>
//                                             <li>{t('digitaltech.benchmarking.alura.weaknesses.1')}</li>
//                                         </ul></td>
//                                         <td data-label={t('digitaltech.benchmarking.digitalTech.name')}><ul>
//                                             <li>{t('digitaltech.benchmarking.digitalTech.weaknesses.0')}</li>
//                                             <li>{t('digitaltech.benchmarking.digitalTech.weaknesses.1')}</li>
//                                         </ul></td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </motion.section>

//                     <motion.section className="project-content" variants={fadeInUp}>
//                         <h2>{t('digitaltech.solution.title')}</h2>
//                         <p>{t('digitaltech.solution.description')}</p>
//                         <motion.a href="#" target="_blank" rel="noopener noreferrer" className="cta-button figma-cta" variants={fadeInUp}>
//                             <SiFigma />
//                             {t('digitaltech.solution.cta')}
//                         </motion.a>
//                         <h3 className="table-title">{t('digitaltech.usabilityTest.title')}</h3>
//                         <div className="table-container">
//                              <table className="usability-table">
//                                 <thead>
//                                     <tr>
//                                         <th>{t('digitaltech.usabilityTest.headers.task')}</th>
//                                         <th>{t('digitaltech.usabilityTest.headers.result')}</th>
//                                         <th>{t('digitaltech.usabilityTest.headers.insights')}</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>{t('digitaltech.usabilityTest.rows.0.task')}</td>
//                                         <td className={t('digitaltech.usabilityTest.rows.0.result') === 'Sucesso' ? 'status-success' : 'status-difficulty'}>
//                                             {t('digitaltech.usabilityTest.rows.0.result')}
//                                         </td>
//                                         <td>{t('digitaltech.usabilityTest.rows.0.insights')}</td>
//                                     </tr>
//                                     <tr>
//                                         <td>{t('digitaltech.usabilityTest.rows.1.task')}</td>
//                                         <td className={t('digitaltech.usabilityTest.rows.1.result') === 'Sucesso' ? 'status-success' : 'status-difficulty'}>
//                                             {t('digitaltech.usabilityTest.rows.1.result')}
//                                         </td>
//                                         <td>
//                                             <Trans
//                                                 i18nKey={'digitaltech.usabilityTest.rows.1.insights'}
//                                                 components={{ 0: <strong />, 1: <br />, 2: <strong /> }}
//                                                 t={t}
//                                             />
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>{t('digitaltech.usabilityTest.rows.2.task')}</td>
//                                         <td className={t('digitaltech.usabilityTest.rows.2.result') === 'Sucesso' ? 'status-success' : 'status-difficulty'}>
//                                             {t('digitaltech.usabilityTest.rows.2.result')}
//                                         </td>
//                                         <td>
//                                             <Trans
//                                                 i18nKey={'digitaltech.usabilityTest.rows.2.insights'}
//                                                 components={{ 0: <strong />, 1: <br />, 2: <strong /> }}
//                                                 t={t}
//                                             />
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                          <div className="image-gallery">
//                             <motion.img src="/figma_prototype.png" alt={t('digitaltech.solution.finalImageAlt')} className="final-image" />
//                         </div>
//                     </motion.section>

//                     <motion.section className="project-content" variants={fadeInUp}>
//                         <h2>{t('digitaltech.results.title')}</h2>
//                         <div className="split-section">
//                             <motion.div className="split-item" variants={fadeInUp}>
//                                 <h3>{t('digitaltech.results.results.title')}</h3>
//                                 <p>{t('digitaltech.results.results.description')}</p>
//                             </motion.div>
//                             <motion.div className="split-item" variants={fadeInUp}>
//                                 <h3>{t('digitaltech.results.learnings.title')}</h3>
//                                 <p>{t('digitaltech.results.learnings.description')}</p>
//                             </motion.div>
//                         </div>
//                     </motion.section>
//                 </motion.div>
//             </main>
//         </motion.div>
//     );
// };

// export default DigitalTechPage;




import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";

import { 
    SiFigma, 
    SiReact, 
    SiNextdotjs, 
    SiTailwindcss, 
    SiNodedotjs
} from "react-icons/si";

import './portalDigitalTech.scss';
import BackTop from '../../components/backTop/BackTop';

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
    const { t, i18n } = useTranslation();
    const [activeSection, setActiveSection] = useState('');
    const sectionRefs = useRef({});

    // --- ADICIONADO: Função para trocar o idioma ---
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Itens do menu para navegação interna
    const menuItems = [
        { id: 'about', key: 'digitaltech.meta.about.title' },
        { id: 'scenario', key: 'digitaltech.scenario.title' },
        { id: 'challenge', key: 'digitaltech.challenge.title' },
        { id: 'design-process', key: 'digitaltech.designProcess.title' },
        { id: 'research', key: 'digitaltech.research.title' },
        { id: 'solution', key: 'digitaltech.solution.title' },
        { id: 'results', key: 'digitaltech.results.title' },
    ];

    // Efeito para observar as seções e atualizar o estado ativo
    // useEffect(() => {
    //     // const observerOptions = {
    //     //     root: null,
    //     //     rootMargin: '0px',
    //     //     threshold: 0.4, // A seção é considerada ativa quando 40% dela está visível
    //     // };

    //     const observerOptions = {
    //     root: null,
    //     // Define uma margem negativa no topo e na base.
    //     // A seção será "intersecting" quando entrar nesta área reduzida.
    //     // -150px no topo (para descontar um possível header fixo e dar um espaço)
    //     // -45% na base (para garantir que a ativação ocorra na metade superior da tela)
    //     rootMargin: '-150px 0px -45% 0px', 
    //     threshold: 0, // Ativa assim que qualquer pixel entrar na área definida pelo rootMargin
    // };

    //     const observerCallback = (entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 setActiveSection(entry.target.id);
    //             }
    //         });
    //     };

    //     const observer = new IntersectionObserver(observerCallback, observerOptions);

    //     const sections = document.querySelectorAll('.scroll-section');
    //     sections.forEach((section) => {
    //         observer.observe(section);
    //     });

    //     // Cleanup: parar de observar quando o componente for desmontado
    //     return () => {
    //         sections.forEach((section) => {
    //             observer.unobserve(section);
    //         });
    //     };
    // }, []);


//     // Substitua todo o seu useEffect por este
// useEffect(() => {
//     const observerOptions = {
//         root: null,
//         // 1. AJUSTE DE PRECISÃO:
//         // A "linha" de detecção agora é mais fina, reduzindo a chance de duas seções
//         // serem detectadas ao mesmo tempo.
//         rootMargin: '-150px 0px -85% 0px',
//         threshold: 0,
//     };

//     // 2. AJUSTE DE LÓGICA:
//     // Esta função agora é mais inteligente. Se várias seções estiverem na área,
//     // ela escolherá a que está mais perto do topo da tela.
//     const observerCallback = (entries) => {
//         // Encontra a entrada que está visível e mais alta na tela
//         const topEntry = entries
//             .filter(e => e.isIntersecting) // Pega apenas as que estão na área de detecção
//             .reduce((prev, current) => {   // Encontra a que tem o menor valor de 'top' (mais alta)
//                 return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current;
//             }, null); // Começa com nulo

//         // Se encontrou uma entrada válida, define a seção ativa
//         if (topEntry) {
//             setActiveSection(topEntry.target.id);
//         }
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     const sections = document.querySelectorAll('.scroll-section');

//     sections.forEach((section) => {
//         observer.observe(section);
//     });

//     // Cleanup
//     return () => {
//         sections.forEach((section) => {
//             observer.unobserve(section);
//         });
//     };
// }, []); // O array de dependências vazio está correto


// Substitua o useEffect inteiro por esta versão corrigida
useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: '-150px 0px -85% 0px',
        threshold: 0,
    };

    const observerCallback = (entries) => {
        // Filtra para pegar apenas as seções que estão na área de detecção
        const intersectingEntries = entries.filter(e => e.isIntersecting);

        // Se existir alguma seção na área...
        if (intersectingEntries.length > 0) {
            // ...pega a que está mais no topo da tela (menor valor de `boundingClientRect.top`)
            const topEntry = intersectingEntries.reduce((prev, current) => {
                return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current;
            });

            // E define como a seção ativa
            setActiveSection(topEntry.target.id);
        }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.scroll-section');

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Cleanup
    return () => {
        sections.forEach((section) => {
            observer.unobserve(section);
        });
    };
}, []);


    return (
        <motion.div
            className="project-page"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <motion.header className="project-hero" variants={fadeInUp} id="topo">
                <img src="/header_digital_tech.png" alt={t('digitaltech.hero.alt')} className="hero-image" />
            </motion.header>

            <div className="project-body">

            {/* --- NOVO CONTAINER PARA O LAYOUT COM MENU LATERAL --- */}
            <div className="page-with-sidebar">
                <motion.nav className="project-sidebar" variants={fadeInUp}>
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <a 
                                    href={`#${item.id}`}
                                    className={activeSection === item.id ? 'active' : ''}
                                >
                                    {t(item.key)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* --- ADICIONADO: Seletor de Idiomas com Bandeiras --- */}
                    <div className="language-switcher">
                        <ReactCountryFlag
                            countryCode="DE"
                            svg
                            title="Deutsch"
                            onClick={() => changeLanguage('de')}
                            className={`flag-icon ${i18n.language === 'de' ? 'active' : 'inactive'}`}
                        />
                        <ReactCountryFlag
                            countryCode="BR"
                            svg
                            title="Português"
                            onClick={() => changeLanguage('pt')}
                            className={`flag-icon ${i18n.language.startsWith('pt') ? 'active' : 'inactive'}`}
                        />
                        <ReactCountryFlag
                            countryCode="US"
                            svg
                            title="English"
                            onClick={() => changeLanguage('en')}
                            className={`flag-icon ${i18n.language.startsWith('en') ? 'active' : 'inactive'}`}
                        />
                    </div>
                </motion.nav>

                <main className="project-container">


                    {/* --- ADICIONADO: Seletor de Idiomas com Bandeiras --- */}
                    <div className="language-switcher">
                        <ReactCountryFlag
                            countryCode="DE"
                            svg
                            title="Deutsch"
                            onClick={() => changeLanguage('de')}
                            className={`flag-icon ${i18n.language === 'de' ? 'active' : 'inactive'}`}
                        />
                        <ReactCountryFlag
                            countryCode="BR"
                            svg
                            title="Português"
                            onClick={() => changeLanguage('pt')}
                            className={`flag-icon ${i18n.language.startsWith('pt') ? 'active' : 'inactive'}`}
                        />
                        <ReactCountryFlag
                            countryCode="US"
                            svg
                            title="English"
                            onClick={() => changeLanguage('en')}
                            className={`flag-icon ${i18n.language.startsWith('en') ? 'active' : 'inactive'}`}
                        />
                    </div>
                    <motion.section className="project-title-section" variants={fadeInUp}>
                        <h1>{t('digitaltech.meta.title')}</h1>
                    </motion.section>

                    <motion.section
                    id="about"
                        className="project-meta scroll-section"
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
                    
                    <motion.div 
                        className="content-section"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        {/* Adicionado id e classe .scroll-section para o observer */}
                        <motion.section id="scenario" className="project-content scroll-section" variants={fadeInUp}>
                            <h2>{t('digitaltech.scenario.title')}</h2>
                            <p>{t('digitaltech.scenario.description')}</p>
                        </motion.section>

                        <motion.section id="challenge" className="project-challenge scroll-section" variants={fadeInUp}>
                            <h2>{t('digitaltech.challenge.title')}</h2>
                            <blockquote>{t('digitaltech.challenge.description')}</blockquote>
                        </motion.section>

                        <motion.section id="design-process" className="project-content scroll-section" variants={fadeInUp}>
                            <h2>{t('digitaltech.designProcess.title')}</h2>
                            <p>{t('digitaltech.designProcess.description')}</p>
                            <div className="image-gallery">
                                <motion.img variants={fadeInUp} src="/double-diamond-design.jpg" alt={t('digitaltech.designProcess.imageAlts.discovery')} />
                            </div>
                        </motion.section>

                        <motion.section id="research" className="project-content scroll-section" variants={fadeInUp}>
                            <h2>{t('digitaltech.research.title')}</h2>
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

                        <motion.section id="solution" className="project-content scroll-section" variants={fadeInUp}>
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
                                <motion.img 
                                src="/figma_prototype.png" alt={t('digitaltech.solution.finalImageAlt')} className="final-image" />
                            </div>
                        </motion.section>

                        <motion.section id="results" className="project-content scroll-section" variants={fadeInUp}>
                            <h2>{t('digitaltech.results.title')}</h2>
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
                    </motion.div>
                </main>
            </div>
            </div>
            <BackTop />
        </motion.div>

        
    );
};

export default DigitalTechPage;