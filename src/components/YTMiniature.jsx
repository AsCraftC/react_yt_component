import logo from "../assets/menuIcon.svg";
import verifyIcon from "../assets/verifyIcon.svg";
import { msToTime, visualizationsFormatted } from "../utils/utils.js"

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
