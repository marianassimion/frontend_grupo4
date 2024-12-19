import Header from "../Header/HeaderLogado";
import Link from 'next/link';

export default function Profile() {
  return (
    <main>
      <Header/>
      <div className="text-black bg-gray-300 grid grid-flow-1 ">
      <div className="col-span h-32 w-3/5 bg-primary place-self-center position:relative"></div>
      <div className="col-span h-44 w-3/5  bg-white place-self-center">
        <div className="absolute pl-12 pt-20">
            <div className="font-bold">Morty Gamer</div>
            <div className="flex-row">
              <div className="flex gap-2">
                <div>Ciência da Computação</div>
                <div>Dept. Ciência da Computação</div>
              </div>
              <div>
                Morty.gamer.23@cjr.org.br
                </div>
            </div>
        </div>
        <div className="grid place-self-end mr-8 mt-4 rounded-1/4 gap-2">
          <button type="button" className="border-2 bg-green-700 hover:border-green-700 hover:bg-white hover:text-green-700 font-bold rounded-lg px-2 p-1"> Editar Perfil </button>
          <button type="button" className="border-2 bg-red-700 hover:border-red-700 hover:bg-white hover:text-red-700 font-bold rounded-lg px-2 p-1"> Excluir Perfil </button>
        </div>
      </div>  
      
      <div className="absolute rounded-full h-32 w-32 left-1/4 mt-16">
        <img src="images/morty.png" alt="Foto de Perfil" className="rounded-full"/>
      </div>

      <div className="bg-white w-3/5 place-self-center border-t border-black">
          <div className="text-black mt-4 ml-2 mb-4 font-bold">Publicações</div>

          <div className="rounded-2xl h-auto bg-primary place-self-center gap-4 p-4 m-2">
            <div className="absolute rounded-full h-12 w-12 border-t">        
                <img src="images/morty.png" alt="Foto de Perfil" className="rounded-full"/>
            </div>
            <div className="pl-16">
              <div className="flex gap-4">
                <div className="font-bold">Morty Gamer</div>
                <div className="text-gray-700">- Data/Mês/Ano, às Hora:Segundo</div>
              </div>
              <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla asperiores numquam libero, quia pariatur tenetur odio delectus fuga nihil voluptate iure corporis quisquam provident labore ducimus eaque rem optio!</div>
            </div>
          </div>

          <div className="rounded-2xl h-auto bg-primary place-self-center gap-4 p-4 m-2">
            <div className="absolute rounded-full h-12 w-12 border-t">        <img src="images/morty.png" alt="Foto de Perfil" className="rounded-full"/>
            </div>
            <div className="pl-16">
              <div className="flex gap-4">
                <div className="font-bold">Morty Gamer</div>
                <div className="text-gray-700">- Data/Mês/Ano, às Hora:Segundo</div>
              </div>
              <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla asperiores numquam libero, quia pariatur tenetur odio delectus fuga nihil voluptate iure corporis quisquam provident labore ducimus eaque rem optio!</div>
            </div>
          </div>
    </div>
      </div>
          {/* Rodape */}
          <footer className="mt-auto py-4 bg-green-100  text-center text-sm text-gray-600">
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
   </main>
  );
}