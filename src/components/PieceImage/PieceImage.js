import React from 'react'

import './PieceImage.css'


const pieceImage = (props) => {
    const imageFile = require('../../assets/images/' + props.name)

    return (
        <div className="PieceImage" style={{ border: props.selected ? '1px solid blue' : null }}>
            <img src={imageFile} alt={props.name} />
        </div>
    )
}

export default pieceImage



/*
const logo = (props) => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);
 */