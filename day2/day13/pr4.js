
function combiningNestedArrays(array1, array2){
    array1 = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];
    array2 = [
        [7, 8],
        [9, 10],
        [11, 12],
      ];

      let arr=[...array1,...array2]
      return arr
}
const result=combiningNestedArrays()

 
  console.log(result); // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
  