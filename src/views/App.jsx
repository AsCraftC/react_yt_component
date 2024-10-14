import { YTMiniature } from "../components/YTMiniature.jsx";
import { FormIDs } from "../components/FormIDs.jsx"
import { getVideoData } from "../utils/fetch.js";

import { useEffect, useState } from "react";

/*
  TODO: Crear componente que le puedas pasar ids de videos para renderizarlos.
*/

export function App() {
  const [ids , setIds] = useState("jNQXAC9IVRw,gBfsaEhI8ow"); //ID del primer video de YT
  const [videoDataArray , setData] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => { 
      let videoData = await getVideoData(ids);
      setData(videoData);
    }
    fetchVideoData().catch(console.error);
  },[ids])

  return (
    <>
      <FormIDs setter={setIds} />

      <div className="videoList">
        {videoDataArray.map((video) => {
          return (<YTMiniature 
            key={video.id}
            iid={video.id}
            miniatureURL={video.snippet.thumbnails.high.url}
            channelId={video.snippet.channelId}
            title={video.snippet.title}
            channelName={video.snippet.channelTitle}
            visualizations={parseInt(video.statistics.viewCount)}
            publicationDate={video.snippet.publishedAt}
          />);
        })}
      </div> 
    </>
  );
}
