'use client';

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import icon2x from 'leaflet/dist/images/marker-icon-2x.png'
import icon from 'leaflet/dist/images/marker-icon.png'
import shadow from 'leaflet/dist/images/marker-shadow.png'

type MapProps = {
  position: [number, number];
  zoom?: number;
  className?: string;
};

export default function Map({ position, zoom = 13 }: MapProps) {
  useEffect(() => {
    L.Marker.prototype.options.icon = L.icon({
      iconUrl: icon.src,
      iconRetinaUrl: icon2x.src,
      shadowUrl: shadow.src,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
  }, []);

  return (
    <MapContainer
      className="contacts__map"
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Мы здесь!</Popup>
      </Marker>
    </MapContainer>
  );
}
