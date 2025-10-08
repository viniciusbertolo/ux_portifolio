import React from 'react';
import { motion } from 'framer-motion';
import './projetoGenerico.scss';

// --- Animações ---
// Variante para o container principal animar os filhos em sequência
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre a animação de cada filho
    },
  },
};

// Variante para os elementos entrarem de baixo para cima com fade
const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const ProjectDetailPage = () => {
  return (
    <motion.div 
      className="project-page"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* --- Seção da Capa (Hero) --- */}
      <motion.header className="project-hero">
        <img src="/people.webp" alt="Capa do Projeto" className="hero-image" />
        <div className="hero-overlay">
          <motion.h1 variants={fadeInUp}>Nome Incrível do Projeto</motion.h1>
        </div>
      </motion.header>

      <main className="project-container">
        {/* --- Seção de Metadados --- */}
        <motion.section 
          className="project-meta"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="meta-description" variants={fadeInUp}>
            <h3>SOBRE O PROJETO</h3>
            <p>
              Esta é uma breve descrição que resume o projeto, seu objetivo principal e o resultado alcançado. Mantenha-a concisa e impactante.
            </p>
          </motion.div>
          <motion.div className="meta-details" variants={fadeInUp}>
            <div className="detail-item">
              <strong>Data:</strong>
              <span>Setembro, 2025</span>
            </div>
            <div className="detail-item">
              <strong>Equipe:</strong>
              <span>Vinícius M. (UI/UX Designer), João S. (Dev)</span>
            </div>
            <div className="detail-item">
              <strong>Ferramentas:</strong>
              <span>Figma, React, SCSS, Framer Motion</span>
            </div>
          </motion.div>
        </motion.section>

        {/* --- Seção de Introdução --- */}
        <motion.section 
          className="project-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2>Introdução</h2>
          <p>
            Aqui você detalha o contexto do projeto. Qual era a oportunidade? Quem era o cliente ou o público-alvo inicial? Explique o "porquê" por trás da iniciativa de uma forma que cative o leitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </p>
        </motion.section>

        {/* --- Cenário Atual e Desafio --- */}
        <motion.section 
          className="project-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2>Cenário Atual e o Desafio</h2>
          <p>
            Descreva o problema que você se propôs a resolver. Quais eram as dores e frustrações dos usuários? Quais eram os obstáculos de negócio? Use dados ou exemplos para ilustrar a magnitude do desafio. O objetivo aqui é deixar claro qual era a "montanha" a ser escalada.
          </p>
        </motion.section>

        {/* --- Processo de Design --- */}
        <motion.section 
          className="project-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp}>Processo de Design</motion.h2>
          <motion.p variants={fadeInUp}>
            Explique visualmente as etapas do seu processo. Desde a pesquisa inicial, passando por wireframes, até os protótipos de alta fidelidade. Mostre, não apenas conte.
          </motion.p>
          <div className="image-gallery">
            <motion.img variants={fadeInUp} src="/people.webp" alt="Wireframe do projeto" />
            <motion.img variants={fadeInUp} src="/people.webp" alt="Protótipo em baixa fidelidade" />
            <motion.img variants={fadeInUp} src="/people.webp" alt="Protótipo em alta fidelidade" />
          </div>
        </motion.section>
        
        {/* --- Conhecendo o Usuário e Concorrente --- */}
        <motion.section 
          className="project-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
        >
          <div className="split-section">
            <motion.div className="split-item" variants={fadeInUp}>
              <h3>Conhecendo o Usuário</h3>
              <p>Apresente as personas, mapas de jornada ou resultados de entrevistas. Quem são as pessoas para quem você projetou? Quais são suas necessidades e objetivos? Isso mostra que seu design é centrado no ser humano.</p>
            </motion.div>
            <motion.div className="split-item" variants={fadeInUp}>
              <h3>Análise de Concorrentes</h3>
              <p>O que os concorrentes fazem bem e onde falham? Mostre como sua análise competitiva informou suas decisões de design, identificando oportunidades para inovar e se diferenciar no mercado.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* --- Estratégia e Solução --- */}
        <motion.section 
          className="project-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2>Estratégia e Solução</h2>
          <p>
            Esta é a grande revelação. Conecte todos os pontos: como a pesquisa, a análise e o processo de design levaram à solução final. Apresente os principais recursos e explique como eles resolvem diretamente os problemas levantados no início. Use imagens ou GIFs da interface final para ilustrar seu ponto.
          </p>
          <motion.img src="/people.webp" alt="Resultado final do projeto" className="final-image" />
        </motion.section>
      </main>
    </motion.div>
  );
};

export default ProjectDetailPage;