function knightMoves(start, end) {
    const moves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];

    function isValid(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    const queue = [[start, [start]]];
    const visited = new Set();
    visited.add(start.join(","));

    while (queue.length) {
        const [curr, path] = queue.shift();
        const [x, y] = curr;

        if (x === end[0] && y === end[1]) {
            console.log(
                `Knight made it in ${path.length} moves. 
Here's knight's path:`
            );
            return path;
        }

        for (const move of moves) {
            const newX = x + move[0];
            const newY = y + move[1];
            const newPosKey = `${newX},${newY}`;

            if (isValid(newX, newY) && !visited.has(newPosKey)) {
                visited.add(newPosKey);
                queue.push([
                    [newX, newY],
                    [...path, [newX, newY]],
                ]);
            }
        }
    }

    return null;
}

console.clear();
console.log(knightMoves([0, 0], [7, 2]));
