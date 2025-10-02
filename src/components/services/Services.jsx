// import "./services.scss"; // Importa o arquivo de estilo
// import { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// //==================================================================
// // 1. COMPONENTE AUXILIAR: SkillBar (Barra de Habilidade) - CORRIGIDO
// //==================================================================
// const SkillBar = ({ skillName, percentage }) => {
//   const ref = useRef(null);

//   // Mantemos o rastreio do scroll para a animação da LARGURA
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "start center"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 200,
//     damping: 50,
//   });

//   // A animação da largura da barra continua funcionando
//   const width = useTransform(
//     smoothProgress,
//     [0, 1], // Input
//     ["0%", `${percentage}%`] // Output
//   );
  
//   // A animação de OPACIDADE foi removida.

//   return (
//     // O "style={{ opacity }}" foi removido daqui
//     <motion.div ref={ref} className="skill-wrapper">
//       <span className="skill-name">{skillName}</span>
//       <div className="skill-bar-track">
//         {/* A mágica da barra crescendo continua aqui */}
//         <motion.div className="skill-bar-fill" style={{ width }} />
//       </div>
//     </motion.div>
//   );
// };

// //==================================================================
// // 2. COMPONENTE PRINCIPAL: Services
// //==================================================================
// const Services = () => {
//   const ref = useRef();
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "start 0.3"],
//   });
//   const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
//   const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
//   const xText = useTransform(smoothProgress, [0, 1], ["-300px", "0px"]);
//   const xSkills = useTransform(smoothProgress, [0, 1], ["300px", "0px"]);

//   // Defina suas habilidades aqui! Nível de 0 a 100.
//   const skills = [
//     { name: "Figma", level: 100 }, // Corrigido de 250 para 100
//     { name: "UI/UX Research", level: 85 },
//     { name: "Teste de Usabilidade", level: 75 },
//     { name: "Design System", level: 90 },
//     { name: "Prototipagem", level: 100 },
//     { name: "React & Framer Motion", level: 70 },
//     { name: "React & Framer Motion", level: 70 },
//     { name: "React & Framer Motion", level: 70 },
//     { name: "React & Framer Motion", level: 70 },
//     { name: "React & Framer Motion", level: 70 },
//     { name: "React & Framer Motion", level: 70 },
//     { name: "React & Framer Motion", level: 70 },
//   ];

//   return (
//     <motion.div className="services" ref={ref} style={{ opacity }}>
      
//       {/* NOVO CONTAINER: Agrupa texto e título para layout flex */}
//       <motion.div className="contentContainer" style={{ x: xText }}>
//         <div className="textContainer">
//           <p>
//             Minhas habilidades e ferramentas
//             <br /> para criar experiências incríveis
//           </p>
//           <hr />
//         </div>
//         <div className="titleContainer">
//           <div className="title">
//             <img src="/people.webp" alt="" />
//             <h1><b>Minhas</b> Skills</h1>
//           </div>
//           <div className="title">
//             <h1><b>em Design</b></h1>
//             <button>VEJA MEUS PROJETOS</button>
//           </div>
//         </div>
//       </motion.div>

//       {/* --- Container das Barras de Habilidade --- */}
//       <motion.div className="skillsContainer" style={{ x: xSkills }}>
//         {skills.map((skill, index) => (
//           <SkillBar key={index} skillName={skill.name} percentage={skill.level} />
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;


import "./services.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Services = () => {
  const ref = useRef();
  
  // Lógica para animar a entrada da seção inteira (continua igual)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const xText = useTransform(smoothProgress, [0, 1], ["-300px", "0px"]);
  const xSkills = useTransform(smoothProgress, [0, 1], ["300px", "0px"]);

  // --- LÓGICA DE ANIMAÇÃO DAS BARRAS (agora dentro do componente principal) ---

  // Variantes para o container de cada skill (para surgir suavemente)
  const wrapperVariants = {
    hidden: {
      opacity: 0,
      y: 20 // Começa um pouco para baixo para um efeito de "subida"
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Variantes para a barra de preenchimento
  const fillVariants = {
    hidden: { 
      width: "0%" 
    },
    // A mágica está aqui: a variante "visible" agora é uma função
    // que recebe o "level" da skill como um parâmetro customizado.
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    })
  };
  
  // Lista de habilidades
  const skills = [
    { name: "Figma", level: 100 },
    { name: "UI/UX Research", level: 85 },
    { name: "Teste de Usabilidade", level: 75 },
    { name: "Design System", level: 90 },
    { name: "Prototipagem", level: 100 },
    { name: "React & Framer Motion", level: 70 },
    { name: "HTML & SCSS", level: 95 },
    { name: "JavaScript (ES6+)", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "Next.js", level: 75 },
    { name: "Node.js", level: 60 },
    { name: "Git & GitHub", level: 90 },
  ];

  return (
    <motion.div className="services" ref={ref} style={{ opacity }}>
      
      {/* Container do Título */}
      <motion.div className="contentContainer" style={{ x: xText }}>
        <div className="textContainer">
          <p className="font-[Open_Sans]">
            Minhas habilidades e ferramentas
            <br /> para criar experiências incríveis
          </p>
          <hr />
        </div>
        <div className="titleContainer">
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1 className="font-[Open_Sans]"><b>Minhas</b> Skills</h1>
          </div>
          <div className="title">
            <h1 className="font-[Open_Sans]"><b>em Design</b></h1>
            <button className="font-[Open_Sans]">VEJA MEUS PROJETOS</button>
          </div>
        </div>
      </motion.div>

      {/* Container das Barras de Habilidade */}
      <motion.div className="skillsContainer" style={{ x: xSkills }}>
        {skills.map((skill, index) => (
          // O JSX do antigo SkillBar agora está diretamente aqui
          <motion.div 
            key={index}
            className="skill-wrapper"
            variants={wrapperVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <span className="skill-name font-[Open_Sans]">{skill.name}</span>
            <div className="skill-bar-track">
              <motion.div 
                className="skill-bar-fill" 
                variants={fillVariants}
                // A prop "custom" passa o nível da skill para a nossa variante "visible"
                custom={skill.level}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;