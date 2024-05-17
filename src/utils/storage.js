//Almacenar datos en el storage del navegador

/*FUNCIONES DE CONSULTA Y ALMACENAMIENTO DE USUARIOS PARA FRONT*/

//Recibe el usuario que vamos a pasar desde onLogin
export function setUser(user){
    //Almacenar los datos en el localStorage del usuario
    setItem('user',user)
}

//Función para leer los datos almacenados en el localStorage
export function getUser(){
    getItem('user')
}

/*-----------------------------------------------------------------------------*/

/*FUNCIONES PARA ALMACENAMIENTO DE USUARIOS EN "BACK" */

//Función de almacenamiento de datos
const setItem=(key,value)=>{
    window.localStorage.setItem(key,JSON.stringify(value));
}

//Función para verificar si existe el item a consultar
const getItem=(key)=>{
    /*Validar que exista clave (Lo que sea que nosotros definamos como clave)*/
    if(window.localStorage.getItem(key)){
        return JSON.parse(window.localStorage.getItem(key))
    }else{
        return null;
    }
}