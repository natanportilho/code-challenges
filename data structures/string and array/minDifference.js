
//https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

//Minimum Absolute Difference in an Array

function minimumDifference(arr){
    var minimumDifference = 99999999999;
    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i - 1]) < minimumDifference) {
            minimumDifference = Math.abs(arr[i] - arr[i - 1]);
        }
    }
    return minimumDifference;
}

console.log(minimum2([3, -7, 0]));