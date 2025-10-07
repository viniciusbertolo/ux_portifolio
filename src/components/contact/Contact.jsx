import { motion, useInView } from "framer-motion"
import emailjs from '@emailjs/browser';
import "./contact.scss"
import { useRef, useState } from "react"


const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}

const Contact = () => {
    const ref = useRef()
    const formRef = useRef()

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const isInView = useInView(ref, { margin: "-100px" })




    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_c77bb19', 'template_pkwjmhe', formRef.current, {
                publicKey: 'W7AXXrBRuYFW8jS0O',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSuccess(true)
                },
                (error) => {
                    setError(true)
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work togeter</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>mail</h2>
                    <span>hello@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Adress</h2>
                    <span>hello street New York</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+55169+82559460</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">

                <motion.div className="phoneSvg"
                    initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 2, duration: 2 }}
                >
                    <svg
                        
                        viewBox="0 0 32.666 32.666"

                    >
                        <g transform="scale(0.5)">
                            <motion.path
                                // Propriedades de Estilo do SVG
                                fill="none"
                                strokeWidth="0.2"

                                // Animação com Framer Motion
                                initial={{ pathLength: 0 }} // Começa com a linha "invisível"
                                animate={isInView && { pathLength: 1 }} // Anima para a linha completa
                                transition={{ duration: 8 }} // Duração e tipo da animação

                                // O caminho (path "d") completo do ícone
                                d="M58.4131,18.9326c-1.9263-6.3618-8.4339-10.0986-14.8184-8.7148V4.5215C43.5947,2.5796,42.0146,1,40.0723,1H8.5625 C6.6211,1,5.041,2.5796,5.041,4.5215v54.9531C5.041,61.4185,6.6211,63,8.5625,63h31.5098c1.9424,0,3.5225-1.5815,3.5225-3.5254 V34.9987c0.8694,0.1879,1.7562,0.2944,2.6514,0.2943c1.2324,0,2.4766-0.1807,3.6953-0.5503 c3.2432-0.98,5.9111-3.1641,7.5107-6.1499S59.3936,22.1763,58.4131,18.9326z M17.3389,3h14.8516v1.1694 c0,0.645-0.5244,1.1694-1.1689,1.1694H18.5078c-0.6445,0-1.1689-0.5244-1.1689-1.1694V3z M41.5947,59.4746 c0,0.8413-0.6826,1.5254-1.5225,1.5254H8.5625c-0.8389,0-1.5215-0.6841-1.5215-1.5254v-1.8105h34.5537V59.4746z M41.5947,55.6641 H7.041V4.5215C7.041,3.6826,7.7236,3,8.5625,3h6.7764v1.1694c0,1.7476,1.4219,3.1694,3.1689,3.1694h12.5137 c1.7471,0,3.1689-1.4219,3.1689-3.1694V3h5.8818c0.8398,0,1.5225,0.6826,1.5225,1.5215v6.3034 c-4.5197,1.791-7.5121,5.973-7.9446,10.6227c-2.5029-2.0181-5.6285-3.1585-8.8875-3.1585 c-7.8164,0-14.1748,6.3594-14.1748,14.1758c0,7.8184,6.3584,14.1792,14.1748,14.1792c7.6611,0,13.9066-6.1145,14.1525-13.7188 c0.8413,0.6011,1.7406,1.0884,2.6796,1.463V55.6641z M32.9805,32.1948c0.1934,0.2974,0.5352,0.4697,0.8838,0.4521l3.0723-0.1449 c-0.0099,3.2549-1.3094,6.2068-3.4045,8.3885c-1.0362-2.2237-2.8808-3.9504-5.1066-4.8685c1.3971-1.0922,2.3-2.7884,2.3-4.6949 c0-3.2876-2.6748-5.9624-5.9629-5.9624c-3.2852,0-5.958,2.6748-5.958,5.9624c0,1.9064,0.9023,3.6025,2.298,4.6947 c-2.226,0.9186-4.0708,2.647-5.1069,4.8726c-2.1052-2.1902-3.4079-5.1582-3.4079-8.4296c0-6.7139,5.4619-12.1758,12.1748-12.1758 c3.4019,0,6.6415,1.4354,8.9441,3.9325c0.0883,0.6851,0.2189,1.3716,0.425,2.0543c0.1504,0.4927,0.3262,0.9702,0.5254,1.4258 l-1.7354,3.502C32.7637,31.5215,32.7861,31.8984,32.9805,32.1948z M24.7627,37.2896c3.2084,0,6.05,2.0333,7.1616,5.0024 c-2.0123,1.4719-4.4831,2.3521-7.1616,2.3521c-2.6768,0-5.1465-0.8791-7.1584-2.3495 C18.7158,39.3243,21.5561,37.2896,24.7627,37.2896z M20.8047,31.3271c0-2.1851,1.7754-3.9624,3.958-3.9624 c2.1855,0,3.9629,1.7773,3.9629,3.9624s-1.7773,3.9624-3.9629,3.9624C22.5801,35.2896,20.8047,33.5122,20.8047,31.3271z M55.6895,27.6484c-1.3477,2.5146-3.5947,4.3545-6.3271,5.1802c-3.5283,1.0698-7.3066,0.2622-10.0996-2.1616 c-0.1826-0.1582-0.415-0.2446-0.6553-0.2446c-0.0156,0-0.0313,0.0005-0.0469,0.001l-3.0928,0.146l1.1934-2.4077 c0.1377-0.2778,0.1396-0.6035,0.0039-0.8823c-0.2412-0.4941-0.4492-1.0278-0.6191-1.584 c-1.7031-5.6387,1.4971-11.6123,7.1328-13.3169c5.6396-1.7031,11.6143,1.4976,13.3203,7.1333 C57.3242,22.2437,57.0371,25.1333,55.6895,27.6484z"
                            />
                        </g>
                    </svg>

                </motion.div>

                <motion.form onSubmit={sendEmail} ref={formRef} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }}>
                    <input type="text" required placeholder="Name" name="name"/>
                    <input type="email" required placeholder="Email" name="email"/>
                    <textarea placeholder="Message" rows={4} name="message"></textarea>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact
