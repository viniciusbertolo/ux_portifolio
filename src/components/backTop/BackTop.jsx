import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // Usando um ícone da Lucide
import './backTop.scss';

const BackTop = () => {
  // Estado para controlar a visibilidade do botão
  const [isVisible, setIsVisible] = useState(false);

  // Função que verifica a posição do scroll e atualiza o estado
  const toggleVisibility = () => {
    // Se o scroll vertical for maior que 300px, mostra o botão
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar a página suavemente para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // A mágica do scroll suave
    });
  };

  // useEffect para adicionar e remover o 'event listener' do scroll
  useEffect(() => {
    // Adiciona o listener quando o componente é montado
    window.addEventListener('scroll', toggleVisibility);

    // Remove o listener quando o componente é desmontado (importante para performance)
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // O array vazio [] garante que o efeito só rode na montagem e desmontagem

  return (
    // Renderiza o botão apenas se 'isVisible' for verdadeiro
    <div className="back-to-top-container">
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top-button">
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default BackTop;