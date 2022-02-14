function compress(str) {
  let arr = str.split('');
  let newArr = [];
  let currentLetter = arr[0];
  let counter = 0;

  for (let i = 0; i <= arr.length; i++) {
      
      if (arr[i] === currentLetter) {
          counter++;
      }
      else {
          newArr.push(currentLetter);
          newArr.push(counter);
          currentLetter = arr[i];
          counter = 1;
      }
  }
  return newArr.join('');
}

console.log( compress('a') );
console.log( compress('aafaaadvdcddda') );
console.log( compress('aaffdssbbb') );


function uncompress (str) {
  let result = '';

  for (i = 0; i < str.length; i++) {

    if ( str[i] !== Number(str[i]) && str[i + 1] == Number(str[i + 1]) && str[i + 2] == Number(str[i + 2]) ){
      let letter = str[i];
      let numberOfLetters = '';
      i++;    
      
      do {
        numberOfLetters += str[i];
        i++;
      } while (str[i] == Number(str[i]));

      i = i - 1;
      result += letter.repeat(Number(numberOfLetters));

    } else {
      result += str[i].repeat(str[i + 1]);
    }
  }
  return result;
}

console.log( uncompress('a100') );
console.log( uncompress('f5hy8tb2') );
console.log( uncompress('a2b1c3f6j8') );


