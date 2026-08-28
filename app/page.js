"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {useState} from "react";

export default function Home() {
  //boton de comenzar
  const [comenzar,setComenzar] = useState(0);
  if (comenzar==1){
    return(paginaDeEstrellas());
  }
  function paginaDeEstrellas(){
  return(
    //cambia el contenido de la pagina
    <div className={styles.page}>
      <h1>Estrella</h1>
      <p>Has encontrado una estrella</p>
      <button onClick= {()=>setComenzar(0)}>volver</button>
    </div>
  )
}




  return (
    <div className={styles.page}>
      {/* Pagina de inicio */}

      <h1>Viaje por Valdivia</h1>
      <p>Juego interactivo</p>
      <button onClick= {()=>setComenzar(1)}>comenzar</button>
    </div>
  );
}
