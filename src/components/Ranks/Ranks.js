import React from 'react'
import Rank from './Rank/Rank'

const ranks = (props) => {
    const rankIds = [8, 7, 6, 5, 4, 3, 2, 1]
    const rankArray = rankIds.map((rank, index) => {
        //console.log(index)
        return <Rank
            key={rank}
            rankId={rank} />
    })

    // for (var i = 8; i > 0; i--) {
    //     rankArray[i] = <Rank key={i} rankId={i} />
    // }
    return (
        <div className="Ranks">
            {rankArray}
        </div>
    )
}

export default ranks