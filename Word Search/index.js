class MySolution {
    constructor(value) {
    }
    run(word, board) {
        return this.findWord(board, word)
    }
    
    findAtPosition(word, maze, charPos, row, col, visitedPos) {
        if (word.charAt(charPos) === maze[row][col]) {
            visitedPos.set(`${row}|${col}`, true)
            // Is the last char, return true
            if (charPos == word.length - 1) {
                return true
            }
            const positionsAround = [
                [row + 1, col], // Down
                [row, col + 1], // Right
                [row - 1, col], // Up
                [row, col - 1]  // Left
            ]
            for (let i = 0; i < positionsAround.length; i++) {
                const [r, c] = positionsAround[i]
                if (r >= 0 && r < maze.length && c >= 0  && c < maze[r].length && !visitedPos.get(`${r}|${c}`)) {
                    if (this.findAtPosition(word, maze, charPos + 1, r, c, new Map(visitedPos)) === true) {
                        return true
                    } 
                }
            }
            return false
            
        } else {
            return false
        }
    }
    
    findWord(word, maze) {
        for (let i = 0; i < maze.length; i++) {
            for (let j = 0; j < maze[i].length; j++) {
                if (word.charAt(0) == maze[i][j]) {
                    const found = this.findAtPosition(word, maze, 0, i, j, new Map())
                    if (found) return true
                }
            }
        }
        return false
    }      
}