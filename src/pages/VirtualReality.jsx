import React from 'react';

import './styles/VirtualReality.css';

export default function VirtualReality() {
  return (
    <a-scene vr-mode-ui="enabled: true; cardboardModeEnabled: true;">
      <a-sky
        gltf-model="src/assets/scenes/VIGTEC_VR/scenario.gltf"
        color="#ECECEC"
      ></a-sky>
      <a-entity
        babia-pie='legend: true; palette: blues; key:model; size: sales;
    data:[{"model": "leon", "motor": "electric", "color": "red",
        "doors": 5, "sales": 10},
        {"model": "ibiza", "motor": "electric", "color": "white", 
        "doors": 3, "sales": 15},
        {"model": "cordoba", "motor": "diesel", "color": "black", 
        "doors": 5, "sales": 3},
        {"model": "toledo", "motor": "diesel", "color": "white", 
        "doors": 5, "sales": 18},
        {"model": "altea", "motor": "diesel", "color": "red", 
        "doors": 5, "sales": 4},
        {"model": "arosa", "motor": "electric", "color": "red", 
        "doors": 3, "sales": 12},
        {"model": "alhambra", "motor": "diesel", "color": "white", 
        "doors": 5, "sales": 5},
        {"model": "600", "motor": "gasoline", "color": "yellow", 
        "doors": 3, "sales": 20},
        {"model": "127", "motor": "gasoline", "color": "white", 
        "doors": 5, "sales": 2},
        {"model": "panda", "motor": "gasoline", "color": "black", 
        "doors": 3, "sales": 13}]'
        position="0 2 0"
        rotation="90 0 0"
        scale="2 2 2"
      ></a-entity>
    </a-scene>
  );
}
