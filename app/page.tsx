import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import MyWork from "./components/Portfolio";
import Contact from "./components/Contact";
import MySkills from "./components/MySkills";

export default function Home() {
  return (
    <div className="dark:text-color-text text-color-text-light  ">
      <Hero />
      <About />
      <MySkills />
      <Services /> 
      <MyWork />
      <Contact />
    </div>
  );
}
