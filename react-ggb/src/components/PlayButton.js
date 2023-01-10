import React, { useState } from 'react';
import '../style/slider.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateButton } from '../features/buttonState';


function PlayButton() {
    const button = useSelector((state) => state.button.value)
    const dispatch = useDispatch();
    const [buttonState, setbuttonState] = useState(0)
    const toggleHandeler = (e) => {
        if (e.target.className == "playButton play visible")
            buttonHandeller("pause");
        else
            buttonHandeller("play");
    }
    const buttonHandeller = (state) => {
        switch (state) {
            case "play": dispatch(updateButton({ play: "visible", pause: "", restart: "" }))
                break;
            case "pause": dispatch(updateButton({ play: "", pause: "visible", restart: "" }))
                break;
            case "restart": dispatch(updateButton({ play: "", pause: "", restart: "visible" }))
                break;
        }
    }
    return (<div className='playButtons'>
        <img className={"playButton pause " + button.pause} onClick={toggleHandeler} src={require('../assets/image/pause.png')} alt="failed to load" />
        <img className={"playButton play " + button.play} onClick={toggleHandeler} src={require('../assets/image/play.png')} alt="failed to load" />
        <img className={"playButton restart " + button.restart} onClick={toggleHandeler} src={require('../assets/image/restart.png')} alt="failed to load" />
    </div>);
}
export default PlayButton;