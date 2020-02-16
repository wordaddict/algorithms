var searchMatrix = function(matrix, target) {
    let exist = false;
    for (let each of matrix){
        if(each.indexOf(target) !== -1){
           exist = true
            return exist
        }
    }
    return exist
};