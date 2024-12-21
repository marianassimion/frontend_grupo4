"use client";
// Docs {@link https://tailwindcss.com/docs/text-color}
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

export default function CadastroProfessor() {
  const navigate = useRouter();
  return (
    <div className="flex w-full h-screen">
      {/* Lado esquerdo com imagem */}
      <div className="w-1/2 h-full bg-cover bg-center relative">
        <Image 
          src="/images/login.png" 
          alt="Foto de login" 
          layout="fill" 
          objectFit="cover" 
          priority 
        />
      </div>

      {/* Lado direito com formulário */}
      <div className="w-1/2 h-full bg-gray-100 flex flex-col justify-center p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Avaliação de Professores
        </h1>
        <form>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Senha"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              onClick={() => navigate.push('/Feed')}
              className="px-6 py-2 bg-green-300 text-black font-semibold rounded-md hover:bg-green-400 transition"
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={() => navigate.push('/Cadastros/CadastroUsuario')}
              className="px-6 py-2 bg-green-300 text-black font-semibold rounded-md hover:bg-green-400 transition"
            >
              Criar Conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
