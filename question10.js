// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.

let result= 4 > 3;   //---true
console.log(result)

    4 >= 3               // true
    console.log(4 >= 3)
    4 < 3                // false
    console.log(4 < 3)
    4 <= 3               //false
    console.log(4 <= 3)
    4 == 4               //true
    console.log(4 == 4)
    4 === 4              //true
    console.log(4 === 4)
    4 != 4               //false
    console.log(4 != 4)
    4 !== 4               //false
    console.log(4 !== 4)
    4 != '4'              //false
    console.log(4 != '4')
    4 == '4'              //true
    console.log(4 == '4')
    4 === '4'             //false
    console.log(4 === '4') 

    //     - Find the length of python and jargon and make a falsy comparison statement.
    const python ="Python";
    const jargon ="Jargon";

    console.log('The length of the string python is:', python.length);
    console.log('The length of the string jargon is:', jargon.length);

    const compare= python.length != jargon.length;
    console.log(compare);