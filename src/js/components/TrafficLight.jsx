import React, { useState } from 'react';
import '/workspaces/traffic-lights-matheusschramm-miami78/src/styles/TrafficLight.css';

const TrafficLight = () => {
  const [color, setColor] = useState('red');
  
  return (
    <>
      <div class = "traffic-light">
        <div class="traffic-light-stick"></div>
        <div class="traffic-light-face">
          <div
            onClick={() => setColor('red')}
            className={"red light " + (color === 'red' ? "selected" : "")}>
          </div>
          <div
            onClick={() => setColor('yellow')}
            className={"yellow light " + (color === 'yellow' ? "selected" : "")}>
          </div>
          <div
            onClick={() => setColor('green')}
            className={"green light " + (color === 'green' ? "selected" : "")}>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrafficLight;