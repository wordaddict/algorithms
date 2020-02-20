/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    //will have to perform BFS, because you have to consider each layer's capability first
        const row = grid[0].length;
        let row_positions = [-1, 0, 1, 0];
        let height_positions = [0, 1, 0, -1];
        const height = grid.length;
        const triggers = [];
        let max_minute = -1;
      
        for(let r = 0; r < row; r++){
            for(let h = 0; h < height; h++){
                if(grid[h][r] == 2){
                    triggers.push([h, r])
                }
            }
        }
        
        //Performing the BFS to explore nodes(oranges) with the smallest depth first
        triggers.forEach(trigger => {
             let [h, r] = trigger;
             BFS(grid[h][r], h, r, triggers);
        })
        
        //After the exploration, return the depth after checking if any cell is fresh(untouched)
          for(let r = 0; r < row; r++){
            for(let h = 0; h < height; h++){
                if(grid[h][r] == 1){
                    return -1
                }
            }
        }
        return max_minute == -1? 0: max_minute;
        
        //BFS that resets triggers after exploration of oranges at each depth:
        function BFS(cell, h, r, triggers){
            //While the current layer(triggers) is not empty, start getting the next round of trigger
            //at the end, triggers = newTriggers, newTriggers get reset to []
            let newTriggers = [];
            while(triggers.length || newTriggers.length){
                max_minute += 1;
                newTriggers = [];
                while(triggers.length){
                    let [H, R] = triggers.pop();
                    for(let p = 0; p < 4; p++){
                    let newHeight= H + height_positions[p];
                    let newRow = R + row_positions[p]
                    if( 0 <= H + height_positions[p] && H + height_positions[p] < height && 0 <=
                      R + newRow && R - newRow < row && grid[newHeight][newRow] == 1){
                        grid[newHeight][newRow] = 2;
                        newTriggers.push([newHeight, newRow])
                    }
                }
            }
                triggers = newTriggers.slice();;
            }
        }
        
    
    };