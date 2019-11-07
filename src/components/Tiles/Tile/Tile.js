import React from 'react'
import './Tile.css'
// import Label from '../../Label/Label'
import PieceImage from '../../PieceImage/PieceImage'

const tile = (props) => {
    //console.log(props.piece)
    const pieceImage = props.piece ? <PieceImage name={props.piece + ".png"} /> : null
    return (
        <div
            className="Tile"
            style={{
                backgroundColor: props.tileColour
            }}>
            {pieceImage}
        </div>
    )
}

export default tile

//<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}