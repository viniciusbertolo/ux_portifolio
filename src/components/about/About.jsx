import React from 'react';
import { motion } from 'framer-motion';
import './about.scss';
import { useTranslation } from 'react-i18next';

// Variáveis de animação para reutilização
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre cada elemento filho
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 50, damping: 20 },
  },
};

const About = () => {
    const {t} = useTranslation();
  return (
    <section className="about-section" id="about">
      {/* Elemento Decorativo de Fundo (Texto Vazado) */}
      <div className="background-text">
        <span>CREATIVE</span>
        <span>DESIGN</span>
      </div>

      <div className="container">
        <motion.div
          className="content-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Coluna da Imagem */}
          <motion.div className="image-wrapper" variants={itemVariants}>
            <div className="glow-effect"></div>
            <div className="image-frame">
              {/* Substitua pelo caminho da sua foto real */}
              <img 
                src="/vini.jpeg" 
                alt="Retrato profissional" 
              />
            </div>
            <div className="experience-badge">
              <span className="number">4+</span>
              <span className="label">{t('about.experienceText')}</span>
            </div>
          </motion.div>

          {/* Coluna de Texto */}
          <motion.div className="text-wrapper" variants={itemVariants}>
            <motion.h4 className="subtitle" variants={itemVariants}>
             {t('about.whoIam')}
            </motion.h4>
            
            <motion.h2 className="title" variants={itemVariants}>
              {t('about.title1')} <span className="highlight">{t('about.title2')}</span>
            </motion.h2>

            <motion.p className="description" variants={itemVariants}>
              {t('about.text')}
            </motion.p>

             <motion.a href="#projects">{t('about.button')}</motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;