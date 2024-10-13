import { YTMiniature } from "../components/YTMiniature";
import { apiCall } from "../utils/fetch.js";

import { useEffect, useState } from "react";

export function App() {
  return (
    <div className="app">
      <YTMiniature
        iid="jNQXAC9IVRw"
        title="Me at the zoo"
        channelName="jawed"
        channelAt="jawed"
        isVerify
        visualizations={332216333}
        publicationDate="2005-03-23T00:00:00"
      />
      <YTMiniature
        iid="gBfsaEhI8ow"
        title="Color Your Night -Full-"
        channelName="Persona radio"
        channelAt="Personaradio"
        visualizations={749973}
        publicationDate="2024-01-29T00:00:00"
      />
    </div>
  );
}
