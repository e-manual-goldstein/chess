import React, { Component } from 'react'
import Ranks from '../../components/Ranks/Ranks'
import './Board.css'

class Board extends Component {
    state = {
        pieces: []
    }

    // componentDidMount() {
    //     const pieceConfig = this.props.setup.map((piece) => {
    //         console.log(piece)
    //         return piece
    //     })

    //     this.setState({ pieces: pieceConfig })
    // }
    render() {
        return (
            <div className="Board">
                <Ranks setup={this.props.setup} />
            </div>
        )
    }
}

export default Board