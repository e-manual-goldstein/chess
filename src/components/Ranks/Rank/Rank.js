import React, { Component } from 'react'
import './Rank.css'
import Tile from '../../Tiles/Tile/Tile'

class Rank extends Component {
    calculateTileColour(rank, file) {
        console.log(rank + ", " + file)
        return (rank % 2 === 0) === (file % 2 !== 0) ? 'white' : 'black'
    }

    render() {
        const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
        const tiles = files.map((file, index) => {
            //console.log(index)
            return <Tile
                key={index}
                tileColour={this.calculateTileColour(this.props.rankId, index)}
                tileReference={file + "" + (this.props.rankId)}
            />
        })
        // for (var fileId = 0; fileId < 8; fileId++) {
        //     tiles[fileId] = <Tile key={fileId} tileColour={this.calculateTileColour(this.props.rankId, fileId) ? 'black' : 'white'} />
        // }
        return (
            <div className="Rank">
                {tiles}
            </div>
        )
    }
}

export default Rank