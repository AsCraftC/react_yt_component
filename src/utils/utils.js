/**
 * Función que saca la diferencia en tiempo entre una fecha dada y el momento actual.
 * @param {string} targetDate datetime con formato string (YYYY-MM-DDTHH:mm:ssZ) para la creación de un objeto Date
 * @returns string con diferencia en segundo, minutos, horas, días, semanas, meses o años dependiendo de la medida mas pequeña utilizable.
 */
export function msToTime(targetDate) {
    const date1 = new Date(targetDate);
    const date2 = new Date(Date.now())

    let ms = date2 - date1;

    let seconds = parseInt((ms / 1000).toFixed(0));
    if (seconds < 60) return "hace " + seconds + " Segundo" + (seconds > 1 ? "s" : "");

    let minutes = parseInt((ms / (1000 * 60)).toFixed(0));
    if (minutes < 60) return "hace " + minutes + " minuto" + (minutes > 1 ? "s" : "");

    let hours = parseInt((ms / (1000 * 60 * 60)).toFixed(0));
    if (hours < 24) return "hace " + hours + " hora" + (hours > 1 ? "s" : "");

    let days = parseInt((ms / (1000 * 60 * 60 * 24)).toFixed(0));
    if (days < 7) return "hace " + days + " día" + (days > 1 ? "s" : "");

    let weeks = parseInt((ms / (1000 * 60 * 60 * 24 * 7)).toFixed(0));
    if (weeks < 4) return "hace " + weeks + " semana" + (weeks > 1 ? "s" : "");

    let years = (date2.getFullYear() - date1.getFullYear());
    let months = (years * 12) + date2.getMonth() - date1.getMonth();

    if (months < 12) return "hace " + months + " mes" + (months > 1 ? "es" : "");
    return "hace " + years + " año" + (years > 1 ? "s" : "");
}

/**
 * Uso de NumberFormat para implementar valores numericos simplificados.
 * @param {int} visualizationValue Valor de cantidad de visualizaciones de un video
 * @returns Formato de numero simplificado con letra multiplicadora.
 */
export function visualizationsFormatted(visualizationValue) {
    let format = Intl.NumberFormat("es-CL", {
        notation: "compact",
        compactDisplay: "short",
    });
    return format.format(visualizationValue);
}
