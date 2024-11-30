function knightMoves(startArr, endArr) {
  function findMoves() {
    const directions = [
      [1, 2],
      [2, 1],
      [-1, 2],
      [2, -1],
      [1, -2],
      [-2, 1],
      [-1, -2],
      [-2, -1],
    ];

    const visitedSquares = new Set();
    let queue = [[startArr, [startArr]]]; // Each entry stores the current square and the path to it

    while (queue.length) {
      const [current, path] = queue.shift();
      const [currentX, currentY] = current;

      // Check if the target square is reached
      if (currentX === endArr[0] && currentY === endArr[1]) {
        return path;
      }

      for (let direction of directions) {
        const nextX = currentX + direction[0];
        const nextY = currentY + direction[1];

        // Validate move is within bounds and not already visited
        if (
          nextX >= 0 &&
          nextX < 8 &&
          nextY >= 0 &&
          nextY < 8 &&
          !visitedSquares.has(`${nextX},${nextY}`)
        ) {
          visitedSquares.add(`${nextX},${nextY}`);
          queue.push([
            [nextX, nextY],
            [...path, [nextX, nextY]],
          ]); // Add the next square and updated path
        }
      }
    }

    // If the input is invalid
    return [];
  }

  const moves = findMoves();

  console.log(`You made it in ${moves.length - 1} moves!  Here is your path: `);
  for(let move of moves) {
    console.log(move);
  }
}

knightMoves([3, 3], [4, 3]);
