"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { createUser } from '@/app/Utils/api';

export default function CadastroProfessor() {
  const navigate = useRouter();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    curso: '',
    departamento: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // Previne o comportamento padrão do formulário

  try {
    const newUser = {
      nome: formData.nome,
      email: formData.email,
      senha: formData. senha,
      curso: formData.curso,
      departamento: formData.departamento,
    };

    await createUser(newUser); // Chama a função que faz a requisição ao back-end
    alert('Usuário cadastrado com sucesso!');
    navigate.push('/Feed'); // Redireciona após o cadastro
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    alert('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
  }
};


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
          Cadastro Usuário
        </h1>
        <form onSubmit={handleSubmit}> {/* Usando onSubmit para submeter o formulário */}
          <div className="mb-6">
            <input
              type="text"
              name="nome" // Definindo o nome do campo para vincular ao estado
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email" // Definindo o nome do campo para vincular ao estado
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="senha" // Definindo o nome do campo para vincular ao estado
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="curso" // Definindo o nome do campo para vincular ao estado
              placeholder="Curso"
              value={formData.curso}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="departamento" // Definindo o nome do campo para vincular ao estado
              placeholder="Departamento"
              value={formData.departamento}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="submit" // O tipo agora é 'submit' para acionar o formulário
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