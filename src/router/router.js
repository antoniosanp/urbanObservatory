//router.js

import { store } from "../store/store.js";
import { loginView } from "../views/loginView.js";
import { homeView } from "../views/homeView.js";
import { app } from "../app.js";
import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";
import { cerrarSesion } from "../store/store.js";
import { nuevoProyectoView } from "../views/nuevoProyectoView.js";

export function router(){
    const hash = location.hash;
    document.body.className = "";
  
    app.innerHTML = "";

    if (!store.sesion_iniciada && hash !== "#/login") {location.hash = "#/login"; return}

    switch (hash) {
        case "#/login":
            
            app.appendChild(loginView())
            break;

        case "#/home":
            app.append(navbar(),homeView(),footer())
            
            break;

        case "#/nuevo_proyecto":
            app.append(navbar(),nuevoProyectoView(),footer())
            
            break;
    
        case "#/logout":
            cerrarSesion()
            location.hash = ""

        default:
            location.hash = "#/home"
            break;
    }


}