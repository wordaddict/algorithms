var canCross = function(stones) {
    
    if(stones[1] != 1) return false;
    
    var map = new Map();
    return recursion(stones, 0, 1, map);
};


var recursion = function(stones, index, acc, map) {
     if(index >= stones.length -1) { 
        return true;
    } 
    
    var p1 =  acc;
    var p2 =  acc-1;
    var p3 =  acc+1
    var r1 = false;
    var r2 = false;
    var r3 = false;
    
    var key = index + ":" + acc;
    
    if(!map.has(key)) {
    for(let i=index+1; i < stones.length; i++) {
        if(stones[i] == stones[index] + p1) {
             r1 = recursion(stones, i, p1, map); 
        }
        else if(stones[i] == stones[index] + p2) {
             r2 = recursion(stones, i, p2, map) 
        }
        else if(stones[i] == stones[index] + p3) {
             r3 = recursion(stones, i, p3, map) 
        } 
    }
        map.set(key, r1||r2||r3);
    }
    return  map.get(key); 
}