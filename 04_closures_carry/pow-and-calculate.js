function pow(a) {

    let result = a;
    let resultForNegativeExponent = a;

    return function(b) {

        if (b < 0) {
            for (let i = 1; i < b*(-1); i++) {
                resultForNegativeExponent *= a;
                result = 1/resultForNegativeExponent;
              } 
        }

        if (b === 0) {
            result = 1;
        }

        for (let i = 1; i < b; i++) {
            result *= a;
          }
         
          return (`${a}^${b} = ${result}`);
        }
    }
    
  console.log ( pow(2)(-3) );
  console.log ( pow(3)(0) );
  console.log ( pow(-2)(5) );

  function calculate(a) {
    return function(separator) {
        return function(b) {
            if (separator === "*") {
                return (`${a}${separator}${b} = ${a * b}`);
            } else if (separator === "/") {
                if (b === 0) {
                    return `${a}${separator}${b} =`+" Ошибка (на ноль делить нельзя)";
                }
                return (`${a}${separator}${b} = ${a / b}`);
            } else if (separator === "+") {
                return (`${a}${separator}${b} = ${a + b}`);
            } else if (separator === "-") {
                return (`${a}${separator}${b} = ${a - b}`);
            }
        }
    } 
 }

 console.log ( calculate(2)("*")(3) );
 console.log ( calculate(2)("/")(0) );
 console.log ( calculate(2)("+")(3) );
 console.log ( calculate(2)("-")(3) );
