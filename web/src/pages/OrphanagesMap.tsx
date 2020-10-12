import React from "react";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import "../styles/pages/orphanages-map.css";

import mapMarkerImg from "../images/map-marker.svg";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>

          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio do Sul</strong>

          <span>Santa Catarina</span>
        </footer>
      </aside>

      <Map
        center={[-27.2092052, -49.6401092]}
        style={{
          width: "100%",
          height: "100%",
        }}
        zoom={15}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link className="create-orphanage" to="/">
        <FiPlus color="#fff" size={32} />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
