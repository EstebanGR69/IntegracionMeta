//Este componente solo se mostrará si el usuario está logeado

const UserLoged=({user,onLogout})=>{
    console.log("datos de usuario ",user)
    //Función para cerrar sesión en SDK y en localStorage
    const logout=()=>{
        onLogout()
        /*Ejecutar logout en el SDK de facebook*/
        window.FB.logout()
    }
    
    return(
        <>
            <div>
                {/**/}
                {user.picture && <img src={user.picture.data.url}></img>}
                <span>{user.name}</span>
                <a href="#" onClick={logout}>
                    Salir
                </a>
            </div>
        </>
    )
}
export default UserLoged