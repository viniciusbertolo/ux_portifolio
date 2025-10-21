import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Ou o ícone que preferir

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

    const navigate = useNavigate();

    // Lógica para controlar o estado do iframe
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };


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
                        <div className="mb-6"> {/* Margem para separar do menu */}
                            <button
                                onClick={() => navigate(-1)} // A mágica acontece aqui!
                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <ArrowLeft size={18} />
                                <span>Voltar</span>
                            </button>
                        </div>
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
                                                <th>{t('digitaltech.benchmarking.udemy.name')}</th>
                                                <th>{t('digitaltech.benchmarking.alura.name')}</th>
                                                <th className="your-project-col">{t('digitaltech.benchmarking.digitalTech.name')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bench-row-branch">
                                                <td className="row-header" data-label={t('digitaltech.benchmarking.rows.branch')}>{t('digitaltech.benchmarking.rows.branch')}</td>
                                                <td data-label={t('digitaltech.benchmarking.udemy.name')}>{t('digitaltech.benchmarking.udemy.branch')}</td>
                                                <td data-label={t('digitaltech.benchmarking.alura.name')}>{t('digitaltech.benchmarking.alura.branch')}</td>
                                                <td data-label={t('digitaltech.benchmarking.digitalTech.name')}>{t('digitaltech.benchmarking.digitalTech.branch')}</td>
                                            </tr>
                                            <tr className="bench-row-services">
                                                <td className="row-header" data-label={t('digitaltech.benchmarking.rows.services')}>{t('digitaltech.benchmarking.rows.services')}</td>
                                                <td data-label={t('digitaltech.benchmarking.udemy.name')}>
                                                    <ul>
                                                        <li>{t('digitaltech.benchmarking.udemy.services.0')}</li>
                                                        <li>{t('digitaltech.benchmarking.udemy.services.1')}</li>
                                                        <li>{t('digitaltech.benchmarking.udemy.services.2')}</li>
                                                    </ul>
                                                </td>
                                                <td data-label={t('digitaltech.benchmarking.alura.name')}>
                                                    <ul>
                                                        <li>{t('digitaltech.benchmarking.alura.services.0')}</li>
                                                        <li>{t('digitaltech.benchmarking.alura.services.1')}</li>
                                                        <li>{t('digitaltech.benchmarking.alura.services.2')}</li>
                                                    </ul>
                                                </td>
                                                <td data-label={t('digitaltech.benchmarking.digitalTech.name')}>
                                                    <ul>
                                                        <li>{t('digitaltech.benchmarking.digitalTech.services.0')}</li>
                                                        <li>{t('digitaltech.benchmarking.digitalTech.services.1')}</li>
                                                        <li>{t('digitaltech.benchmarking.digitalTech.services.2')}</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr className="bench-row-strengths">
                                                <td className="row-header" data-label={t('digitaltech.benchmarking.rows.strengths')}>{t('digitaltech.benchmarking.rows.strengths')}</td>
                                                <td data-label={t('digitaltech.benchmarking.udemy.name')}>
                                                    <ul>
                                                        <li>{t('digitaltech.benchmarking.udemy.strengths.0')}</li>
                                                        <li>{t('digitaltech.benchmarking.udemy.strengths.1')}</li>
                                                    </ul>
                                                </td>
                                                <td data-label={t('digitaltech.benchmarking.alura.name')}>
                                                    <ul>
                                                        <li>{t('digitaltech.benchmarking.alura.strengths.0')}</li>
                                                        <li>{t('digitaltech.benchmarking.alura.strengths.1')}</li>
                                                    </ul>
                                                </td>
                                                <td data-label={t('digitaltech.benchmarking.digitalTech.name')}>
                                                    <ul>
                                                        <li>{t('digitaltech.benchmarking.digitalTech.strengths.0')}</li>
                                                        <li>{t('digitaltech.benchmarking.digitalTech.strengths.1')}</li>
                                                        <li>{t('digitaltech.benchmarking.digitalTech.strengths.2')}</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr className="bench-row-weaknesses">
                                                <td className="row-header" data-label={t('digitaltech.benchmarking.rows.weaknesses')}>{t('digitaltech.benchmarking.rows.weaknesses')}</td>
                                                <td data-label={t('digitaltech.benchmarking.udemy.name')}>
                                                    <ul>
                                                        <li>{t('digitaltech.benchmarking.udemy.weaknesses.0')}</li>
                                                        <li>{t('digitaltech.benchmarking.udemy.weaknesses.1')}</li>
                                                    </ul>
                                                </td>
                                                <td data-label={t('digitaltech.benchmarking.alura.name')}>
                                                    <ul>
                                                        <li>{t('digitaltech.benchmarking.alura.weaknesses.0')}</li>
                                                        <li>{t('digitaltech.benchmarking.alura.weaknesses.1')}</li>
                                                    </ul>
                                                </td>
                                                <td data-label={t('digitaltech.benchmarking.digitalTech.name')}>
                                                    <ul>
                                                        <li>{t('digitaltech.benchmarking.digitalTech.weaknesses.0')}</li>
                                                        <li>{t('digitaltech.benchmarking.digitalTech.weaknesses.1')}</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </motion.section>

                            <motion.section id="solution" className="project-content scroll-section" variants={fadeInUp}>
                                <h2>{t('digitaltech.solution.title')}</h2>
                                <p>{t('digitaltech.solution.description')}</p>
                                {/* <iframe
                                    style={{
                                        border: 'none',
                                        width: '100%',
                                        height: '70vh'
                                    }}
                                    src="https://embed.figma.com/proto/EzUgyzL8JfAUo8V7CgzBIW/AcademiaX-Portifolio?page-id=27%3A901&node-id=27-9299&viewport=148%2C60%2C0.04&scaling=scale-down-width&content-scaling=fixed&embed-host=share"
                                    allowFullScreen // <-- Alteração aqui
                                >
                                </iframe> */}

                                <div className="figma-embed-container">
                                    {/* Indicador de Carregamento (Spinner) */}
                                    {isLoading && (
                                        <div className="loading-overlay">
                                            <div className="spinner"></div>
                                        </div>
                                    )}

                                    {/* Mensagem de Erro */}
                                    {hasError && (
                                        <div className="error-overlay">
                                            <p>Não foi possível carregar o protótipo.</p>
                                        </div>
                                    )}

                                    {/* O Iframe */}
                                    <iframe
                                        className="figma-iframe"
                                        style={{ visibility: isLoading || hasError ? 'hidden' : 'visible' }}
                                        src="https://embed.figma.com/proto/EzUgyzL8JfAUo8V7CgzBIW/AcademiaX-Portifolio?page-id=27%3A901&node-id=27-9299&viewport=148%2C60%2C0.04&scaling=scale-down-width&content-scaling=fixed&embed-host=share"
                                        onLoad={handleLoad}
                                        onError={handleError}
                                        allowFullScreen
                                    ></iframe>
                                </div>


                                <motion.a href="https://www.figma.com/design/EzUgyzL8JfAUo8V7CgzBIW/AcademiaX-Portifolio?node-id=27-901&t=KVkxGYzJH6i2xWYy-1" target="_blank" rel="noopener noreferrer" className="cta-button figma-cta" variants={fadeInUp}>
                                    <SiFigma />
                                    {t('digitaltech.solution.cta')}
                                </motion.a>
                                <h3 className="table-title">{t('digitaltech.usabilityTest.title')}</h3>
                                <div className="table-container">
                                    {/* <table className="usability-table">
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
                                    </table> */}

                                    <table className="usability-table">
                                        <thead>
                                            <tr>
                                                <th>{t('digitaltech.usabilityTest.headers.task')}</th>
                                                <th>{t('digitaltech.usabilityTest.headers.result')}</th>
                                                <th>{t('digitaltech.usabilityTest.headers.problem')}</th> {/* NOVA COLUNA */}
                                                <th>{t('digitaltech.usabilityTest.headers.solution')}</th> {/* NOVA COLUNA */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* --- Linha 1 --- */}
                                            <tr>
                                                <td data-label={t('digitaltech.usabilityTest.headers.task')}>
                                                    {t('digitaltech.usabilityTest.rows.0.task')}
                                                </td>
                                                <td data-label={t('digitaltech.usabilityTest.headers.result')}>
                                                    {/* <span className={t('digitaltech.usabilityTest.rows.0.result') === 'Sucesso' ? 'status-pill success' : 'status-pill difficulty'}>
                                                        {t('digitaltech.usabilityTest.rows.0.result')}
                                                    </span> */}
                                                    <span className="status-pill success">
                                                        {t('digitaltech.usabilityTest.rows.0.result')}
                                                    </span>
                                                </td>
                                                {/* NOVA COLUNA */}
                                                <td data-label={t('digitaltech.usabilityTest.headers.problem')}>
                                                    {t('digitaltech.usabilityTest.rows.0.problem')}
                                                </td>
                                                {/* NOVA COLUNA */}
                                                <td data-label={t('digitaltech.usabilityTest.headers.solution')}>
                                                    {t('digitaltech.usabilityTest.rows.0.solution')}
                                                </td>
                                            </tr>

                                            {/* --- Linha 2 --- */}
                                            <tr>
                                                <td data-label={t('digitaltech.usabilityTest.headers.task')}>
                                                    {t('digitaltech.usabilityTest.rows.1.task')}
                                                </td>
                                                <td data-label={t('digitaltech.usabilityTest.headers.result')}>
                                                    <span className="status-pill difficulty">
                                                        {t('digitaltech.usabilityTest.rows.1.result')}
                                                    </span>
                                                    {/* <span className={t('digitaltech.usabilityTest.rows.1.result') === 'Sucesso' ? 'status-pill success' : 'status-pill difficulty'}>
                                                        {t('digitaltech.usabilityTest.rows.1.result')}
                                                    </span> */}
                                                </td>
                                                <td data-label={t('digitaltech.usabilityTest.headers.problem')}>
                                                    {t('digitaltech.usabilityTest.rows.1.problem')}
                                                </td>
                                                <td data-label={t('digitaltech.usabilityTest.headers.solution')}>
                                                    {t('digitaltech.usabilityTest.rows.1.solution')}
                                                </td>
                                            </tr>

                                            {/* --- Linha 3 --- */}
                                            <tr>
                                                <td data-label={t('digitaltech.usabilityTest.headers.task')}>
                                                    {t('digitaltech.usabilityTest.rows.2.task')}
                                                </td>
                                                <td data-label={t('digitaltech.usabilityTest.headers.result')}>
                                                    <span className="status-pill difficulty">
                                                        {t('digitaltech.usabilityTest.rows.2.result')}
                                                    </span>
                                                    {/* <span className={t('digitaltech.usabilityTest.rows.2.result') === 'Sucesso' ? 'status-pill success' : 'status-pill difficulty'}>
                                                        {t('digitaltech.usabilityTest.rows.2.result')}
                                                    </span> */}
                                                </td>
                                                <td data-label={t('digitaltech.usabilityTest.headers.problem')}>
                                                    {t('digitaltech.usabilityTest.rows.2.problem')}
                                                </td>
                                                <td data-label={t('digitaltech.usabilityTest.headers.solution')}>
                                                    {t('digitaltech.usabilityTest.rows.2.solution')}
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