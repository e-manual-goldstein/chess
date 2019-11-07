import React, { Component } from 'react'
import Ranks from '../../components/Ranks/Ranks'
import './Board.css'

class Board extends Component {
    state = {
        pieces: []
    }

    componentDidMount() {
        const pieceConfig = this.props.setup.map((piece) => {
            console.log(piece)
            return piece
        })

        // for (let piece in this.props.setup.pieceConfig) {
        //     pieceConfig[piece.ref] = piece.name
        // }
        this.setState({ pieces: pieceConfig })
    }
    render() {
        return (
            <div className="Board">
                <Ranks setup={this.state.pieces} />
            </div>
        )
    }
}

export default Board