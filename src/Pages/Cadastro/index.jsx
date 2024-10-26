import { Link } from "react-router-dom";

import React from 'react';

function Cadastro() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12">
        <h2 className="text-4xl font-bold text-white mb-4">Cadastre-se e otimize suas entregas!</h2>
        <p className="mb-6 text-gray-400">Preencha as informações abaixo para criar sua conta e gerenciar suas entregas com eficiência.</p>
        
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-2 text-white" htmlFor="name">Nome</label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200"
              type="text"
              id="name"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2 text-white" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200"
              type="email"
              id="email"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2 text-white" htmlFor="password">Senha</label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200"
              type="password"
              id="password"
              placeholder="Crie uma senha"
            />
          </div>

          <button className="w-full bg-white text-black py-2 mt-5 rounded font-bold">Cadastrar</button>

          <p className="mt-4 text-sm text-center text-gray-400">
            Já tem uma conta? <a href="#" className="text-white">Faça login</a>
          </p>
        </form>
      </div>

						<div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center bg-gray-800 rounded-2xl">
        
        <img src="/logoUPX.png" alt="Logo RouteXpress" className="max-w-md mb-6"/>
        
        
        <p className="text-xl text-white uppercase tracking-widest">RouteXpress</p>
      </div>
    </div>
  );
}

export default Cadastro;
