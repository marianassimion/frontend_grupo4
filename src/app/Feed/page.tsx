"use client"
import { useState } from "react";
import Header from "../Header/HeaderLogado";
import Modal from "../modals/modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main>
      <Header />
      <div className="max-w-ml flex flex-col items-center">
        <div className="flex flex-col">
          <div className="mt-10 flex flex-row gap-2 mb-2">
            <h1 className="text-2xl font-bold">Novos Professores</h1>
            <input
              type="text"
              placeholder="Buscar Professor(a)"
              className="w-1/2 px-4 py-3 border border-gray-300 rounded-md text-gray-700 ml-auto ml-80"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row gap-10">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="gap-1 h-[250px] w-40 rounded-lg border border-black bg-white flex flex-col items-center"
                >
                  <img src="images/undefined.png" alt="perfil" />
                  <h2 className="text-2xl font-bold">Nome</h2>
                  <h3>Disciplina</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10 flex flex-row items-center mb-2">
            <h1 className="text-2xl font-bold">Todos os professores</h1>
            <div className="ml-auto flex flex-row gap-2">
              <button
                className="bg-indigo-600 text-white p-2 rounded-lg hover:scale-110"
                onClick={handleOpenModal}
              >
                Nova publicação
              </button>
              <button className="bg-indigo-600 text-white p-2 rounded-lg hover:scale-110">
                Ordenar
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row gap-10 items-center">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="gap-1 h-[250px] w-40 rounded-lg border border-black flex flex-col bg-white items-center"
                >
                  <img src="images/undefined.png" alt="perfil" />
                  <h2 className="text-2xl font-bold">Nome</h2>
                  <h3>Disciplina</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div>
            <h2 className="text-xl font-bold">Título do Modal</h2>
            <p>Este é o conteúdo do modal.</p>
            <button
              className="mt-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              onClick={handleCloseModal}
            >
              Fechar
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
}