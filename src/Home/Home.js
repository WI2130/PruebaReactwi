import './Home.css'

import {SubMenu} from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js'

//Componente Es Una Funcion Y Se Pueden Programar


export function Home() {

    let descripcionBanda="Con casi 50 años de trayectoria, más de 200 millones de copias de sus álbumes vendidas en todo el mundo y seguidores que les veneran desde todos los rincones, no es ningún atrevimiento afirmar que AC/DC es una de las bandas más importantes de la historia del rock. ©copyright los40.com"

    return(

        <>
        
            <div className="banner" >
            
            </div>

            <div className="container mt-5" >
                <div className="row">
                    <div className="col-12" >

                        <h1 className="text-center" > ACDC </h1> 
                        <p className="text-center" >
                        {descripcionBanda}    
                        </p>                      
                        
                    </div>
                
                </div>
            </div>

            <div>
                <SubMenu></SubMenu>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </>

    )

    
}