class MoveCalculator {
    calculateFor = (pieceName, gridReference) => {
        switch (pieceName) {
            case ('white-pawn'):
                return calculatePawnMoves(gridRerenence, 'white')
            default:
                return [];
        }
    }

    calculatePawnMoves = (gridReference, pieceColour) => {

    }

    calculateKnightMoves = (gridReference, pieceColour) => {

    }

    calculateBishopMoves = (gridReference, pieceColour) => {

    }

    calculateRookMoves = (gridReference, pieceColour) => {

    }

    calculateQueenMoves = (gridReference, pieceColour) => {

    }

    calculateKingMoves = (gridReference, pieceColour) => {

    }
}