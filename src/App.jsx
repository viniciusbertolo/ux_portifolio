import BackTop from "./components/backTop/BackTop"
import Contact from "./components/contact/Contact"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"
import Socials from "./components/social/Social"

import { useTranslation } from 'react-i18next';

export default function App() {


  // O hook 'useTranslation' te dá a função 't' e a instância 'i18n'
  const { t, i18n } = useTranslation();

  // Função para mudar o idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <main>
      <section id="topo">

        <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="Gradient-img" />

        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#ff8c00] -rotate-[30deg] -z-10"></div>

        <Header />
        <Hero />
      </section>

      <section>

        <Services />
      </section>


      <Portfolio />

      <section>
        <Socials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <BackTop />



    </main>
  )
}