"use client";
import { useRouter } from "next/navigation";
import Header from "../Header/HeaderLogado"

export default function AvaliacaoComentario() {
  const router = useRouter();

  return (
    <main className="bg-gray-200 h-screen flex flex-col items-center">
        <Header />
        <div className="bg-green-200 h-16 w-full flex items-center justify-between px-4"><img src="/images/logo.png" alt="Logo" className="h-10" />
            <div className="flex items-center gap-4">
                <img
                    src="/images/bell.png"
                    alt="Notificações"
                    className="h-6 w-6 cursor-pointer"
                />
                <img
                    src="/images/profile.png"
                    alt="Perfil"
                    className="h-8 w-8 rounded-full cursor-pointer"
                />
            </div>
        </div>
      {/* Corpo Principal */}
      <div className="flex flex-1 items-center justify-center w-full">
        {/* Avaliação com Comentários */}
        <section className="w-3/5 h-[80%] bg-white rounded-lg shadow-md p-6 flex flex-col justify-start">
          {/* Botão de Voltar */}
          <button
            onClick={() => router.back()}
            className="bg-transparent text-black text-4xl font-bold hover:scale-105 mb-4 self-start"
          >
            &#8592;
          </button>

          {/* Avaliação Principal */}
          <div className="bg-green-300 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-4">
              <img
                src="/images/morty.png"
                alt="Avatar"
                className="h-10 w-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-900">Morty Gamer</h3>
                  <div className="flex gap-2">
                    <img
                      src="/images/edit.png"
                      alt="Editar"
                      className="h-5 w-5 cursor-pointer"
                    />
                    <img
                      src="/images/trash.png"
                      alt="Excluir"
                      className="h-5 w-5 cursor-pointer"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-800">
                  09/04/2024, às 21:42 - Toriel • Culinária
                </p>
                <p className="mt-2 text-gray-900">
                  Professora bacana. Adoro quando falta!
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-800 mt-4">2 comentários</div>
          </div>

          {/* Comentários */}
          <div className="flex-1 overflow-auto space-y-4">
            <div className="flex items-start gap-4">
              <img
                src="/images/sans.png"
                alt="Avatar"
                className="h-8 w-8 rounded-full"
              />
              <div className="flex-1">
                <p className="font-bold text-gray-900">Sans</p>
                <p className="text-sm text-gray-800">
                  09/04/2024, às 21:43
                </p>
                <p className="mt-1 text-gray-900">heh heh heh...</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src="/images/sans.png"
                alt="Avatar"
                className="h-8 w-8 rounded-full"
              />
              <div className="flex-1">
                <p className="font-bold text-gray-900">Sans</p>
                <p className="text-sm text-gray-800">
                  09/04/2024, às 21:43
                </p>
                <p className="mt-1 text-gray-900">You&apos;re gonna have a bad time.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
