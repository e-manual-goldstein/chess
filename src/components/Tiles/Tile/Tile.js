import React from 'react'
import './Tile.css'

const tile = (props) => {
    return (
        <div
            className="Tile"
            style={{ backgroundColor: props.tileColour }}>{props.tileReference}
        </div>
    )
}

export default tile

//<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}