import Header from "../Header/HeaderLogado";
import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  return (
    <main>
    <Header/>

    <div className="flex flex-col min-h-screen">
      {/* Voltar Button */}
      <div className="p-4">
        <button className="flex items-center text-blue-500">
          <Image
            src="/images/arrow_back_24dp_00ABED_FILL0_wght400_GRAD0_opsz24.png"
            alt="voltar"
            width={24}
            height={24}
          />
          <span className="ml-2">Voltar</span>
        </button>
      </div>

      {/* Cabecalho */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
        <Image src="/images/logo_unb.svg" alt="Logo UnB" width={150} height={50} />
        <div className="flex items-center gap-4">
          <Image
            src="/images/notifications.png"
            alt="Notificacao"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/images/foto_perfil.jpeg"
            alt="Foto Perfil Cabecalho"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
          <Image
            src="/images/logout.png"
            alt="Sair"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Container */}
      <div className="flex flex-col items-center py-6">
        {/* Perfil */}
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
          <div className="relative">
            <div className="h-40 bg-blue-500"></div>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <Image
                src="/images/foto_perfil.jpeg"
                alt="Foto de perfil"
                width={120}
                height={120}
                className="rounded-full border-4 border-white"
              />
            </div>
          </div>
          <div className="pt-16 pb-6 text-center">
            <h2 className="text-2xl font-semibold">Morty Gamer</h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Image
                src="/images/apartment_24dp_11111_FILL0_wght400_GRAD0_opsz24.png"
                alt="Instituicao"
                width={20}
                height={20}
              />
              <p className="text-gray-600">Ciência da Computação / Dept. Ciência da Computação</p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Image
                src="/images/mail_24dp_11111_FILL0_wght400_GRAD0_opsz24.png"
                alt="Contato"
                width={20}
                height={20}
              />
              <p className="text-gray-600">Morty.gamer.23@cjr.org.br</p>
            </div>
            <div className="mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600">Editar Perfil</button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Excluir Perfil</button>
            </div>
          </div>
        </div>

        {/* Publicações */}
        <div className="w-full max-w-4xl mt-6">
          <h3 className="text-lg font-bold mb-4">Publicações</h3>
          {[1, 2, 3].map((post, index) => (
            <div
              key={index}
              className="flex p-4 mb-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src="/images/foto_perfil.jpeg"
                alt="Foto de perfil menor"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4 flex-1">
                <div className="flex items-center text-sm text-gray-600">
                  <h4 className="font-semibold text-gray-800 mr-2">Morty Gamer</h4>
                  <span>- 20/05/2024, às 14:30 - Tecnologia</span>
                </div>
                <p className="mt-2 text-gray-700">
                  A inteligência artificial está revolucionando a maneira como interagimos com a tecnologia...
                </p>
                <div className="flex items-center mt-4 text-gray-500">
                  <Image
                    src="/images/chat_bubble_24dp_11111_FILL0_wght400_GRAD0_opsz24.png"
                    alt="Comentarios"
                    width={20}
                    height={20}
                  />
                  <span className="ml-1">5 comentários</span>
                  <div className="flex ml-auto gap-4">
                    <Image
                      src="/images/edit.png"
                      alt="Editar"
                      width={20}
                      height={20}
                      className="cursor-pointer"
                    />
                    <Image
                      src="/images/delete.png"
                      alt="Excluir"
                      width={20}
                      height={20}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rodape */}
      <footer className="mt-auto py-4 bg-gray-200 text-center text-sm text-gray-600">
        <p>&copy; 2024 CJR. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por João Frango - Todos os posts são fictícios e criados para fins de
          demonstração.
        </p>
        <p>
          Entre em contato:{' '}
          <Link href="https://www.cjr.org.br" target="_blank" className="text-blue-500 underline">
            www.cjr.org.br
          </Link>
        </p>
      </footer>
    </div>
  </main>
  );
}