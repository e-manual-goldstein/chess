import React, { Component } from 'react'
import Ranks from '../../components/Ranks/Ranks'
import './Board.css'

class Board extends Component {

    render() {
        return (
            <div className="Board">
                <Ranks />
            </div>
        )
    }
}

export default Board