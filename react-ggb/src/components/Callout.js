import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateText } from '../features/calloutText';

import '../style/callout.css'
import 'animate.css';

function Callout({ callouts }) {
    const text = useSelector((state) => state.text.value)
    const dispatch = useDispatch();

    useEffect(() => {
        onTextChange(callouts)
    }, [callouts])

    const onTextChange = async (text) => {
        await animateCSS('.calloutbg', 'fadeOutUp');
        dispatch(updateText(text))
        animateCSS('.calloutbg', 'fadeInUp');
    }
    const animateCSS = (element, animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);
            node.classList.add(`${prefix}animated`, animationName);
            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
            }
            node.addEventListener('animationend', handleAnimationEnd, { once: true });
        });

    return (
        <>
            <div className='container '>
                <div className='calloutbg' id='calloutbg'>
                    {text.text}
                </div>
                <div className='logo'>
                    <img src={require('../assets/image/logo.png')} alt="failed to load" />
                </div>
            </div>
        </>
    );
}

export default Callout;