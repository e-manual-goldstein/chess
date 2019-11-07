import React, { Component } from 'react'
import './Rank.css'
import Tile from '../../Tiles/Tile/Tile'

class Rank extends Component {
    calculateTileColour(rank, file) {
        return (rank % 2 === 0) === (file % 2 === 0) ? 'sandybrown' : 'saddlebrown'
    }

    render() {
        const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
        const tiles = files.map((file, index) => {
            const gridRef = file + "" + (this.props.rankId)
            console.log(this.props.setup)
            return <Tile
                key={index}
                tileColour={this.calculateTileColour(this.props.rankId, index)}
                tileReference={gridRef}
                piece={this.props.setup[gridRef]}
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