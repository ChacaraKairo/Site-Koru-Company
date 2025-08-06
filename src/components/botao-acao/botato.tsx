import React from 'react';

const BotaoWhatsapp = () => {
  const numero = '5549989233265'; // Substitua pelo seu número com DDI
  const mensagem = encodeURIComponent(
    'Olá! Tenho interesse em contratar os serviços da Koru.',
  );
  const link = `https://wa.me/${numero}?text=${mensagem}`;

  return (
    <div className="w-full flex justify-center my-2">
      {/* Margem vertical ainda menor */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-extrabold py-4 px-8 rounded-full shadow-2xl text-lg sm:text-xl transition-transform duration-300 transform hover:scale-105 animate-pulse flex items-center gap-3"
      >
        <span className="text-3xl">📲</span>
        <span>CLIQUE AQUI E CONTRATE NOSSOS SERVIÇOS!</span>
      </a>
    </div>
  );
};

export default BotaoWhatsapp;
