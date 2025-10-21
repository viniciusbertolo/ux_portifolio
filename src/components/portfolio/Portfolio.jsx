import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useTranslation } from "react-i18next"


 




const Single = ({ item }) => {
    const { t } = useTranslation();

    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])



   
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.rota}>{t('projects.button')}</a>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

const Portfolio = () => {
    const { t } = useTranslation();
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })


    const items = [
    {
        id: 1,
        title: t('projects.Project_1_title'),
        img: "/digital_tech_project.png",
        description: t('projects.Project_1_desc'),
        rota: "/digital-tech"
    },
    {
        id: 2,
        title: t('projects.Project_2_title'),
        img: "/ds_img.png",
        description: t('projects.Project_2_desc'),
        rota: "/digital-tech"    
    },
    {
        id: 3,
        title: t('projects.Project_3_title'),
        img: "/vagalumen.png",
        description: t('projects.Project_3_desc'),
        rota: "/digital-tech"
    },
    {
        id: 4,
        title: t('projects.Project_4_title'),
        img: "https://images.pexels.com/photos/33847404/pexels-photo-33847404.jpeg",
        description: t('projects.Project_4_desc'),
        rota: "/digital-tech"
    },

]


    return (
        <div className="portfolio" ref={ref} id="projects">
            <div className="progress">
                <h1 className="font-[Open_Sans] text-[36px] md:text-[72px]">{t('projects.title')}</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
