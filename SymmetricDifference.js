// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), 
// the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, 
// but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), 
// you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). 
// The resulting array must contain only unique values (no duplicates).

function sym(args) {
    var unique = new Map();

    for (let i = 0; i < arguments.length; i++) {
        arguments[i] = arguments[i].sort();
        for (let j = 0; j < arguments[i].length; j++) {
            let value = arguments[i][j];
            if (value != arguments[i][j + 1]) {
                if (!unique.has(value)) {
                    unique.set(value, value);
                } else {
                    unique.delete(value);
                }
            }
        }
    }
    return Array.from(unique.keys());
}

sym([1, 2, 3], [5, 2, 1, 4])