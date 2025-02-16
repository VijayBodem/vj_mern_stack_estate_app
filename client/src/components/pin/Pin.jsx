import React from "react";
import "./pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Pin = ({ item }) => {
  return (
    <Marker position={[item?.latitude, item?.longitude]} icon={customIcon}>
      <Popup>
        <div className="popupContainer">
          <img src={item?.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item?.id}`}>{item?.title}</Link>
            <span>{item?.bedroom} bedroom</span>
            <b>$ {item?.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
