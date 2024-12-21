"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "../modals/modal";

const Header = () => {
    const router = useRouter();  
    const [modal,setmodal] = useState (false)
    const Sair =  () => {
      router.push('/')
    };
    const Home = () => {
         router.push('/Feed')
    };
    const Perfil = () => {
      router.push('/AlunoLogado')
 };
    return (
        <header className='bg-green-100 flex flex-row'>
            <button onClick={Home}><img src="images/Unb.png" alt="Logo da Unb" className="h-10 w-16 m-2"  />
            </button>
            <div className="ml-auto">
            <button><img src="images/notification.png" alt="Notificação" className="h-8 w-8 m-2 mr-10"/></button>
            <button onClick={Perfil}><img src="images/morty.png" alt="Perfil" className="h-8 w-8 m-2 rounded-full"/></button>
            <button onClick={Sair}><img src="images/exit.png" alt="Sair" className="h-8 w-8 m-2"/></button>
            </div>
          </header>

    )
}

export default Header