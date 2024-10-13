import { ytKey } from "../keys/keys";

/**
 * Función que hace el llamado a la api, intencionadamente no lo hice con axios para forzarme a aprender las bases.
 * @param {string} ids Lista de ids de los videos a obtener separados por comas en un solo string `"id1,id2,..."`
 * @param {string} part Valor por defecto "snippet,statistics", corresponde a los `parámetros`* dados por google, es un string separados por comas `"part1,part2,..."`
 * @returns Array con los datos de cada video solicitado con `formato de videos Google`*.
 * @see {@link https://developers.google.com/youtube/v3/docs/videos/list?hl=es-419&apix_params=%7B%22part%22%3A%5B%22snippet%22%5D%2C%22id%22%3A%5B%22Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI%22%5D%7D#parameters `parámetros`}
 * @see {@link https://developers.google.com/youtube/v3/docs/videos?hl=es-419#resource-representation `formato de videos de Google`}
 */
export async function getVideoData(ids, part = "snippet,statistics") {
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
    let videoData = await rawData.json();
    return videoData.items;
}

/**
 * Llamado a la api para obtener la url de la imagen del canal.
 * @param {string} channelID Id del canal dado por el 
 * @returns URL donde se encuentra la imagen del canal en tamaño por defecto
 */
export async function getChannelProfilePicture(channelID) {
    let rawData = await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet&" + 
                                "id=" + channelID +
                                "&fields=items%2Fsnippet%2Fthumbnails&" +
                                "key=" + ytKey,
                                {
                                    headers: {
                                        Accept:"application/json",
                                    },
                                    method: "GET",
                                    compressed:true
                                });
    let channelProfilePicture = await rawData.json();
    return channelProfilePicture.items[0].snippet.thumbnails.default.url;
}