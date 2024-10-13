import menuIcon from "../assets/menuIcon.svg";
// import verifyIcon from "../assets/verifyIcon.svg";
import { msToTime, visualizationsFormatted } from "../utils/utils.js"
import { getChannelProfilePicture } from "../utils/fetch.js"

import { useEffect, useState } from "react";

export function YTMiniature({
  iid,
  miniatureURL,
  channelId,
  title,
  channelName,
  visualizations,
  publicationDate,
}) {

  const [channelPictureURL, setURL] = useState("");

  useEffect(() => {
    const getChannelPicture = async () => { 
      let PictureURL = await getChannelProfilePicture(channelId);
      setURL(PictureURL);
    }
    getChannelPicture().catch(console.error);

    
  },[])

  return (
    <article className="miniature">
      <a href={"https://www.youtube.com/watch?v=" + iid}>
        <img
          className="miniature__image"
          src={miniatureURL}
          alt="Miniatura del video"
        />
      </a>
      <section className="videoDescription">
        <a href={"youtube.com/channel/" + channelId}>
          <picture className="videoDescription__channelLogo">
            <img
              src={channelPictureURL}
              alt="Imagen del canal"
            />
          </picture>
        </a>
        <div className="videoDescription__label">
          <h3 className="videoDescription__title"> <a href={"https://www.youtube.com/watch?v=" + iid}>{title}</a> </h3>
          <div className="videoDescription__channelName">
            <a className="videoDescription__href" href={"youtube.com/channel/" + channelId}>{channelName}</a> 
            {/* {isVerify && <picture className="videoDescription__verify"><img src={verifyIcon} alt="Verificado" /></picture>} */}
          </div>
          <p className="videoDescription__statistics">
            {visualizationsFormatted(visualizations)}
            <span>
              {msToTime(publicationDate)}
            </span>
          </p>
        </div>
        <button className="videoDescription__optionButton">
          <img src={menuIcon} alt="Menu logo" />
        </button>
      </section>
    </article>
  );
}
