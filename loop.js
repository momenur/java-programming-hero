// var i = 10;
// while(i >= 1){
//     console.log(i);
//     i--;
// }
/**
 * brack condition 
 */



// console.log(array.indexOf(10));
// console.log(array.length); 
// Target Array er Element show kora


// var numbers =[10, 20, 30, 40 ,50, 100, 25, 35, 45, 90,];  
// for(var i = 0; i <= numbers.length; i++){
//     console.log(numbers[i]);
// }

var numbers =[10, 20, 30, 40 ,50, 100, 25, 35, 45, 90,];
for(i = 0; i < numbers.length; i++){
    if(numbers[i] > 50){
        continue ;
    }
    console.log(numbers[i]);
}
