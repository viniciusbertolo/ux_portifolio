import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/services/Services"

export default function App() {
  return (
    <main>
      <section>

      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="Gradient-img" />

      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#ff8c00] -rotate-[30deg] -z-10"></div>

      <Header />
      <Hero />
      </section>

      <section>

        <Services />
      </section>

      
    </main>
  )
}