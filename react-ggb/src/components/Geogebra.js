import React, { useEffect, useRef, useState } from 'react';
import '../style/ggb.css'
function Geogebra({ material_id, progress = 0 }) {

    const [ggbApi, setGgbApi] = useState(null)
    const ggbParams = {
        "appName": "classic",
        "material_id": material_id,
        "width": 720, "height": 550,
        "showToolBar": false,
        "showAlgebraInput": false,
        "showMenuBar": false,
        "appletOnLoad": (api) => {
            setGgbApi(api)
            console.log("GGB loaded!!")
        }
    }


    useEffect(() => {
        var applet = new window.GGBApplet(ggbParams, true);
        applet.inject('ggb-element');
    }, [])

    useEffect(() => {
        if (!ggbApi) return;
        ggbApi.setValue("p", progress)
    }, [progress])



    return (<div>
        <div style={{ display: ggbApi == null ? 'none' : 'block' }} id="ggb-element"></div>
    </div>);
}

export default Geogebra;