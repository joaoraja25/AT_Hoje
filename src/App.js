import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar"; // Importa a Navbar
import AlternarModo from "./components/AlternarModo"; // Importa o componente de alternância de modo
import AcessoInformacao from "./components/AcessoInformacao"; // Importa o componente Acesso à Informação
import Acervo from "./components/Acervo"; // Importa o componente Acervo
import Publicacoes from "./components/Publicacoes"; // Importa o componente Publicações
import Educacao from "./components/Educacao"; // Importa o componente Educação
import FAQ from "./components/FAQ"; // Importa o componente FAQ
import Contato from "./components/Contato"; // Importa o componente Contato
import ScrollToTopButton from "./components/ScrollToTopButton"; // Importa o botão de rolar para o topo
import Footer from "./components/Footer"; // Importa o rodapé
import "./App.css"; // Estilos globais opcionais

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para o modo escuro

  // Adiciona ou remove a classe do modo escuro ao body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("modo-escuro");
    } else {
      document.body.classList.remove("modo-escuro");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Alterna entre claro e escuro
  };

  return (
    <div className="App">
      {/* Adiciona o Header */}
      <header>
        <Navbar />
      </header>

      {/* Botão de alternância de modo */}
      <div className="alternar-modo">
        <button className="botao-alternar" onClick={toggleDarkMode}>
          {isDarkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </div>

      {/* Renderiza o botão de Modo Claro/Escuro */}
      <AlternarModo />

      {/* Adiciona o Main */}
      <main>
        {/* Renderiza o componente de Acesso à Informação */}
        <section id="informacao">
          <AcessoInformacao />
        </section>

        {/* Renderiza o componente Acervo */}
        <section id="acervo">
          <Acervo />
        </section>

        {/* Renderiza o componente Publicações */}
        <section id="publicacoes">
          <Publicacoes />
        </section>

        {/* Renderiza o componente Educação */}
        <section id="educacao">
          <Educacao />
        </section>

        {/* Renderiza o componente FAQ */}
        <section id="perguntas">
          <FAQ isDarkMode={isDarkMode} />
        </section>

        {/* Renderiza o componente Contato */}
        <section id="faleconosco">
          <Contato />
        </section>

        {/* Botão para voltar ao topo */}
        <ScrollToTopButton />
      </main>

      {/* Adiciona o Footer */}
      <Footer />
    </div>
  );
}

export default App;
