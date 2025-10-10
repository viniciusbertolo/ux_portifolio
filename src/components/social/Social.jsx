import React, { useRef } from 'react';
// 1. Importamos o hook 'useTranslation' para acessar o idioma
import { useTranslation } from 'react-i18next';
import './social.scss';

// Importando os ícones
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { motion, useScroll, useSpring, useTransform } from "framer-motion"


const Socials = () => {
  // 2. Usamos o hook para pegar a instância do i18n
  const { i18n } = useTranslation();

  // 3. Criamos o mapa de arquivos de currículo (lembre-se de colocá-los na pasta /public)
  const resumeFiles = {
    pt: '/CV - Vinicius 2025.pdf',
    en: '/CV - Vinicius 2025 - English.pdf',
    de: '/CV - Vinicius 2025 - English.pdf',
  };

  // 4. Determinamos o caminho correto do currículo, com o inglês como padrão
  const resumeHref = resumeFiles[i18n.language] || resumeFiles['en'];

  // 5. O array de links agora está DENTRO do componente
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      href: 'https://wa.me/+5516982559460',
      className: 'whatsapp',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      href: 'https://linkedin.com/in/vinicius-müschenborn',
      className: 'linkedin',
    },
    {
      // Objeto alterado
      name: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/viniciusbertolo', // Lembre-se de atualizar este
      className: 'github',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      href: 'https://instagram.com/viniciusbertolo',
      className: 'instagram',
    },
    {
      name: 'Currículo',
      icon: <IoDocumentTextOutline />,
      // 6. O 'href' do currículo agora é dinâmico
      href: resumeHref,
      className: 'curriculo',
    },
    {
      name: 'Gmail',
      icon: <SiGmail />,
      href: 'mailto:vini.alex.bertolo@gmail.com',
      className: 'gmail',
    },
  ];


  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })


  return (
    <section className="socials-section" ref={ref} id="networks">
      {/* Mantive seu h1 e o texto como você definiu */}
      <h1 className="socials-title">Contato & Redes</h1>
      <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      <div className="socials-grid">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link ${link.className}`}
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Socials;