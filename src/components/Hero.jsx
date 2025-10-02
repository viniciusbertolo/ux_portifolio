// import 'boxicons/css/boxicons.min.css';
// import Spline from '@splinetool/react-spline';
// import { motion } from "framer-motion";

// const Hero = () => {
//     return (
//         <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">

//             <motion.div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">

//                 <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
//                     <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1' >
//                         <i class='bx bx-diamond'>INTRODUCING</i>
//                     </div>
//                 </div>




//                 <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
//                     EMAIL FOR
//                     <br />
//                     DEVELOPERS
//                 </h1>

//                 <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
//                     The best way to reach uumans insted of spam flders, dlever transactional and marketing emails at scale.
//                 </p>

//                 <div className='flex gap-4 mt-12'>
//                     <a className='border border-[#2a2a2a#] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href="#">
//                         Documentation <i class='bx bx-link-external'></i>
//                     </a>
//                     <a className='border border-[#2a2a2a#] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white' href="#">
//                         GetStarted <i class='bx bx-link-external'></i>
//                     </a>
//                 </div>
//             </motion.div>

//             <Spline className='bg-red absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:lfEt-[-2%] h-full [clip-path:inset(0_0_6%_0)]' scene="https://prod.spline.design/kdPjCdHsh7NKkXM4/scene.splinecode" />


//         </main>
//     )
// }

// export default Hero


import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";

// As definições da animação continuam as mesmas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Atraso entre a animação de cada filho
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
  return (
    // O <main> agora é um elemento normal, sem animação
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(80vh-6rem)]">

      {/* A animação em cascata começa AQUI */}
      <motion.div 
        className="max-w-xl ml-[5%] mr-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Cada filho direto se torna um 'motion' e recebe a animação 'itemVariants' */}
        <motion.div variants={itemVariants} className='relative w-[100%] sm:w-48 h-10 bg-gradient-to-r from-[#ff8c00] to-[#ff0080] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
          <div className='font-[Open_Sans] absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1' >
            <i className='bx bx-diamond'>
                </i>
                INTRODUCING
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className='font-[Open_Sans] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin tracking-wider my-8'>
          EMAIL FOR
          <br />
          DEVELOPERS
        </motion.h1>

        <motion.p variants={itemVariants} className='font-[Open_Sans] text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
          The best way to reach humans instead of spam folders, deliver transactional and marketing emails at scale.
        </motion.p>

        <motion.div variants={itemVariants} className='flex gap-4 mt-6'>
          <a className='font-[Open_Sans] border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href="#">
            Documentation <i className='bx bx-link-external'></i>
          </a>
          <a className='font-[Open_Sans] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-[#ff8c00] text-black hover:text-white' href="#">
            Get Started <i className='bx bx-link-external'></i>
          </a>
        </motion.div>
      </motion.div>

      {/* O Spline não tem mais nenhuma animação vinda do Framer Motion */}
      <Spline className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:lfEt-[-2%] h-full [clip-path:inset(0_0_10%_0)]' scene="https://prod.spline.design/kdPjCdHsh7NKkXM4/scene.splinecode" />

    </main>
  )
}

export default Hero;