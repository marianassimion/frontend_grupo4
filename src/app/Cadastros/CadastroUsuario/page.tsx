"use client"
// Docs {@link https://tailwindcss.com/docs/text-color}
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';


export default function CadastroUsuario() {
   const navigate = useRouter();
  return (
    <div className='flex items-center justify-center min-h-screen bg-black'>
      {/* Container principal */}
      <div className='flex w-full max-w-6xl h-screen bg-white'>
        {/* Metade com a imagem */}
        <div
          className='hidden md:block md:w-1/2 bg-cover bg-center'
          
        >
        <Image src="/images/login.png" alt="Foto de login" width={751} height={1000}></Image>
        </div>

        {/* Metade com o formulário */}
        <div className='w-full md:w-1/2 bg-gray-100 flex flex-col justify-center p-10'>
          <h1 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
            Cadastro Usuário
          </h1>
          <form>
            <div className='mb-6'>
              <input
                type='name'
                placeholder='Nome'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              />
            </div>
                  <div className='mb-6'>
              <input
                type='email'
                placeholder='Email'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              />
            </div>
                  <div className='mb-6'>
              <input
                type='password'
                placeholder='Senha'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              />
            </div>
                  <div className='mb-6'>
              <input
                type='course'
                placeholder='Curso'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              />
            </div>
            <div className='mb-6'>
              <input
                type='department'
                placeholder='Departamento'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              />
            </div>
            <div className='flex justify-center space-x-4'>
              <button
                type='button'
                onClick={() => navigate.push('/')}
                className='px-6 py-2 bg-green-300 text-black font-semibold rounded-md hover:bg-green-400 transition'
              >
                Criar Conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
