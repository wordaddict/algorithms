// Depth first search
const Queue = require('../queue');
const island = (grid) => {
    const nr = grid.length;
    const nc = grid[0].length;
    if(grid === null || grid.length === 0){
        return;
    }
    let islands = 0;
    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid[0].length; col++){
            if(grid[row][col] == '1'){
                islands ++
                dfs(row, col, grid)
            }
        }
    }
    return islands;
};

const dfs = (r, c, grid) => {
    const nr = grid.length;
    const nc = grid[0].length;
    if(r < 0 || r >= grid.length || c < 0 || c >= grid[0].length ||  grid[r][c] =='0'){
        return;
    }
    grid[r][c] = '0'
    dfs(r - 1, c, grid)
    dfs(r + 1, c, grid)
    dfs(r, c - 1, grid)
    dfs(r, c + 1, grid)
};

//  Breadth first search
const isl = (grid) => {
    const nr = grid.length;
    const nc = grid[0].length
    if(grid === null || grid.length === 0){
        return;
    }
    let islands = 0;
    for (let r = 0; r < grid.length; r++){
        for (let c = 0; c < grid[0].length; c++){
            if(grid[r][c] == '1'){
                islands ++;
                const neighbors = new Queue() || [];
                neighbors.enqueue(r * nc + c);
                while (!neighbors.isEmpty()){
                    const id = neighbors.dequeue();
                    let row = id / nc;
                    let col = id % nc
                    if (row - 1 >= 0 && grid[row-1][col] == '1') {
                        neighbors.enqueue((row-1) * nc + col) || neighbors.push((row-1) * nc + col);
                        grid[row-1][col] = '0';
                      }
                      console.log('row', row)
                      if (row + 1 < nr && grid[row+1][col] == '1') {
                        neighbors.enqueue((row+1) * nc + col) || neighbors.push((row+1) * nc + col);
                        grid[row+1][col] = '0';
                      }
                      if (col - 1 >= 0 && grid[row][col-1] == '1') {
                        neighbors.enqueue(row * nc + col-1);
                        grid[row][col-1] = '0';
                      }
                      if (col + 1 < nc && grid[row][col+1] == '1') {
                        neighbors.enqueue(row * nc + col+1);
                        grid[row][col+1] = '0';
                      }
                }
            }
        }
    }
}

const data = [[1,1,0,0,0],
[1,1,0,0,0],
[0,0,1,0,0],
[0,0,0,1,1]]

// 11000
// 11000
// 00100
// 00011

console.log('Solution', isl(data))