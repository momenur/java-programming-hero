const name = 'BanglaDesh';
const age = 62;
const isIndependent = true;
const student = {name: 'Momen', class: 11, ID: 124,};
const friends = ['rahim', 'karim', 'Jabbar', 'Satter', 'jalil'];
function sum(a, b){
    return a + b;
}
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isIndependent);
// console.log(typeof student);
// console.log(typeof friends);
// console.log(Array.isArray(friends));
const newFriends = ['HeroAlam', 'NuraFatehi'];
const allFriends = friends.concat(newFriends);
console.log(allFriends);
