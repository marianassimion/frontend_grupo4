/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "../modals/modal";
import Image from "next/image";


const Header = () => {
    const router = useRouter();  
    const [modal,setmodal] = useState (false)
    const Sair =  () => {
      router.push('/FeedDeslogado')
    };
    
    return (
        <header className='bg-secondary flex flex-row'>
            <button onClick={() => setmodal(!modal)}><Image src="images/Unb.png" alt="Logo da Unb" className="h-10 w-16 m-2"  />
            </button>
            <div className="ml-auto">
            <button><Image src="images/notification.png" alt="Notificação" className="h-8 w-8 m-2 mr-10"/></button>
            <button><Image src="images/morty.png" alt="Perfil" className="h-8 w-8 m-2 rounded-full"/></button>
            <button onClick={Sair}><Image src="images/exit.png" alt="Sair" className="h-8 w-8 m-2"/></button>
            </div>
            <Modal onClose={() => setmodal(!modal)}  isOpen={modal} > 
              <div className="w-10 h-10 bg-red-600"></div>
            </Modal>
          </header>

    )
}

export default Header