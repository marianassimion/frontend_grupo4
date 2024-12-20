"use client"
import { useState } from "react";
import Header from "../Header/HeaderLogado";
import Link from 'next/link';
import Modal from "../modals/modal";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main>
      <Header />
      <div className="text-black bg-gray-300 grid grid-flow-1">
        <div className="col-span h-32 w-3/5 bg-primary place-self-center position:relative"></div>
        <div className="col-span h-44 w-3/5 bg-white place-self-center">
          <div className="absolute pl-12 pt-20">
            <div className="font-bold">Morty Gamer</div>
            <div className="flex-row">
              <div className="flex gap-2 items-center">
                <img src="images/build.png" alt="Empresa" className="w-5 h-5" />
                <div>Ciência da Computação</div>
                <div>Dept. Ciência da Computação</div>
              </div>
              <div className="flex gap-2 items-center">
                <img src="images/letter.png" alt="Empresa" className="w-5 h-5" />
                Morty.gamer.23@cjr.org.br
              </div>
            </div>
          </div>
          <div className="grid place-self-end mr-8 mt-4 rounded-1/4 gap-2">
            <button
              type="button"
              className="border-2 bg-green-700 hover:border-green-700 hover:bg-white hover:text-green-700 font-bold rounded-lg text-gray-600 px-2 p-1"
              onClick={handleOpenModal}
            >
              Editar Perfil
            </button>
            <button
              type="button"
              className="border-2 bg-red-700 hover:border-red-700 hover:bg-white hover:text-red-700 font-bold rounded-lg text-gray-600 px-2 p-1"
            >
              Excluir Perfil
            </button>
          </div>
        </div>

        <div className="absolute rounded-full h-32 w-32 left-1/4 mt-16">
          <img src="images/morty.png" alt="Foto de Perfil" className="rounded-full" />
        </div>

        <div className="bg-white w-3/5 place-self-center border-t border-black">
          <div className="mt-4 ml-2 mb-4 font-bold">Publicações</div>
          <div className="rounded-2xl h-auto bg-primary place-self-center gap-4 p-4 m-2">
            <div className="absolute rounded-full h-12 w-12 border-t">
              <img src="images/morty.png" alt="Foto de Perfil" className="rounded-full" />
            </div>
            <div className="pl-16">
              <div className="flex gap-4">
                <div className="font-bold">Morty Gamer</div>
                <div className="text-gray-700">- Data/Mês/Ano, às Hora:Segundo</div>
              </div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla asperiores numquam libero, quia pariatur tenetur odio delectus fuga
                nihil voluptate iure corporis quisquam provident labore ducimus eaque rem optio!
              </div>
              <div className="flex justify-between items-center">
                <div className="pt-2 flex items-center gap-2">
                  <img src="images/comments.png" alt="Icone comentario" className="h-6 w-6" />
                  <div className="text-gray-700">5 comentários</div>
                </div>
                <div className="place-self-end pt-2 flex gap-2">
                  <img src="images/edit.png" alt="Editar Postagem" className="h-7 w-7 items-end" />
                  <img src="images/trash.png" alt="Excluir Postagem" className="h-7 w-7 items-end" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl h-auto bg-primary place-self-center gap-4 p-4 m-2">
            <div className="absolute rounded-full h-12 w-12 border-t">
              <img src="images/morty.png" alt="Foto de Perfil" className="rounded-full" />
            </div>
            <div className="pl-16">
              <div className="flex gap-4">
                <div className="font-bold">Morty Gamer</div>
                <div className="text-gray-700">- Data/Mês/Ano, às Hora:Segundo</div>
              </div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla asperiores numquam libero, quia pariatur tenetur odio delectus fuga
                nihil voluptate iure corporis quisquam provident labore ducimus eaque rem optio!
              </div>
              <div className="flex justify-between items-center">
                <div className="pt-2 flex items-center gap-2">
                  <img src="images/comments.png" alt="Icone comentario" className="h-6 w-6" />
                  <div className="text-gray-700">5 comentários</div>
                </div>
                <div className="place-self-end pt-2 flex gap-2">
                  <img src="images/edit.png" alt="Editar Postagem" className="h-7 w-7 items-end" />
                  <img src="images/trash.png" alt="Excluir Postagem" className="h-7 w-7 items-end" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodape */}
      <footer className="mt-auto py-4 bg-green-100 text-center text-sm text-gray-600">
        <p>&copy; 2024 CJR. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por João Frango - Todos os posts são fictícios e criados para fins de demonstração.
        </p>
        <p>
          Entre em contato:{' '}
          <Link href="https://www.cjr.org.br" target="_blank" className="text-blue-500 underline">
            www.cjr.org.br
          </Link>
        </p>
      </footer>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-100 rounded-lg text-gray-600 shadow-lg text-gray-600 p-6 w-[500px] relative">
              <button
                className="absolute top-4 right-4 text-black text-xl font-bold"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <div className="flex flex-col items-center mb-4">
                <div className="relative">
                  <img
                    src="images/morty.png"
                    alt="Foto de Perfil"
                    className="rounded-full h-24 w-24"
                  />
                  <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer">
                    <img src="images/camera-icon.png" alt="Editar Foto" className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600"
                />
                <input
                  type="text"
                  placeholder="Curso"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600"
                />
                <input
                  type="text"
                  placeholder="Departamento"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600"
                />
                <input
                  type="password"
                  placeholder="Senha atual"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600"
                />
                <input
                  type="password"
                  placeholder="Nova senha"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600"
                />
                <input
                  type="password"
                  placeholder="Confirmar nova senha"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600"
                />
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 mt-4"
                >
                  Salvar
                </button>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}
