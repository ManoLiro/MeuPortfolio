import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Terminal, Database, Server, Download, Globe, Menu, X } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("en"); // "pt" = Portuguese, "en" = English
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const file = language === "pt"
      ? { url: "../Documents/Murilo santana CV Portugues.pdf", filename: "CV-Portuguese.pdf" }
      : { url: "../Documents/Murilo santana CV Inglês.pdf", filename: "CV-English.pdf" };

    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const CurrentYear = () => {
    const year = new Date().getFullYear();
    return <>{year}</>;
  };

  const projects = [
    {
      title: language === "pt" ? "Sistema de Microserviços" : "Microservices System",
      description: language === "pt" ? "Arquitetura distribuída com .NET Core e RabbitMQ" : "Distributed architecture with .NET Core and RabbitMQ",
      tech: ["C#", ".NET", "Docker", "RabbitMQ"],
      role: language === "pt" ? "Arquiteto Backend" : "Backend Architect"
    },
    {
      title: language === "pt" ? "API de Alta Performance" : "High Performance API",
      description: language === "pt" ? "REST API com cache distribuído e otimização" : "REST API with distributed cache and optimization",
      tech: ["Node.js", "Redis", "PostgreSQL"],
      role: "Tech Lead"
    },
    {
      title: language === "pt" ? "Pipeline de Dados" : "Data Pipeline",
      description: language === "pt" ? "Sistema ETL para processamento em tempo real" : "ETL system for real-time processing",
      tech: ["Python", "Apache Kafka", "AWS"],
      role: language === "pt" ? "Desenvolvedor Backend" : "Backend Developer"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
          }`}
      >
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            MS
          </span>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection("inicio")} className="text-gray-300 hover:text-blue-400 transition-colors">
              {language === "pt" ? "Início" : "Home"}
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-gray-300 hover:text-blue-400 transition-colors">
              {language === "pt" ? "Sobre" : "About"}
            </button>
            <button onClick={() => scrollToSection("projetos")} className="text-gray-300 hover:text-blue-400 transition-colors">
              {language === "pt" ? "Projetos" : "Projects"}
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-gray-300 hover:text-blue-400 transition-colors">
              {language === "pt" ? "Contato" : "Contact"}
            </button>

            {/* Language Toggle Button */}
            <button
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors text-white"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "pt" ? "PT" : "EN"}</span>
            </button>

            {/* CV Download Button */}
            <button
              onClick={downloadCV}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white"
            >
              <span>{language === "pt" ? "CV Português" : "CV English"}</span>
              <Download className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button (Only visible on small screens) */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </nav>

        {/* Mobile Menu (Collapsible) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 shadow-lg p-4 absolute top-full left-0 w-full">
            <div className="flex flex-col space-y-4">
              <button onClick={() => { scrollToSection("inicio"); setIsMobileMenuOpen(false); }} className="text-gray-300 hover:text-blue-400 transition-colors">
                {language === "pt" ? "Início" : "Home"}
              </button>
              <button onClick={() => { scrollToSection("sobre"); setIsMobileMenuOpen(false); }} className="text-gray-300 hover:text-blue-400 transition-colors">
                {language === "pt" ? "Sobre" : "About"}
              </button>
              <button onClick={() => { scrollToSection("projetos"); setIsMobileMenuOpen(false); }} className="text-gray-300 hover:text-blue-400 transition-colors">
                {language === "pt" ? "Projetos" : "Projects"}
              </button>
              <button onClick={() => { scrollToSection("contato"); setIsMobileMenuOpen(false); }} className="text-gray-300 hover:text-blue-400 transition-colors">
                {language === "pt" ? "Contato" : "Contact"}
              </button>

              {/* Language Toggle Button */}
              <button
                onClick={() => {
                  setLanguage(language === "pt" ? "en" : "pt");
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors text-white"
              >
                <Globe className="w-4 h-4" />
                <span>{language === "pt" ? "PT" : "EN"}</span>
              </button>

              {/* CV Download Button */}
              <button
                onClick={() => {
                  downloadCV();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white"
              >
                <span>{language === "pt" ? "CV Português" : "CV English"}</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className={`text-center space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
            Murilo Santana
          </h1>
          <p className="text-xl text-gray-400 font-mono">
            {language === "pt" ? "Desenvolvedor Back-end" : "Back-end Developer"}
          </p>
          <div className="flex justify-center space-x-4">
            <Terminal className="w-6 h-6 text-blue-400" />
            <Database className="w-6 h-6 text-purple-400" />
            <Server className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Sobre Mim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                {language === "pt" ? "Com 3 anos de experiência em desenvolvimento de software, minha trajetória é marcada pela resolução de problemas, otimização de sistemas e criação de soluções eficientes." : "With 3 years of experience in software development, my journey is marked by problem-solving, system optimization, and creating efficient solutions."}
                <br />
                <br />
                {language === "pt" ? "Atualmente, sou Analista Back-end na Automind, atuando na análise e correção de bugs no Sistema Autoload, uma plataforma de gestão de terminais de granéis líquidos e sólidos integrada a processos de automação. Meu foco é garantir estabilidade e performance." : "Currently, I am a Back-end Analyst at Automind, working on bug analysis and fixing in the Autoload System, a platform for managing bulk liquid and solid terminals integrated with automation processes. My focus is on ensuring stability and performance."}
                <br />
                <br />
                {language === "pt" ? "Anteriormente, na Segline Business, desenvolvi um ERP e CRM completos para Telemarketing e Empréstimos, entregando um sistema do zero sem formação acadêmica, apenas com dedicação e aprendizado contínuo. Esse desafio impulsionou meu crescimento e me levou a iniciar o curso de Engenharia da Computação." : "Previously, at Segline Business, I developed a complete ERP and CRM for Telemarketing and Loans, delivering a system from scratch without academic training, only with dedication and continuous learning. This challenge boosted my growth and led me to start the Computer Engineering course."}
                <br />
                <br />
                {language === "pt" ? "Motivado por resolver problemas e criar algoritmos eficientes, busco crescer e me tornar um grande desenvolvedor, contribuindo para projetos inovadores e impactantes." : "Motivated by solving problems and creating efficient algorithms, I seek to grow and become a great developer, contributing to innovative and impactful projects."}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">{language === "pt" ? "Linguagens de Programação & Ferramentas" : "Programming Languages & Tools"}</h3>
              <div className="flex flex-wrap gap-3">
                {['C#', '.NET', 'Node.js', 'JavaScript', 'TypeScript', 'SQL Server', 'React', 'Docker'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-purple-400">Workflow</h3>
              <div className="flex flex-wrap gap-3">
                {['Mobile-First', language === "pt" ? "Responsive Design" : "Contact", language === "pt" ? "Testes Unitários" : "Unit Tests", language === "pt" ? "Trabalho em Equipe" : "Team Work", language === "pt" ? "Desenvolvimento Ágil" : "Agile Development", 'Scrum', 'Kanban', 'Clean Architecture', 'Solid'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">{language === "pt" ? "Projetos" : "Projects"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-700 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{project.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">{language === "pt" ? "Contato" : "Contact"}</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/ManoLiro" className="transform transition-all duration-300 hover:scale-110 hover:text-purple-400">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/murilo-santana-a63143232/" className="transform transition-all duration-300 hover:scale-110 hover:text-purple-400">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:murilo.cruzsantana@gmail.com" className="transform transition-all duration-300 hover:scale-110 hover:text-purple-400">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center text-gray-500">
        <p>© <CurrentYear /> Murilo Santana. {language === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</p>
      </footer>
    </div>
  );
}

export default App;