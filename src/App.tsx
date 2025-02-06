import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Terminal, Database, Server, Code2, Cpu, Download } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const CurrentYear = () => {
    const year = new Date().getFullYear();
    return <>{year}</>;
  };

  const projects = [
    {
      title: "Sistema de Microserviços",
      description: "Arquitetura distribuída com .NET Core e RabbitMQ",
      tech: ["C#", ".NET", "Docker", "RabbitMQ"],
      role: "Arquiteto Backend"
    },
    {
      title: "API de Alta Performance",
      description: "REST API com cache distribuído e otimização",
      tech: ["Node.js", "Redis", "PostgreSQL"],
      role: "Tech Lead"
    },
    {
      title: "Pipeline de Dados",
      description: "Sistema ETL para processamento em tempo real",
      tech: ["Python", "Apache Kafka", "AWS"],
      role: "Desenvolvedor Backend"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              MS
            </span>
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                Contato
              </button>
              <a
                href="/cv-joao-silva.pdf"
                download
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>CV</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className={`text-center space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
            Murilo Santana
          </h1>
          <p className="text-xl text-gray-400 font-mono">
            Desenvolvedor Back-end
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
                Com 3 anos de experiência em desenvolvimento de software, minha trajetória é marcada pela resolução de problemas, otimização de sistemas e criação de soluções eficientes.
                <br />
                <br />
                Atualmente, sou Analista Back-end na Automind, atuando na análise e correção de bugs no Sistema Autoload, uma plataforma de gestão de terminais de granéis líquidos e sólidos integrada a processos de automação. Meu foco é garantir estabilidade e performance.
                <br />
                <br />
                Anteriormente, na Segline Business, desenvolvi um ERP e CRM completos para Telemarketing e Empréstimos, entregando um sistema do zero sem formação acadêmica, apenas com dedicação e aprendizado contínuo. Esse desafio impulsionou meu crescimento e me levou a iniciar o curso de Engenharia da Computação.
                <br />
                <br />
                Motivado por resolver problemas e criar algoritmos eficientes, busco crescer e me tornar um grande desenvolvedor, contribuindo para projetos inovadores e impactantes.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">Linguagens de Programação & Ferramentas</h3>
              <div className="flex flex-wrap gap-3">
                {['C#', '.NET', 'Node.js', 'JavaScript', 'TypeScript', 'SQL Server', 'React', 'Docker'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-purple-400">Workflow</h3>
              <div className="flex flex-wrap gap-3">
                {['Mobile-First', 'Design Responsivo', 'Testes Unitários', 'Trabalho em Equipe', 'Desenvolvimento Ágil', 'Scrum', 'Kanban', 'Clean Architecture', 'Solid'].map((tech) => (
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
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Projetos</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Contato</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com" className="transform transition-all duration-300 hover:scale-110 hover:text-purple-400">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" className="transform transition-all duration-300 hover:scale-110 hover:text-purple-400">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:contact@example.com" className="transform transition-all duration-300 hover:scale-110 hover:text-purple-400">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center text-gray-500">
        <p>© <CurrentYear /> Murilo Santana. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;