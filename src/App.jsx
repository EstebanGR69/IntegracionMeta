import { useEffect, useState } from "react"
import Cabecera from "./header"
import LoginButton from "./LoginButton"
import * as storage from "./utils/storage"
import UserLoged from "./UserLoged"

function App() {
  const[user,setUser]=useState(null)
  //Función para almacenar los datos del usuario que se está registrando
  const onLogin=(user)=>{
    //Almacenar en localStorage
    storage.setUser(user)
    setUser(user)
  }

  //Función para borar datos de usuario
  const onLogout=()=>{
    storage.clear()
    setUser(null)
  }
  useEffect(()=>{
    /*Validar que la sesión está iniciada en el storage (Back)*/
    const checksesion=()=>{
      const user= storage.getUser() //Leer usuario
      if(user){
        setUser(user)
      }
    }
    checksesion()
    
  },[])
  
  return (
    <>
      <div className="">
        <header>
            {user && <UserLoged user={user} onLogout={onLogout}  />}
        </header>
        <div>
          
          {!user&&<LoginButton onLogin={onLogin}/>}
        </div>
      </div>
    </>
  )
}

export default App
