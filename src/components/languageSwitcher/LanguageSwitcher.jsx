import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import { ChevronDown } from 'lucide-react';
import './languageSwitcher.scss';

const languages = [
  { code: 'pt', countryCode: 'BR', name: 'Português' },
  { code: 'en', countryCode: 'US', name: 'English' },
  { code: 'de', countryCode: 'DE', name: 'Deutsch' },
];

// 1. Mantivemos a lógica para aceitar uma className externa
function LanguageSwitcher({ className = '' }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find((lang) => i18n.language.startsWith(lang.code)) || languages[0];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    // 2. A className externa é aplicada aqui, como antes
    <div className={`dropdown-container ${className}`.trim()} ref={dropdownRef}>
      <div
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {/* 3. Suas alterações na bandeira foram mantidas */}
        <ReactCountryFlag
          countryCode={currentLang.countryCode}
          svg
          style={{ width: '1.5em', height: '1.5em', borderRadius: '6px' }}
          title={currentLang.name}
        />
        {/* 4. A exibição do código do país e a fonte foram mantidas */}
        <span className='font-[Open_Sans]'>{currentLang.countryCode}</span>
        <ChevronDown size={18} className={`chevron ${isOpen ? 'open' : ''}`} />
      </div>

      <ul className={`dropdown-list ${isOpen ? 'open' : ''}`}>
        {languages.map((lang) => (
          <li
            key={lang.code}
            className="dropdown-item"
            onClick={() => handleLanguageChange(lang.code)}
          >
            <ReactCountryFlag
              countryCode={lang.countryCode}
              svg
              // Corrigi '1.em' para '1.5em' para manter a consistência visual
              style={{ width: '1.5em', height: '1.5em', borderRadius: '4px' }}
              title={lang.name}
            />
            <span className='font-[Open_Sans]'>{lang.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSwitcher;