import "./services.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";

const Services = () => {
  const ref = useRef();
  const { t } = useTranslation();

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

  const skills = [
    { name: t('skills.skill_title_1'), level: 100 },
    { name: t('skills.skill_title_2'), level: 70 },
    { name: t('skills.skill_title_3'), level: 100 },
    { name: t('skills.skill_title_4'), level: 85 },
    { name: t('skills.skill_title_5'), level: 100 },
    { name: t('skills.skill_title_6'), level: 95 },
    { name: t('skills.skill_title_7'), level: 90 },
    { name: t('skills.skill_title_8'), level: 95 },
    { name: t('skills.skill_title_9'), level: 100 },
    { name: t('skills.skill_title_10'), level: 85 },
    { name: t('skills.skill_title_11'), level: 95 },
    { name: t('skills.skill_title_12'), level: 100 },
  ];



  return (
    <motion.div className="services" ref={ref} style={{ opacity }} id="skills">

      {/* Container do Título */}
      <motion.div className="contentContainer" style={{ x: xText }}>
        <div className="textContainer">
          <p className="font-[Open_Sans]">
            {t('skills.sub_title')}
          </p>
          <hr />
        </div>
        <div className="titleContainer">
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1 className="font-[Open_Sans]">{t('skills.title_1')}</h1>
          </div>
          <div className="title">
            <h1 className="font-[Open_Sans]">{t('skills.title_2')}</h1>
            <a href="#projects" className="font-[Open_Sans]">{t('skills.button')}</a>
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