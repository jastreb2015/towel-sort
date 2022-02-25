/* 

function towelSort (matrix) {
    arr = [];
    arr2 = [];
   
    for (i = 0; i < matrix.length; i++) {
        if (i%2 == 0) {
       arr.push(matrix[i].sort((a, b) => a - b)); 
        } else {
        arr.push(matrix[i].sort((a, b) => b - a)) ; 
        }
    }
    for (i = 0; i < arr.length; i++) {
        for(j = 0; j < arr[i].length; j++) {
            arr2.push(arr[i][j]);
        }
    }
    return arr2;
}
 */
/* console.log (towelSort([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
   ])); */

module.exports = function towelSort (matrix) {
    
    if ( matrix == undefined || matrix == null) {
        return  [];
    }
    arr = [];
    arr2 = [];
    for (i = 0; i < matrix.length; i++) {
        if (i%2 == 0) {
       arr.push(matrix[i].sort((a, b) => a - b)); 
        } else {
        arr.push(matrix[i].sort((a, b) => b - a)) ; 
        }
    }
    for (i = 0; i < arr.length; i++) {
        for(j = 0; j < arr[i].length; j++) {
            arr2.push(arr[i][j]);
        }
    }
    return arr2;
}



