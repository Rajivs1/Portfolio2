import { ThemeProvider } from './context/ThemeContext';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import HireMeForm from "./Components/Footer/HireMeForm";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-200">
        <Navbar />
        {/* Main content wrapper with padding-top to prevent navbar overlap */}
        <main className="pt-[72px] md:pt-[80px]">
          <Home />
          <About />
          <AboutMe />
          <Projects />
          <WorkExperience />
          <Contact />
          <HireMeForm />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
