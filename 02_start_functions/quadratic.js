function quadraticEquation(a, b, c) {
    
    let D = b ** 2 - 4 * a * c;
    let x;
    let x1;
    let x2;
    let b2 = -b;
    let c2 = -c;
    let str;

    if (a === 0) {
        return ("Ошибка! a не может быть равным 0!");
    }

    function selectVariables () {
        if ( (a === 1 || a === -1) && (b === 1 || b === -1) ) {
            if (a < 0 && b < 0 && c < 0) {
                str = `- x^2` + ` -` + ` x` + ` -` + ` ${c2} = 0`;
            } else if (a < 0 && b < 0) {
                str = `- x^2` + ` -` + ` x` + ` + ${c2} = 0`;
            } else if (a < 0 && c < 0) {
                str = `- x^2` + ` + x` + `-` + ` ${c2} = 0`;
            }  else if (b < 0 && c < 0) {
                str = `x^2` + ` -` + ` x` + `-` + ` ${c2} = 0`;
            } else if (a < 0) {
                str = `- x^2 ` + ` + x` + ` + ${c} = 0`;
            } else if (b < 0) {
                str = `x^2 ` + ` - x` + ` -` + ` + ${c} = 0`;
            } else if (c < 0) {
                str = `x^2 ` + ` x` + ` -` + ` + ${c2} = 0`;
            } else  {
                str = `x^2 ` + ` + x` + ` + ${c} = 0`
            }
        } else if (a === 1 || a === -1) {
            if (b < 0 && c < 0) {
                str = `x^2` + ` -` + ` ${b2}x` + `-` + ` ${c2} = 0`;
            } else if (b < 0) {
                str = `x^2` + ` -` + ` ${b2}x` + ` + ${c} = 0`;
            } else if (c < 0) {
                str = `x^2 ` + `${b}x` + ` -` + ` + ${c2} = 0`;
            } else {
                str = `x^2 ` + ` + ${b}x` + ` + ${c} = 0`
            }
        } else if (b === 1 || b === -1) {
            if (b < 0 && c < 0) {
                str = `${a}x^2` + ` -` + ` ${b2}x` + ` -` + ` ${c2} = 0`;
            } else if (b < 0) {
                str = `${a}x^2` + ` -` + ` ${b2}x` + ` + ${c} = 0;`
            } else if (c < 0) {
                str = `${a}x^2 ` + ` + ${b}x` + ` -` + ` ${c2} = 0`;
            } else {
                str = `${a}x^2 ` + ` + ${b}x` + ` + ${c} = 0`
            }
        } else {   
                if (b < 0 && c < 0) {
                    str = `${a}x^2` + ` -` + ` ${b2}x` + ` -` + ` ${c2} = 0`;
                } else if (b < 0) {
                    str = `${a}x^2` + ` -` + ` ${b2}x` + ` + ${c} = 0`;
                } else if (c < 0) {
                    str = `${a}x^2 ` + ` + ${b}x` + ` -` + ` ${c2} = 0`;
                } else {
                    str = `${a}x^2 ` + ` + ${b}x` + ` + ${c} = 0`
                }
        }  
    }

    if (D > 0) {
        x1 = (-b + D ** .5) / (2 * a);

        x2 = (-b - D ** .5) / (2 * a);

        selectVariables ();

        return(`${str} имеет корни x1 = ${x1} и x2 = ${x2}`);

    } else if (D == 0) {

        x =  -b / (2 * a);

        selectVariables ();

        return(`${str} имеет один корень x = ${x}`) ;

    } else {
        
        selectVariables ();

        return(`${str} не имеет вещественных корней`) ;

    }
}

console.log( quadraticEquation(1, -8, 72) );
console.log( quadraticEquation(1, 12, 36) );
console.log( quadraticEquation(4, -8, 1) );
console.log( quadraticEquation(-1, 1, 72) );
console.log( quadraticEquation(-1, -1, -36) );
console.log( quadraticEquation(4, 16, -36) );
console.log( quadraticEquation(-4, -8, 1) );
console.log( quadraticEquation(0, -8, 1) );
console.log( quadraticEquation(-4, -8, 1) );
console.log( quadraticEquation(-4, 8, -1) );
