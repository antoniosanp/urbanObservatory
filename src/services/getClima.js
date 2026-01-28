import { store } from "../store/store.js";

export async function getClima(lon, lat){
    const cacheKey = `${lon},${lat}`;
    if (store.climaCache.has(cacheKey)) {
        return store.climaCache.get(cacheKey);
    }

    const response = await fetch(`
        https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,wind_speed_10m
        `)
    const responseJSON = await response.json();
    const datos =  responseJSON.current;
    store.climaCache.set(cacheKey, {
        temp : datos.temperature_2m,
        precipitation:  datos.precipitation,
        wind:  datos.wind_speed_10m
    });
    return {
        temp : datos.temperature_2m,
        precipitation:  datos.precipitation,
        wind:  datos.wind_speed_10m}
}

