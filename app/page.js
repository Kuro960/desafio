"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import dynamic from 'next/dynamic';

const MapaFondo = dynamic(() => import('./components/mapaFondo'), { ssr: false });

export default function Home() {
  // Estados para controlar las pantallas
  // comenzar: 0 = Inicio, 1 = Preguntas
  const [comenzar, setComenzar] = useState(0);
  // respuesta: 0 = Sin responder, 1 = Correcta, 2 = Incorrecta
  const [respuesta, setRespuesta] = useState(0);

  const [info,setInfo]=useState(0);
  // Función para reiniciar el juego y volver al inicio de forma limpia
  const volverAlInicio = () => {
    setComenzar(0);
    setRespuesta(0);
    setInfo(0);
  };

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <MapaFondo />
      <div style={{ position: 'relative', zIndex: 10, padding: '20px', fontFamily: 'sans-serif' }}>

        {/* PANTALLA 1: Inicio (Solo se muestra si comenzar es 0) */}
        {comenzar === 0 && (
          <div>
            <h1>Viaje por Valdivia</h1>
            <p>Juego interactivo</p>
            <button onClick={() => setComenzar(1)}>comenzar</button>
          </div>
        )}

        {/* PANTALLA 2: Pregunta (Solo si comenzó y aún no responde) */}
        {comenzar === 1 && respuesta === 0 && (
          <div>
            <h1>Pregunta 1: </h1>
            <p>pregunta random del glosario</p>
            <button onClick={() => setRespuesta(1)}>opcion 1 (Correcta)</button>
            <button onClick={() => setRespuesta(2)}>opcion 2</button>
            <button onClick={() => setRespuesta(2)}>opcion 3</button>
            <br /><br />
            <button onClick={volverAlInicio}>volver</button>
          </div>
        )}

        {/* PANTALLA 3: Respuesta Correcta */}
        {comenzar === 1 && respuesta === 1 && (
          <div>
            <h1> Respuesta correcta 🎉</h1>
            <p>Excelente viaje por Valdivia.</p>
            <button onClick={() => setInfo(1)}>ver más información</button>
          </div>
        )}

        {/* PANTALLA 4: Respuesta Incorrecta */}
        {comenzar === 1 && respuesta === 2 && (
          <div>
            <h1>¡Respuesta incorrecta! ❌</h1>
            <p>Inténtalo de nuevo en tu próximo viaje.</p>
            <button onClick={() => setInfo(1)}>ver más información</button>
          </div>
        )}

        {/*Pantalla 2.5 Independiente del resultado enviara a esta pantalla para mostrar informacion detallada de la pregunta*/}
        {info == 1 && (
          <div>
            <h1>Información detallada</h1>
            <p>Informacion detallada del lugar relacionada a la pregunta o a Valdivia en general</p>
            <button onClick={volverAlInicio}>volver al inicio</button>
          </div>
        )}
      </div>
    </main>
  );
}
