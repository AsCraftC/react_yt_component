import logo from "../assets/menuIcon.svg";
import verifyIcon from "../assets/verifyIcon.svg";

function msToTime(publicationDate) {
  const date1 = new Date(publicationDate);
  const date2 = new Date(Date.now())
  let ms = date2 - date1;

  let seconds = (ms / 1000).toFixed(0);
  if (seconds < 60) return "hace " + seconds + " Segundo" + (seconds > 1 && "s");

  let minutes = (ms / (1000 * 60)).toFixed(0);
  if (minutes < 60) return "hace " + minutes + " minuto" + (minutes > 1 && "s");

  let hours = (ms / (1000 * 60 * 60)).toFixed(0);
if (hours < 24) return "hace " + hours + " hora" + (hours > 1 && "s");

  let days = (ms / (1000 * 60 * 60 * 24)).toFixed(0);
  if (days < 7) return "hace " + days + " día" + (days > 1 && "s");

  let weeks = (ms / (1000 * 60 * 60 * 24 * 7)).toFixed(0);
  if (weeks < 4) return "hace " + weeks + " semana" + (weeks > 1 && "s");

  let years = (date2.getFullYear() - date1.getFullYear());
  let months = (years * 12) + date2.getMonth() - date1.getMonth();

  if (months < 12) return "hace " + months + " mes" + (months > 1 && "es");
  return "hace " + years + " año" + (years > 1 && "s");
}
function visualizationsFormatted(visualizationValue) {
  let format = Intl.NumberFormat("es-CL", {
    notation: "compact",
    compactDisplay: "short",
  });
  return format.format(visualizationValue);
}

export function YTMiniature({
  iid,
  title,
  channelName,
  channelAt,
  isVerify,
  visualizations,
  publicationDate,
}) {
  return (
    <a href={"https://www.youtube.com/watch?v=" + iid}>
      <article className="miniature">
        <img
          className="miniature__image"
          src={"https://img.youtube.com/vi/" + iid + "/0.jpg"}
          alt="Miniatura del video"
        />
        <section className="videoDescription">
          <picture className="videoDescription__channelLogo">
            <img
              src={"https://unavatar.io/youtube/" + channelAt}
              alt="Imagen del canal"
            />
          </picture>
          <div className="videoDescription__label">
            <h3 className="videoDescription__title"> {title} </h3>
            <div className="videoDescription__channelName">
              <a className="videoDescription__href" href={"https://www.youtube.com/@" + channelAt}>{channelName}</a> 
              {isVerify && <picture className="videoDescription__verify"><img src={verifyIcon} alt="Verificado" /></picture>}
            </div>
            <p className="videoDescription__statistics">
              {visualizationsFormatted(visualizations)}
              <span>
                {msToTime(publicationDate)}
              </span>
            </p>
          </div>
          <button className="videoDescription__optionButton">
            <img src={logo} alt="Menu logo" />
          </button>
        </section>
      </article>
    </a>
  );
}
