import ReactMapGL from "react-map-gl";

import { useState } from "react";

export default function Map() {
  const [viewport, setViewport] = useState({
    // The latitude and longitude of the center of London
    latitude: 41.5427898896716,
    longitude: 2.4364436698868195,
    zoom: 13,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="pk.eyJ1IjoiZXJpa3ByOTQiLCJhIjoiY2tubG9sYzJhMDh6bTJ2a3g3cGQ1cTluNSJ9.NHE4g1GkYks89FKSAWYBfg"
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
}
