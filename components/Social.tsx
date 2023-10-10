import React from 'react';

interface SocialProps {
  icon: React.ReactNode;
  url: string; // Prop para la URL del enlace
}

const Social = ({ icon, url }:SocialProps) => {
  const handleClick = () => {
    // Redirigir a la URL cuando se hace clic en el botón
    window.location.href = url;
  };

  return (
    <button
      className="bg-orange-700 rounded-full p-2 hover:scale-105 gap-2"
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

export { Social };
