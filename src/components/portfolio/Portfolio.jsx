import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/33847404/pexels-photo-33847404.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ad? Quo obcaecati dolore iure impedit. Molestias laudantium quod, ut iste aspernatur ullam similique recusandae quos blanditiis cumque. Eaque, ipsam nisi."
    },
    {
        id: 2,
        title: "Next.JS Commerce",
        img: "https://images.pexels.com/photos/33865268/pexels-photo-33865268.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ad? Quo obcaecati dolore iure impedit. Molestias laudantium quod, ut iste aspernatur ullam similique recusandae quos blanditiis cumque. Eaque, ipsam nisi."
    },
    {
        id: 3,
        title: "Vanilla JS Commerce",
        img: "https://images.pexels.com/photos/14176495/pexels-photo-14176495.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ad? Quo obcaecati dolore iure impedit. Molestias laudantium quod, ut iste aspernatur ullam similique recusandae quos blanditiis cumque. Eaque, ipsam nisi."
    },
    {
        id: 4,
        title: "Music App Commerce",
        img: "https://images.pexels.com/photos/33847404/pexels-photo-33847404.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ad? Quo obcaecati dolore iure impedit. Molestias laudantium quod, ut iste aspernatur ullam similique recusandae quos blanditiis cumque. Eaque, ipsam nisi."
    },
]

const Single = ({ item }) => {
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
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })


    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1 className="font-[Open_Sans] text-[36px] md:text-[72px]">Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
