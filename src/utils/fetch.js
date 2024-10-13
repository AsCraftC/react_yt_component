import { ytKey } from "../keys/keys";

/**
 * Función que hace el llamado a la api, intencionadamente no lo hice con axios para forzarme a aprender las bases.
 * @param {string} ids Lista de ids de los videos a obtener separados por comas en un solo string "id1,id2,..."
 * @param {string} part Valor por defecto "snippet", corresponde a los parámetros datos por google https://developers.google.com/youtube/v3/docs/videos/list?hl=es-419&apix_params=%7B%22part%22%3A%5B%22snippet%22%5D%2C%22id%22%3A%5B%22Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI%22%5D%7D#parameters, igual que ids, es un solo string separados por comas "part1,part2,..."
 * @returns Array con los datos de cada video solicitado formato en https://developers.google.com/youtube/v3/docs/videos?hl=es-419#resource-representation.
 */
export async function apiCall(ids, part = "snippet,statistics") {
    let rawData =  await fetch("https://youtube.googleapis.com/youtube/v3/videos?" +
                                "part=" + part +
                                "&id=" + ids +
                                "&key=" + ytKey,
                                {
                                    headers: {
                                        Accept:"application/json",
                                    },
                                    method: "GET",
                                    compressed:true
                                });
    let videoData = await rawData.json()
    return videoData.items;
}