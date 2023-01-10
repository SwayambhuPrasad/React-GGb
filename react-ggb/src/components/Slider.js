import React from 'react';
import '../style/slider.css'

import PlayButton from './PlayButton';
import SliderBar from './SliderBar';
function Slider() {
    return (
        <div className='slider'>
            <SliderBar />
            <PlayButton />
        </div>
    );
}

export default Slider;