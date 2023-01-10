import logo from './logo.svg';

import Callout from './components/Callout';
import Slider from './components/Slider';
import Geogebra from './components/Geogebra';
import { useState } from 'react';
import './style/ggb.css'

function App() {
  const [click, setClick] = useState(0)
  const _callout = [
    "Use the slider to see the curved surface of the cone",
    "A right circular cone is formed by rotating a right triangle about one of its perpendicular sides.",
  ]
  const [callout, setcallout] = useState(_callout[0])
  const onSlidehandel = (e) => {
    setClick(e.target.value / 100)
    if (e.target.value / 100 < 1)
      setcallout(_callout[0])
    else if (e.target.value / 100 == 1)
      setcallout(_callout[1])
  }
  return (
    <div style={{ maxHeight: 720, maxWidth: 720, margin: 0 }}>
      <Callout callouts={callout} />
      <Geogebra material_id={"jusnnrwa"} progress={click} />
      <input type="range" id="slider" onChange={onSlidehandel} defaultValue={0} ></input>
    </div>
  );
}

export default App;
