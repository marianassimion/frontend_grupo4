'use client'
import { useState, useEffect } from 'react';
import Header from "../Header/HeaderDeslogado";
import Link from 'next/link';
import axios from 'axios';

// Função para buscar os posts
const getPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
};

const PostCard = ({ post }) => (
  <div className="rounded-2xl h-auto bg-primary place-self-center gap-4 p-4 m-2 w-11/12">
    <div className="absolute rounded-full h-12 w-12 border-t">
      <img src="images/morty.png" alt={`Foto de perfil de ${post.author}`} className="rounded-full" />
    </div>
    <div className="pl-16">
      <div className="flex gap-4">
        <div className="font-bold">{post.author}</div>
        <div className="text-gray-700">{post.date}</div>
      </div>
      <div>{post.body}</div>
      <div className="pt-2 flex items-center gap-2">
        <img src="images/comments.png" alt="Ícone de comentários" className="h-6 w-6" />
        <div className="text-gray-700">{post.comments} comentários</div>
      </div>
    </div>
  </div>
);

const AlunoDeslogado = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      const postsWithMetaData = fetchedPosts.map((post) => ({
        ...post,
        author: "Morty Gamer",
        date: "19/12/2024, às 13:59",
        
        comments: 5,
      }));
      setPosts(postsWithMetaData);
    };
    
    fetchPosts();
  }, []);

  return (
    <main>
      <Header />
      <div className="text-black bg-gray-300 grid grid-flow-1">
        {/* Informações do Aluno */}
        <div className="col-span h-32 w-3/5 bg-primary place-self-center relative"></div>
        <div className="col-span h-44 w-3/5 bg-white place-self-center">
          <div className="absolute pl-12 pt-20">
            <div className="font-bold">Morty Gamer</div>
            <div className="flex-row">
              <div className="flex gap-2 items-center">
                <img src="images/build.png" alt="Ícone de curso" className="w-5 h-5" />
                <div>Ciência da Computação</div>
                <div>Dept. Ciência da Computação</div>
              </div>
              <div className="flex gap-2 items-center">
                <img src="images/letter.png" alt="Ícone de e-mail de Morty Gamer" className="w-5 h-5" />
                Morty.gamer.23@cjr.org.br
              </div>
            </div>
          </div>
        </div>
        <div className="absolute rounded-full h-32 w-32 left-1/4 mt-16 border-2">
          <img src="images/morty.png" alt="Foto de perfil de Morty Gamer" className="rounded-full" />
        </div>

        {/* Publicações */}
        <div className="bg-white w-3/5 place-self-center border-t border-black">
          <div className="mt-4 ml-2 mb-4 font-bold">Publicações</div>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))
          ) : (
            <div>Carregando publicações...</div>
          )}
        </div>

        {/* Rodapé */}
        <footer className="mt-auto py-4 bg-green-100 text-center text-sm text-gray-600">
          <p>&copy; 2024 CJR. Todos os direitos reservados.</p>
          <p>Desenvolvido por João Frango - Todos os posts são fictícios e criados para fins de demonstração.</p>
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
};

export default AlunoDeslogado;
