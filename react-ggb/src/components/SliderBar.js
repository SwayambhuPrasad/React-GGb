import React, { useEffect } from 'react';
function SliderBar() {

    let moveX;
    let bar;
    const onClickHandeler = (e) => {
        console.log(e.target.x, bar)

        // if (e.target.x > bar.left && e.target.x < bar.right)
        //     e.target.x = moveX;
    }
    const inputHandeler = (e) => {
        console.log(e.target.value)
    }
    useEffect(() => {
        window.addEventListener('mousemove', (event) => { moveX = event.screenX })
    })
    return (
        <div className='sliderBar'>
            {/* <div className='bar' ref={el => { if (!el) return; bar = el.getBoundingClientRect(); console.log(bar) }}>
            </div>
            <img className='sliderDrag' onClick={onClickHandeler} src={require('../assets/image/sliderDrag.png')} /> */}
            <input type="range" onChange={inputHandeler} ></input>
        </div>
    );

}

export default SliderBar;

