export async function servicioTOKEN(){

    //URI
    const URI="https://accounts.spotify.com/api/token"

    //datos
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=6a030b32c34a4383985e888075dbb10a"
    const DATO3="client_id=efaa52443306432bbeae2d704c696805"

    //peticion
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3
    }


    //fetch
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    console.log(datos)
    datos=datos.token_type+' '+datos.access_token;
    return datos
}