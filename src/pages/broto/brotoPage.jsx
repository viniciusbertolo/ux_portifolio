import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LayoutGrid } from 'lucide-react'; 

import {
    SiFigma,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiMaterialdesign,
    SiLucide, // <-- ADICIONE ESTE
} from "react-icons/si";


import './brotoPage.scss'; // ATUALIZADO
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

const BrotoPage = () => { // ATUALIZADO
    const { t, i18n } = useTranslation();
    const [activeSection, setActiveSection] = useState('');
    const sectionRefs = useRef({});

    // --- Função para trocar o idioma ---
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


    // Itens do menu para navegação interna
    const menuItems = [ // ATUALIZADO
        { id: 'about', key: 'broto.meta.about.title' },
        { id: 'scenario', key: 'broto.scenario.title' },
        { id: 'challenge', key: 'broto.challenge.title' },
        { id: 'design-process', key: 'broto.designProcess.title' },
        { id: 'research', key: 'broto.research.title' },
        { id: 'references', key: 'broto.references.title' },
        { id: 'solution', key: 'broto.solution.title' },
        { id: 'results', key: 'broto.results.title' },
    ];


    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-150px 0px -85% 0px',
            threshold: 0,
        };

        const observerCallback = (entries) => {
            const intersectingEntries = entries.filter(e => e.isIntersecting);
            if (intersectingEntries.length > 0) {
                const topEntry = intersectingEntries.reduce((prev, current) => {
                    return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current;
                });
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
                {/* ATUALIZADO: Sugestão de nova imagem de capa */}
                <img src="/header_broto.webp" alt={t('broto.hero.alt')} className="hero-image" />
            </motion.header>

            <div className="project-body">

                <div className="page-with-sidebar">
                    <motion.nav className="project-sidebar" variants={fadeInUp}>
                        <div className="mb-6">
                            <button
                                onClick={() => navigate("/")}
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
                        {/* --- Seletor de Idiomas com Bandeiras --- */}
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


                        {/* --- Seletor de Idiomas (Mobile) --- */}
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
                            <h1>{t('broto.meta.title')}</h1> {/* ATUALIZADO */}
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
                                <h2>{t('broto.meta.about.title')}</h2> {/* ATUALIZADO */}
                                <p>{t('broto.meta.about.description')}</p> {/* ATUALIZADO */}
                            </motion.div>
                            <motion.div className="meta-details" variants={fadeInUp}>
                                <div className="detail-item">
                                    <strong>{t('broto.meta.role.label')}</strong> {/* ATUALIZADO */}
                                    <span>{t('broto.meta.role.value')}</span> {/* ATUALIZADO */}
                                </div>
                                <div className="detail-item">
                                    <strong>{t('broto.meta.date.label')}</strong> {/* ATUALIZADO */}
                                    <span>{t('broto.meta.date.value')}</span> {/* ATUALIZADO */}
                                </div>
                                <div className="detail-item">
                                    <strong>{t('broto.meta.tools.label')}</strong> {/* ATUALIZADO */}
                                    <div className="tool-icons"> {/* ATUALIZADO */}
                                        <SiFigma title="Figma" />

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
                            <motion.section id="scenario" className="project-content scroll-section" variants={fadeInUp}>
                                <h2>{t('broto.scenario.title')}</h2> {/* ATUALIZADO */}
                                <p>{t('broto.scenario.description')}</p> {/* ATUALIZADO */}
                            </motion.section>

                            <motion.section id="challenge" className="project-challenge scroll-section" variants={fadeInUp}>
                                <h2>{t('broto.challenge.title')}</h2> {/* ATUALIZADO */}
                                <blockquote>{t('broto.challenge.description')}</blockquote> {/* ATUALIZADO */}
                            </motion.section>

                            <motion.section id="design-process" className="project-content scroll-section" variants={fadeInUp}>
                                <h2>{t('broto.designProcess.title')}</h2> {/* ATUALIZADO */}
                                <p>{t('broto.designProcess.description')}</p> {/* ATUALIZADO */}
                                <div className="image-gallery">
                                    {/* Esta imagem do Double Diamond é genérica e pode ser mantida */}
                                    <motion.img variants={fadeInUp} src="/ds_conception.png" alt={t('broto.designProcess.imageAlts.discovery')} /> {/* ATUALIZADO */}
                                </div>
                            </motion.section>

                            <motion.section id="research" className="project-content scroll-section" variants={fadeInUp}>
                                <h2>{t('broto.research.title')}</h2> {/* ATUALIZADO */}
                                <div className="split-section">
                                    <motion.div className="split-item" variants={fadeInUp}>
                                        <h3>{t('broto.research.user.title')}</h3> {/* ATUALIZADO */}
                                        <p>{t('broto.research.user.description')}</p> {/* ATUALIZADO */}
                                    </motion.div>
                                    <motion.div className="split-item" variants={fadeInUp}>
                                        <h3>{t('broto.research.competitors.title')}</h3> {/* ATUALIZADO */}
                                        <p>{t('broto.research.competitors.description')}</p> {/* ATUALIZADO */}
                                    </motion.div>

                                </div>

                                {/* --- AVISO ---
                                  A tabela de Benchmarking foi REMOVIDA daqui pois era muito 
                                  específica do projeto DigitalTech. A seção acima (split-section)
                                  já cobre sua parte de pesquisa/discovery.
                                */}
                                <div className="image-gallery">
                                    {/* ATUALIZADO: Sugestão de imagem de componentes */}
                                    <motion.img
                                        src="/roadmap_ds.png" alt={t('broto.solution.finalImageAlt')} className="final-image" />
                                </div>
                            </motion.section>


                            <motion.section id="references" className="project-content scroll-section" variants={fadeInUp}>
                                <h2>{t('broto.references.title')}</h2>
                                <p>{t('broto.references.description')}</p>

                                <div className="references-grid">
                                    {/* --- Card 1: Material-UI --- */}
                                    <motion.div className="reference-item" variants={fadeInUp}>
                                        <SiMaterialdesign />
                                        <h3>{t('broto.references.mui.title')}</h3>
                                        <p>{t('broto.references.mui.description')}</p>
                                    </motion.div>

                                    {/* --- Card 2: Tailwind CSS --- */}
                                    <motion.div className="reference-item" variants={fadeInUp}>
                                        <SiTailwindcss />
                                        <h3>{t('broto.references.tailwind.title')}</h3>
                                        <p>{t('broto.references.tailwind.description')}</p>
                                    </motion.div>

                                    {/* --- Card 3: Lucide Icons --- */}
                                    <motion.div className="reference-item" variants={fadeInUp}>
                                        <SiLucide />
                                        <h3>{t('broto.references.lucide.title')}</h3>
                                        <p>{t('broto.references.lucide.description')}</p>
                                    </motion.div>

                                    {/* --- Card 4: AG Grid --- */}
                                    <motion.div className="reference-item" variants={fadeInUp}>
                                        <LayoutGrid size={30} />
                                        <h3>{t('broto.references.aggrid.title')}</h3>
                                        <p>{t('broto.references.aggrid.description')}</p>
                                    </motion.div>
                                </div>
                            </motion.section>

                            <motion.section id="solution" className="project-content scroll-section" variants={fadeInUp}>
                                <h2>{t('broto.solution.title')}</h2> {/* ATUALIZADO */}
                                <p>{t('broto.solution.description')}</p> {/* ATUALIZADO */}


                                {/* <div className="figma-embed-container">
                                    {isLoading && (
                                        <div className="loading-overlay">
                                            <div className="spinner"></div>
                                        </div>
                                    )}

                                    {hasError && (
                                        <div className="error-overlay">
                                            <p>Não foi possível carregar o protótipo.</p>
                                        </div>
                                    )}

                                    
                                    <iframe
                                        className="figma-iframe"
                                        style={{ visibility: isLoading || hasError ? 'hidden' : 'visible' }}
                                        src="https://embed.figma.com/proto/EzUgyzL8JfAUo8V7CgzBIW/AcademiaX-Portifolio?page-id=27%3A901&node-id=27-9299&viewport=148%2C60%2C0.04&scaling=scale-down-width&content-scaling=fixed&embed-host=share"
                                        onLoad={handleLoad}
                                        onError={handleError}
                                        allowFullScreen
                                    ></iframe>
                                </div> */}

                                {/* ATUALIZADO: Altere este 'href' para o link do seu arquivo Figma */}
                                <motion.a href="https://www.figma.com/design/YuXdacjoBXQjISKDG6FHSx/Casa-verde?node-id=772-2&t=O23oxrHTCWZz6vnT-1" target="_blank" rel="noopener noreferrer" className="cta-button figma-cta" variants={fadeInUp}>
                                    <SiFigma />
                                    {t('broto.solution.cta')} {/* ATUALIZADO */}
                                </motion.a>

                                <div className="disclaimer-wrapper">
                                    <div className="vertical-line"></div>
                                    <div className="disclaimer-content">
                                        <small className="disclaimer-text">
                                            {t('broto.solution.warning')} {/* ATUALIZADO */}
                                        </small>
                                    </div>
                                </div>

                                {/* --- Tabela de Alinhamento (antigo Teste de Usabilidade) --- */}
                                <h3 className="table-title">{t('broto.usabilityTest.title')}</h3> {/* ATUALIZADO */}
                                <div className="table-container">

                                    <table className="usability-table">
                                        <thead>
                                            <tr>
                                                <th>{t('broto.usabilityTest.headers.task')}</th> {/* ATUALIZADO */}
                                                <th>{t('broto.usabilityTest.headers.result')}</th> {/* ATUALIZADO */}
                                                <th>{t('broto.usabilityTest.headers.problem')}</th>
                                                <th>{t('broto.usabilityTest.headers.solution')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* --- Linha 1 --- */}
                                            <tr>
                                                <td data-label={t('broto.usabilityTest.headers.task')}>
                                                    {t('broto.usabilityTest.rows.0.task')} {/* ATUALIZADO */}
                                                </td>
                                                <td data-label={t('broto.usabilityTest.headers.result')}>

                                                    <span className="status-pill difficulty"> {/* ATUALIZADO */}
                                                        {t('broto.usabilityTest.rows.0.result')} {/* ATUALIZADO */}
                                                    </span>
                                                </td>

                                                <td data-label={t('broto.usabilityTest.headers.problem')}>
                                                    {t('broto.usabilityTest.rows.0.problem')} {/* ATUALIZADO */}
                                                </td>

                                                <td data-label={t('broto.usabilityTest.headers.solution')}>
                                                    {t('broto.usabilityTest.rows.0.solution')} {/* ATUALIZADO */}
                                                </td>
                                            </tr>

                                            {/* --- Linha 2 --- */}
                                            <tr>
                                                <td data-label={t('broto.usabilityTest.headers.task')}>
                                                    {t('broto.usabilityTest.rows.1.task')} {/* ATUALIZADO */}
                                                </td>
                                                <td data-label={t('broto.usabilityTest.headers.result')}>
                                                    <span className="status-pill success"> {/* ATUALIZADO */}
                                                        {t('broto.usabilityTest.rows.1.result')} {/* ATUALIZADO */}
                                                    </span>

                                                </td>
                                                <td data-label={t('broto.usabilityTest.headers.problem')}>
                                                    {t('broto.usabilityTest.rows.1.problem')} {/* ATUALIZADO */}
                                                </td>
                                                <td data-label={t('broto.usabilityTest.headers.solution')}>
                                                    {t('broto.usabilityTest.rows.1.solution')} {/* ATUALIZADO */}
                                                </td>
                                            </tr>

                                            {/* --- Linha 3 --- */}
                                            <tr>
                                                <td data-label={t('broto.usabilityTest.headers.task')}>
                                                    {t('broto.usabilityTest.rows.2.task')} {/* ATUALIZADO */}
                                                </td>
                                                <td data-label={t('broto.usabilityTest.headers.result')}>
                                                    <span className="status-pill difficulty"> {/* ATUALIZADO */}
                                                        {t('broto.usabilityTest.rows.2.result')} {/* ATUALIZADO */}
                                                    </span>

                                                </td>
                                                <td data-label={t('broto.usabilityTest.headers.problem')}>
                                                    {t('broto.usabilityTest.rows.2.problem')} {/* ATUALIZADO */}
                                                </td>
                                                <td data-label={t('broto.usabilityTest.headers.solution')}>
                                                    {t('broto.usabilityTest.rows.2.solution')} {/* ATUALIZADO */}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <div className="image-gallery">
                                    {/* ATUALIZADO: Sugestão de imagem de componentes */}
                                    <motion.img
                                        src="/ds_sidebar.png" alt={t('broto.solution.finalImageAlt')} className="final-image" style={{ width: '40%' }} />
                                </div>
                            </motion.section>

                            <motion.section id="results" className="project-content scroll-section" variants={fadeInUp}>
                                <h2>{t('broto.results.title')}</h2> {/* ATUALIZADO */}
                                <div className="split-section">
                                    <motion.div className="split-item" variants={fadeInUp}>
                                        <h3>{t('broto.results.results.title')}</h3> {/* ATUALIZADO */}
                                        <p>{t('broto.results.results.description')}</p> {/* ATUALIZADO */}
                                    </motion.div>
                                    <motion.div className="split-item" variants={fadeInUp}>
                                        <h3>{t('broto.results.learnings.title')}</h3> {/* ATUALIZADO */}
                                        <p>{t('broto.results.learnings.description')}</p> {/* ATUALIZADO */}
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

export default BrotoPage;