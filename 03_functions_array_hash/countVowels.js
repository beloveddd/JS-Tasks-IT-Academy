// function countVowelLetters(str) {
//     let arr = str.split('');
//     let counter = 0;

//     let vowel = arr.forEach( function(letter, i) {
        
//         for (letter[i]; letter[i] < arr.length; letter[i]++) {

//         if ( (letter == "a") || (letter == "е") || (letter == "ё") || (letter == "и") || (letter == "о") ||
//         (letter == "у") || (letter == "ы") || (letter == "э") || (letter == "ю") || (letter == "я") ) {
//             counter++;
//         }
              
      
//     } 
//     return counter;
// } );

// }

// console.log( countVowelLetters('Пришла зима, запахло') );

// function countVowelLetters(str) {
//     let counter = 0;
//     // let str = str1.split("");
//     let vowels = ["a", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];

    function countVowelLetters(text) {
        let arr = text.toLowerCase().split('');
        let counter = 0;
        const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

        for (let i = 0; i < arr.length; i++) {
          if (vowels.includes(arr[i])) {
            counter++;
          }         
        }
    
        return(`Количество гласных = ${counter}`);
      }
      console.log( countVowelLetters('Пришла зима, запахло') );
      console.log( countVowelLetters('Ghbdtn, z r dfv bp Hjccbb') );
      console.log( countVowelLetters('длинношеее') );
      console.log( countVowelLetters('Не будете ли Вы так любезны, Иван, передать мне блокнот и "Известия"') );
      console.log( countVowelLetters('Архангел Уриил') );


    // return str.split('').filter(letter => vowels.includes(letter)).length

        // for ( letter of str.toLowerCase() ) {
        //     if (vowels.includes(letter)) {
        //         counter++; 
        //     }
            
        // if ( (str.charAt(i) === "a") || (str.charAt(i) === "е") || (str.charAt(i) === "ё") || (str.charAt(i) === "и")
        // || (str.charAt(i) ==="о") || (str.charAt(i) === "у") || (str.charAt(i) === "ы") || (str.charAt(i) === "э") 
        // || (str.charAt(i) === "ю") || (str.charAt(i) === "я") ) {
        //     counter++;
        //     console.log(counter);
        // }
              
      
    // } 
    // return counter;


// console.log( countVowelLetters('Пришла зима, запахло') );