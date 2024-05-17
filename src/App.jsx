import { useEffect, useState } from "react"
import Cabecera from "./header"
import LoginButton from "./LoginButton"
import * as storage from "./utils/storage"
function App() {
  const[user,setUser]=useState(null)
  //Función para almacenar los datos del usuario que se está registrando
  const onLogin=(user)=>{
    //Almacenar en localStorage
    setUser(user)
    storage.setUser(user)
  }
  useEffect(()=>{
    /*Validar que la sesión está iniciada en el storage (Back)*/
    const checksesion=()=>{

    }
  },[])
  
  return (
    <>
      <div className="">
        <header>
          <Cabecera/>
        </header>
        <div>
          {!user&&<LoginButton onLogin={onLogin}/>}
        </div>
      </div>
    </>
  )
}

export default App
