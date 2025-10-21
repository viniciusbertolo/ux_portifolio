import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './otherProjects.scss';
import { motion, useScroll, useSpring } from 'framer-motion';

const OtherProjects = () => {
    const { t } = useTranslation();
    const ref = useRef();

    // Dados para os cards de "Outros Projetos" agora vêm do i18n
    const otherProjectItems = [
        {
            id: 1,
            title: t('other_projects.cards.0.title'),
            img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: t('other_projects.cards.0.description'),
            rota: "https://www.figma.com/design/6odua3Pd8GJtpsgRmH4LDE/landing-page-Luigi-sorvetes?node-id=0-1&t=SUZYX5W6ovwJ0IZo-1"
        },
        {
            id: 2,
            title: t('other_projects.cards.1.title'),
            img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: t('other_projects.cards.1.description'),
            rota: "https://www.figma.com/design/o5QqfemmkcqH2TSik3soD0/CCAB?node-id=1-50141&t=jH9B1hJvks5MYiTa-1"
        },
        {
            id: 3,
            title: t('other_projects.cards.2.title'),
            img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: t('other_projects.cards.2.description'),
            rota: "https://www.figma.com/design/YuXdacjoBXQjISKDG6FHSx/Casa-verde?node-id=0-1&t=rUulnhj8VObbOhSb-1"
        },
        {
            id: 4,
            title: t('other_projects.cards.3.title'),
            img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: t('other_projects.cards.3.description'),
            rota: "https://www.figma.com/design/PR5IitHoCdGLplL2qYwI3E/SOMMOS-Portifolio?node-id=57-5330&t=Tqzpy2j1EHvN2W68-1"
        },
    ];

    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
    
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, // Ajustei os valores para uma animação mais fluida
        damping: 30,
    });

    return (
        <div className="otherProjects" ref={ref}>
            <h1 className="font-[Open_Sans]">{t('other_projects.title')}</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            <div className="cardsContainer">
                {otherProjectItems.map(item => (
                    <div className="card" key={item.id}>
                        <div className="imgContainer">
                            {/* O alt da imagem agora também é traduzido para melhor acessibilidade */}
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="textContainer">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={item.rota}>{t('other_projects.button')}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherProjects;