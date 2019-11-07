import React, { Component } from 'react'
import './Tile.css'
// import Label from '../../Label/Label'
import PieceImage from '../../PieceImage/PieceImage'

class Tile extends Component {
    state = {
        piece: null,
        baseTileColour: null,
        selected: false
    }

    static getDerivedStateFromProps(newProps, state) {
        if (state.piece !== newProps.piece || state.baseTileColour !== newProps.tileColour) {
            return state;
        }
        return null
    }

    componentDidMount() {
        this.setState({ piece: this.props.piece, baseTileColour: this.props.tileColour })
    }


    tileClickedHandler = () => {
        if (!this.state.piece) {
            return
        }
        if (this.state.selected) {
            this.setState({ selected: false })
        }
        else (
            this.setState({ selected: true })
        )
        //this.setState({ piece: null })
    }

    render() {
        //console.log(props.piece)
        const pieceImage = this.state.piece ? <PieceImage name={this.state.piece + ".png"} selected={this.state.selected} /> : null
        return (
            <div
                className="Tile"
                style={{
                    backgroundColor: this.state.baseTileColour,
                }}
                onClick={this.tileClickedHandler}>
                {pieceImage}
            </div>
        )
    }
}

export default Tile

//<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}