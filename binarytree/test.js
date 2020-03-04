const island = (grid) => {
    const nr = grid.length;
    const nc = grid[0].length;
    let islands = 0;
    // loop through the rows
    for (let r = 0; r < nr ; r++){
        for (let c = 0; c < nc; c++){
            if(grid[r][c] == '1'){
                islands ++;
                dfs(r, c, grid)
            }
        }
    }
    return islands;
}

// DFS
const dfs = (r, c, grid) => {
    const nr = grid.length;
    const nc = grid[0].length;
    if(r < 0 || r >= nr || c < 0 || c >= nc || grid[r][c] === '0'){
        return;
    }
    grid[r][c] = '0';
    dfs(r - 1, c, grid);
    dfs(r + 1, c, grid);
    dfs(r, c - 1, grid);
    dfs(r, c + 1, grid);
};

// BFS

const island = (grid) => {
    const nr = grid.length;
    const nc = grid[0].length;
    let islands = 0;
    // loop through the rows
    for (let r = 0; r < nr ; r++){
        for (let c = 0; c < nc; c++){
            if(grid[r][c] == '1'){
                islands ++;
                let neighbours = [];
                neighbours.push(r * nc + c);
                while(neighbours.length !== 0){
                    const id = neighbours.shift();
                    const row = id / nc;
                    const col = id % nc;
                    if(row - 1 >= 0 && grid[row - 1][col] == '1'){
                        neighbours.push((row - 1) * nc + col);
                        grid[row - 1][col] = '0';
                    };

                    if(row + 1 < nr && grid[row + 1][col] == '1'){
                        neighbours.push((row + 1) * nc + col);
                        grid[row + 1][col] = '0';
                    };

                    if(col - 1 >= 0 && grid[row][col - 1] == '1'){
                        neighbours.push(row * nc + col - 1);
                        grid[row][col - 1] = '0';
                    };

                    if(col + 1 < nc && grid[row][col + 1] == '1'){
                        neighbours.push(row * nc + col + 1);
                        grid[row][col + 1] = '0';
                    }
                };
            }
        }
    }
    return islands;
}