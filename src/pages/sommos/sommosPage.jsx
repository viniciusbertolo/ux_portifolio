import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Removido 'Trans' se não for usado
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import {
    SiFigma,

} from "react-icons/si";

import { BsMicrosoftTeams } from "react-icons/bs";
import { DiScrum } from "react-icons/di";
import { PiKanbanDuotone } from "react-icons/pi";

// import './sommosPage.scss'; // ATUALIZADO
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

const SommosPage = () => { // ATUALIZADO
    const { t, i18n } = useTranslation();
    const [activeSection, setActiveSection] = useState('');
    // const sectionRefs = useRef({}); // Removido se não for usado diretamente

    // --- Função para trocar o idioma ---
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


    // Itens do menu para navegação interna
    const menuItems = [ // ATUALIZADO
        { id: 'about', key: 'sommos.meta.about.title' },
        { id: 'scenario', key: 'sommos.scenario.title' },
        { id: 'challenge', key: 'sommos.challenge.title' },
        { id: 'design-process', key: 'sommos.designProcess.title' },
        { id: 'research', key: 'sommos.research.title' },
        { id: 'solution', key: 'sommos.solution.title' },
        { id: 'results', key: 'sommos.results.title' },
    ];


    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-150px 0px -85% 0px', // Ajustado para detectar a seção mais no topo
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
                {/* ATUALIZADO: Substitua pela imagem de capa do SOMMOS */}
                <img src="/sommos_header.png" alt={t('sommos.hero.alt')} className="hero-image" />
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
                            <h1>{t('sommos.meta.title')}</h1> {/* ATUALIZADO */}
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
                                <h2>{t('sommos.meta.about.title')}</h2> {/* ATUALIZADO */}
                                <p>{t('sommos.meta.about.description')}</p> {/* ATUALIZADO */}
                            </motion.div>
                            <motion.div className="meta-details" variants={fadeInUp}>
                                <div className="detail-item">
                                    <strong>{t('sommos.meta.role.label')}</strong> {/* ATUALIZADO */}
                                    <span>{t('sommos.meta.role.value')}</span> {/* ATUALIZADO */}
                                </div>
                                <div className="detail-item">
                                    <strong>{t('sommos.meta.date.label')}</strong> {/* ATUALIZADO */}
                                    <span>{t('sommos.meta.date.value')}</span> {/* ATUALIZADO */}
                                </div>
                                <div className="detail-item">
                                    <strong>{t('sommos.meta.tools.label')}</strong> {/* ATUALIZADO */}
                                    <div className="tool-icons"> {/* ATUALIZADO */}
                                        <SiFigma title="Figma" />
                                        <BsMicrosoftTeams title="Teams"  />
                                        <DiScrum size={50} title="Scrum" />
                                        <PiKanbanDuotone size={40} title="Kanban"  />

                                        
                                        
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
                                <h2>{t('sommos.scenario.title')}</h2> {/* ATUALIZADO */}
                                <p>{t('sommos.scenario.description')}</p> {/* ATUALIZADO */}
                            </motion.section>

                            <motion.section id="challenge" className="project-challenge scroll-section" variants={fadeInUp}>
                                <h2>{t('sommos.challenge.title')}</h2> {/* ATUALIZADO */}
                                <blockquote>{t('sommos.challenge.description')}</blockquote> {/* ATUALIZADO */}
                            </motion.section>

                            <motion.section id="design-process" className="project-content scroll-section" variants={fadeInUp}>
                                <h2>{t('sommos.designProcess.title')}</h2> {/* ATUALIZADO */}
                                <p>{t('sommos.designProcess.description')}</p> {/* ATUALIZADO */}
                                <div className="image-gallery">
                                    {/* ATUALIZADO: Substitua pela imagem do seu processo */}
                                    <motion.img variants={fadeInUp} src="/sommos_proto.png" alt={t('sommos.designProcess.imageAlts.discovery')} /> {/* ATUALIZADO */}
                                </div>
                            </motion.section>

                            <motion.section id="research" className="project-content scroll-section" variants={fadeInUp}>
                                <h2>{t('sommos.research.title')}</h2> {/* ATUALIZADO */}
                                <div className="split-section">
                                    <motion.div className="split-item" variants={fadeInUp}>
                                        <h3>{t('sommos.research.user.title')}</h3> {/* ATUALIZADO */}
                                        <p>{t('sommos.research.user.description')}</p> {/* ATUALIZADO */}
                                    </motion.div>
                                    <motion.div className="split-item" variants={fadeInUp}>
                                        <h3>{t('sommos.research.competitors.title')}</h3> {/* ATUALIZADO */}
                                        <p>{t('sommos.research.competitors.description')}</p> {/* ATUALIZADO */}
                                    </motion.div>
                                </div>
                            </motion.section>

                            <motion.section id="solution" className="project-content scroll-section" variants={fadeInUp}>
                                <h2>{t('sommos.solution.title')}</h2> {/* ATUALIZADO */}
                                <p>{t('sommos.solution.description')}</p> {/* ATUALIZADO */}

                                <div className="figma-embed-container">
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
                                        // ATUALIZADO: Coloque seu link de embed do Figma aqui
                                        src="https://embed.figma.com/proto/PR5IitHoCdGLplL2qYwI3E/SOMMOS-Portifolio?page-id=0%3A1&node-id=1-21029&viewport=777%2C285%2C0.04&scaling=min-zoom&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A594&embed-host=share"
                                        onLoad={handleLoad}
                                        onError={handleError}
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                {/* ATUALIZADO: Altere este 'href' para o link do seu arquivo Figma */}
                                <motion.a href="https://www.figma.com/design/PR5IitHoCdGLplL2qYwI3E/SOMMOS-Portifolio?node-id=0-1&t=ljTuQudZKZW9GsNu-1" target="_blank" rel="noopener noreferrer" className="cta-button figma-cta" variants={fadeInUp}>
                                    <SiFigma />
                                    {t('sommos.solution.cta')} {/* ATUALIZADO */}
                                </motion.a>

                                <div className="disclaimer-wrapper">
                                    <div className="vertical-line"></div>
                                    <div className="disclaimer-content">
                                        <small className="disclaimer-text">
                                            {t('sommos.solution.warning')} {/* ATUALIZADO */}
                                        </small>
                                    </div>
                                </div>

                                {/* --- Tabela de Teste de Usabilidade --- */}
                                <h3 className="table-title">{t('sommos.usabilityTest.title')}</h3> {/* ATUALIZADO */}
                                <div className="table-container">
                                    <table className="usability-table">
                                        <thead>
                                            <tr>
                                                <th>{t('sommos.usabilityTest.headers.task')}</th> {/* ATUALIZADO */}
                                                <th>{t('sommos.usabilityTest.headers.result')}</th> {/* ATUALIZADO */}
                                                <th>{t('sommos.usabilityTest.headers.problem')}</th>
                                                <th>{t('sommos.usabilityTest.headers.solution')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* --- Linha 1 --- */}
                                            <tr>
                                                <td data-label={t('sommos.usabilityTest.headers.task')}>
                                                    {t('sommos.usabilityTest.rows.0.task')} {/* ATUALIZADO */}
                                                </td>
                                                <td data-label={t('sommos.usabilityTest.headers.result')}>
                                                    <span className="status-pill success"> {/* ATUALIZADO */}
                                                        {t('sommos.usabilityTest.rows.0.result')} {/* ATUALIZADO */}
                                                    </span>
                                                </td>
                                                <td data-label={t('sommos.usabilityTest.headers.problem')}>
                                                    {t('sommos.usabilityTest.rows.0.problem')} {/* ATUALIZADO */}
                                                </td>
                                                <td data-label={t('sommos.usabilityTest.headers.solution')}>
                                                    {t('sommos.usabilityTest.rows.0.solution')} {/* ATUALIZADO */}
                                                </td>
                                            </tr>

                                            {/* --- Linha 2 --- */}
                                            <tr>
                                                <td data-label={t('sommos.usabilityTest.headers.task')}>
                                                    {t('sommos.usabilityTest.rows.1.task')} {/* ATUALIZADO */}
                                                </td>
                                                <td data-label={t('sommos.usabilityTest.headers.result')}>
                                                    <span className="status-pill difficulty"> {/* ATUALIZADO */}
                                                        {t('sommos.usabilityTest.rows.1.result')} {/* ATUALIZADO */}
                                                    </span>
                                                </td>
                                                <td data-label={t('sommos.usabilityTest.headers.problem')}>
                                                    {t('sommos.usabilityTest.rows.1.problem')} {/* ATUALIZADO */}
                                                </td>
                                                <td data-label={t('sommos.usabilityTest.headers.solution')}>
                                                    {t('sommos.usabilityTest.rows.1.solution')} {/* ATUALIZADO */}
                                                </td>
                                            </tr>

                                            {/* --- Linha 3 --- */}
                                            <tr>
                                                <td data-label={t('sommos.usabilityTest.headers.task')}>
                                                    {t('sommos.usabilityTest.rows.2.task')} {/* ATUALIZADO */}
                                                </td>
                                                <td data-label={t('sommos.usabilityTest.headers.result')}>
                                                    <span className="status-pill difficulty"> {/* ATUALIZADO */}
                                                        {t('sommos.usabilityTest.rows.2.result')} {/* ATUALIZADO */}
                                                    </span>
                                                </td>
                                                <td data-label={t('sommos.usabilityTest.headers.problem')}>
                                                    {t('sommos.usabilityTest.rows.2.problem')} {/* ATUALIZADO */}
                                                </td>
                                                <td data-label={t('sommos.usabilityTest.headers.solution')}>
                                                    {t('sommos.usabilityTest.rows.2.solution')} {/* ATUALIZADO */}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="image-gallery">
                                    {/* ATUALIZADO: Sugestão de mais imagens de tela */}
                                    <motion.img
                                        src="/sommos_tela_1.png" alt={t('sommos.solution.finalImageAlt')} className="final-image" />
                                </div>
                                <div className="image-gallery">
                                    {/* ATUALIZADO: Sugestão de mais imagens de tela */}
                                    <motion.img
                                        src="/sommos_tela_2.png" alt={t('sommos.solution.finalImageAlt')} className="final-image" />
                                </div>
                                <div className="image-gallery">
                                    {/* ATUALIZADO: Sugestão de mais imagens de tela */}
                                    <motion.img
                                        src="/sommos_tela_3.png" alt={t('sommos.solution.finalImageAlt')} className="final-image" />
                                </div>
                            </motion.section>

                            <motion.section id="results" className="project-content scroll-section" variants={fadeInUp}>
                                <h2>{t('sommos.results.title')}</h2> {/* ATUALIZADO */}
                                <div className="split-section">
                                    <motion.div className="split-item" variants={fadeInUp}>
                                        <h3>{t('sommos.results.results.title')}</h3> {/* ATUALIZADO */}
                                        <p>{t('sommos.results.results.description')}</p> {/* ATUALIZADO */}
                                    </motion.div>
                                    <motion.div className="split-item" variants={fadeInUp}>
                                        <h3>{t('sommos.results.learnings.title')}</h3> {/* ATUALIZADO */}
                                        <p>{t('sommos.results.learnings.description')}</p> {/* ATUALIZADO */}
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

export default SommosPage; // ATUALIZADO