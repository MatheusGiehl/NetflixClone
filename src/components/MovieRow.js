import React, { useState } from 'react';
import './MovieRow.css'

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    const handleRigthArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150
        if((window.innerWidth - listW) > x) {
            x= (window.innerWidth - listW) -60
        }
        setScrollX(x)
    }

    return(<div></div>)
}