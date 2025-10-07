import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './backTop.scss';

const BackTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // --- AQUI ESTÁ A MUDANÇA ---
  const scrollToTop = () => {
    // Adiciona a classe para desativar o scroll-snap
    document.documentElement.classList.add('scrolling');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Remove a classe após um tempo para reativar o scroll-snap
    // O tempo (750ms) deve ser um pouco maior que a duração do scroll suave
    setTimeout(() => {
      document.documentElement.classList.remove('scrolling');
    }, 750);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
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