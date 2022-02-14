function currentSums(arr) {
    const reducer = function(previousValue, currentValue) {

        previousValue[0][previousValue[0].length] = previousValue[0][previousValue[0].length - 1] ?
        `${previousValue[0][previousValue[0].length - 1]} + ${currentValue}` : `${currentValue}`;
            
        previousValue[1][previousValue[1].length] = 
        (previousValue[1][previousValue[1].length - 1] || 0) + currentValue;


      return previousValue;
    }

    const twoArrays = arr.reduce(reducer, [ [], [] ]);
    return `[${twoArrays[0]}] = [${twoArrays[1]}]`;
  };

console.log( currentSums([2, 3, 5, 7, 11, 13, 17]) );