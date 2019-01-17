
function bitsCounter(decimalNumber){
    var counts = [];

    for (var i = 0; i <= decimalNumber; i++){
        var count = 0;
        var number = i;
        while (number != 0){
            var rest =  Math.floor(number % 2);
            if (rest == 1) count++;
            number =  Math.floor(number / 2);
        }
        counts.push(count);
    }
    return counts;
}


