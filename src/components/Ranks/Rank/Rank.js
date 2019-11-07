import React, { Component } from 'react'
import './Rank.css'
import Tile from '../../Tiles/Tile/Tile'

class Rank extends Component {
    calculateBaseTileColour(rank, file) {
        return (rank % 2 === 0) === (file % 2 === 0) ? 'sandybrown' : 'saddlebrown'
    }

    render() {
        const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
        const tiles = files.map((file, index) => {
            const gridRef = file + "" + (this.props.rankId)
            const pieceName = this.props.setup[gridRef];
            const piece = this.props.setup[gridRef] ? {
                name: pieceName,
                permittedMoves: this.props.moveCalculator.calculateFor(pieceName, gridRef)
            } : null;
            return <Tile
                key={index}
                tileColour={this.calculateBaseTileColour(this.props.rankId, index)}
                tileReference={gridRef}
                piece={piece}
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