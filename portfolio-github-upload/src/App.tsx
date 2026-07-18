import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import type { Language } from "./types";

export default function App() {
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = language === "zh" ? "Esther Cui｜商业分析师作品集" : "Esther Cui | Business Analyst Portfolio";
  }, [language]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbf9ff] text-[#282335]">
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
