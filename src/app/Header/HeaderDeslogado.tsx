"use client"
import React from "react";
import { useRouter } from "next/navigation";

const HeaderDeslogado = () => {
    const router = useRouter();  
  
    const feedLogado =  () => {
      router.push('/Feed')
    };
    const Home = () => {
        router.push('/FeedDeslogado')
    };
    return (
        <header className='bg-green-100 flex flex-row'>
            <button onClick={Home}><img src="images/Unb.png" alt="Logo da Unb" className="h-10 w-16 m-2"  />
            </button>
            <div className="ml-auto">
                <button onClick={feedLogado} className="bg-indigo-600 text-white p-3 rounded-lg hover:scale-110 m-2">Login</button>
            </div>
          </header>

    )
}

export default HeaderDeslogado