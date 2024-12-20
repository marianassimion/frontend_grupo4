"use client"
import { useState } from "react";
import Header from "../Header/HeaderLogado";
import Modal from "../modals/modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    console.log("Opção selecionada:", option);
    setIsDropdownOpen(false);
  };

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
          <div className="mt-10 flex flex-row items-center mb-2">
            <h1 className="text-2xl font-bold">Todos os professores</h1>
            <div className="ml-auto flex flex-row gap-2">
              <button
                className="bg-indigo-600 text-white p-2 rounded-lg hover:scale-110"
                onClick={handleOpenModal}
              >
                Nova publicação
              </button>
              <button
                className="bg-indigo-600 text-white p-2 rounded-lg hover:scale-110"
                onClick={handleToggleDropdown}
              >
                Ordenar
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                  <ul>
                    <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                    onClick={() => handleOptionClick("Nome")}
                    >
                      Nome
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                      onClick={() => handleOptionClick("Matéria")}
                    >
                      Matéria
                    </li>
                    <li
                      className="px-4 py-2hover:bg-gray-100 cursor-pointer text-gray-700"
                      onClick={() => handleOptionClick("Recentes")}
                    >
                      Recentes
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                      onClick={() => handleOptionClick("Antigas")}
                    >
                      Antigas
                    </li>
                  </ul>
                </div>
              )}
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-green-400 rounded-lg shadow-lg p-6 w-[500px]">
              <h2 className="text-2xl font-bold text-center mb-4">
                Nova Avaliação
              </h2>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Nome do professor"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                />
                <input
                  type="text"
                  placeholder="Disciplina"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                />
                <textarea
                  placeholder="Escreva sua avaliação..."
                  className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg resize-none text-gray-700"
                />
                <div className="flex justify-between items-center mt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Avaliar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}