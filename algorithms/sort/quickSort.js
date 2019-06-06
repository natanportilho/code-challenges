

/* TODO: Refactoring */
function quickSort(array){
    if(array.length <= 1){
        return array;
    }
    var leftPointer = 0;
    var rightPointer = array.length - 1;
    var half = Math.round((array.length-1)/2);
    var pivot = array[half];

    while(leftPointer < rightPointer){
        while(array[leftPointer] < pivot){
            leftPointer++;
        }
        while(array[rightPointer] > pivot){
            rightPointer--;
        }
        if (array[leftPointer] != array[rightPointer]){
            array = swipe(array, leftPointer, rightPointer);
        }
        
    }
    var leftHalf = array.slice(0, leftPointer);
    var rightHalf = array.slice(rightPointer, array.length);

    return quickSort(leftHalf).concat(quickSort(rightHalf));
}

function swipe(array, leftpointer, rightPointer){
    var leftvalue = array[leftpointer];
    var rightValue = array[rightPointer]
    array[leftpointer] = rightValue;
    array[rightPointer] = leftvalue;
    return array;
}

var array = [15,3,9,8,5,2,7,1,6];
console.log(quickSort(array));
var array2 = [4,5,3,7,2]
console.log(quickSort(array2));
