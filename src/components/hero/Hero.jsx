import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import './Hero.scss'; // Importe o arquivo SCSS
import { useTranslation } from 'react-i18next';

// As definições da animação continuam as mesmas
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};



const Hero = () => {
    const { t } = useTranslation();
    return (
        // Apenas a classe principal. Todo o layout é controlado pelo SCSS.
        <main className="hero-section">

            {/* Container para o conteúdo de texto */}
            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="divText">

                    
                    <motion.div
                        variants={itemVariants}
                        className='inline-block bg-gradient-to-r from-[#ff8c00] to-[#ff0080] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-[10px] p-[3px]'
                    >
                        <div
                            className='bg-black rounded-[8px] flex items-center justify-center gap-2 text-sm px-4 py-1 font-[Open_Sans]'
                        >
                            <i className='bx bx-diamond'></i>
                            <span>{t('hero.up_title_main')}</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className='hero-title font-[Open_Sans] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin tracking-wider'
                    >
                        {t('hero.title_main')}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className='hero-description font-[Open_Sans] text-base sm:text-lg tracking-wider text-gray-400'
                    >
                        {t('hero.desc_main')}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className='hero-buttons flex gap-4'
                    >
                        <a className='font-[Open_Sans] border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-[10px] sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href="#networks">
                            {t('hero.button_1_main')} <i className='bx bx-link-external'></i>
                        </a>
                        <a className='font-[Open_Sans] py-2 sm:py-3 px-8 sm:px-10 rounded-[10px] sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-[#ff8c00] text-black hover:text-white' href="#projects">
                            {t('hero.button_2_main')} <i className='bx bx-link-external'></i>
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Container para a animação Spline */}
            <div className="hero-spline-container">
                <Spline
                    className="spline-canvas"
                    scene="https://prod.spline.design/kdPjCdHsh7NKkXM4/scene.splinecode"
                />
            </div>
        </main >
    );
};

export default Hero;


