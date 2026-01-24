import { store } from "../store/store.js";

export function router(){

    const hash = location.hash;

    if (!store.sesion_iniciada && hash != "#/login") {location.hash = "#/login"; return}

    switch (hash) {
        case "#/login":
            
            break;

        case "#/home":
            
            break;

        case "#/nuevo_proyecto":
            
            break;
    
        default:
            break;
    }


}