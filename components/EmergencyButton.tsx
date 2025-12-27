
import React from 'react';

const EmergencyButton: React.FC = () => {
  const handleExit = () => {
    // Redirect to a neutral page like Google or Weather
    window.location.replace('https://www.google.com/search?q=previsao+do+tempo');
  };

  return (
    <button
      onClick={handleExit}
      className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group border-2 border-white/20"
    >
      <span className="hidden group-hover:inline transition-all duration-300 uppercase text-sm tracking-widest">
        Sair Rápido (Esc)
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    </button>
  );
};

export default EmergencyButton;
