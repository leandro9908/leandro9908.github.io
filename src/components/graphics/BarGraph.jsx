import React from 'react';

export default function BarGraph(props) {
  let position = `${props.position.X} ${props.position.Z} ${props.position.Y}`;
  return (
    <React.Fragment>
      {/* Todos los objetos que se muestran deben ser entidades.
      Esta la voy a poner por ahora como un cubo, pero el objetivo es convertirlo en 
      un grafico de barras tridimensional, pero la etiqueta bas es la misma. */}
      <a-entity
        gltf-model="src/assets/models3D/bar_graphic/bar-graphic.gltf"
        position={position}
      ></a-entity>
    </React.Fragment>
  );
}
