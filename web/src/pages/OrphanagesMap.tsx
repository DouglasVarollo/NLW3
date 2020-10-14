import React, { useEffect, useState } from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";

import api from "../services/api";
import mapIcon from "../utils/mapIcon";

import "../styles/pages/orphanages-map.css";
import mapMarkerImg from "../images/map-marker.svg";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(function () {
    api.get("/orphanages").then(function (response) {
      setOrphanages(response.data);
    });
  }, []);

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

        {orphanages.map(function (orphanage) {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                className="map-popup"
                closeButton={false}
                minWidth={240}
                maxHeight={240}
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight color="#fff" size={20} />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link className="create-orphanage" to="/orphanages/create">
        <FiPlus color="#fff" size={32} />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
