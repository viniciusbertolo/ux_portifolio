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

  // A função scrollToTop FOI REMOVIDA, não precisamos mais dela!

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top-container">
      {isVisible && (
        // AQUI ESTÁ A MUDANÇA: trocamos <button> por <a>
        // O onClick foi removido e substituído por href="#topo"
        <a href="#topo" className="back-to-top-button">
          <ArrowUp size={24} />
        </a>
      )}
    </div>
  );
};

export default BackTop;