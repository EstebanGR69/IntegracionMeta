const LoginButton=({ onLogin })=>{
    var facebooklogin=()=>{
        /*Condicional para validar que existe el SDK de facebook*/
        if(!window.FB){
            return
        }else{
            window.FB.getLoginStatus(response=>{
                if(response.status=="connected"){
                    facebookLoginHandler(response)
                }else {
                    console.log("Usuario no autorizado")
                    window.FB.login(facebookLoginHandler,{scope:'public_profile',return_scopes: true,enable_profile_selector:true})
                    // the user is logged in to Facebook, 
                    // but has not authenticated your app
                  }
            })
        }
         
    }
    const facebookLoginHandler=(response)=>{
        console.log(response)
        if(response.status=="connected"){
            window.FB.api('/me?fields=id,name,email,picture',userData=>{
                console.log("Datos perrones ",userData)
                
            //Almacenar la sesión del usuario
            const user={
                ...userData,
                 accesToken:response.authResponse.accesToken
            }
            onLogin(user)//Llamar a la función del componente padre
            })
        }
    }
    return(
        <div>
            <a onClick={facebooklogin}>
                <span>
                    Conectame con facebook
                </span>
            </a>
        </div>
    )
}
export default LoginButton