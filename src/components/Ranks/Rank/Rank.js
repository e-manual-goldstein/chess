import React, { Component } from 'react'
import './Rank.css'
import Tile from '../../Tiles/Tile/Tile'

class Rank extends Component {
    calculateTileColour(rank, file) {
        return (rank % 2 === 0) === (file % 2 === 0) ? 'white' : 'black'
    }

    render() {
        const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
        const tiles = files.map((file, index) => {
            return <Tile
                key={index}
                tileColour={this.calculateTileColour(this.props.rankId, index)}
                tileReference={file + "" + (this.props.rankId)}
                piece={true}
            />
        })
        return (
            <div className="Rank">
                {tiles}
            </div>
        )
    }
}

export default Rank