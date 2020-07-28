import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

function Map() {
  return (
    <div className="map">
      <LeafletMap>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap'
        />
      </LeafletMap>
    </div>
  );
}

export default Map;
