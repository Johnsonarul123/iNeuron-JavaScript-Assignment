// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
shoppingCart.unshift ('Meat');   // unshift to add at the begining
console.log(shoppingCart);

shoppingCart.push ('Sugar');     // push method to add at the end 
console.log(shoppingCart);

shoppingCart.splice (4,1);       // splice to remove element from between of the array
console.log(shoppingCart);

const u = shoppingCart.indexOf("Tea")
console.log(u);
shoppingCart.splice( 3,1,);
shoppingCart.splice(3,0,'Green Tea');   //modify Tea to 'Green Tea' using splice
console.log(shoppingCart);