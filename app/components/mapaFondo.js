'use client';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Carga los estilos base de Leaflet

export default function MapaFondo() {
  useEffect(() => {
    // Inicializa el mapa centrado en coordenadas [Lat, Lon] y nivel de zoom
    const map = L.map('map-bg', {
      zoomControl: false,      // Oculta botones de zoom +/-
      scrollWheelZoom: false,  // Bloquea zoom con la rueda del ratón
      dragging: false          // Bloquea el arrastre para que actúe como un papel tapiz fijo
    }).setView([-39.817, -73.2425], 13);

    // Renderiza los cuadros visuales del mapa mundial
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Destruye el mapa al salir de la página para evitar fugas de memoria
    return () => map.remove();
  }, []);

  return (
    <div 
      id="map-bg" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0 // Lo envía detrás de todas las cosas
      }}
    />
  );
}
