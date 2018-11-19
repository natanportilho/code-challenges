// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
    var sum = 0;
    var result = JSON.parse(calculateLargest(arr));
    while(result.largest >= result.smallest){
        sum = sum + result.smallest;
        result.smallest = result.smallest + 1;
    }
  return sum;
}

function calculateLargest(arr) {
    return arr[1] > arr[0] ? 
    `{ "smallest" : ` + arr[0] + `, "largest" : ` + arr[1] + `}`
     : 
     `{ "smallest" : ` + arr[1] + `, "largest" : ` + arr[0] + `}`;
}

sumAll([1, 4]);

