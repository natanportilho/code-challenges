// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Note
// You can return the array with its elements in any order.

// Solution 1:
function diffArray(arr1, arr2) {
    return arr1.filter(num => !arr2.includes(num)).concat(arr2.filter(num => !arr1.includes(num)));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Solution 2:

function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.map(function(e){
        if (!arr2.includes(e)){
            newArr.push(e);   
        }
    });
    arr2.map(function(e){
        if (!arr1.includes(e)){
            newArr.push(e);   
        }
    });
    console.log(newArr);
    return newArr;
  }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);