const names = ['Momen', 'Humayon', 'Somrat', 'Mukbol', 'Sakib', 'Sakil', 'Shariar', 'Momen', 'Mokbol', 'Alamin', 'Alamin']
function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        let name = names[i];
        if(unique.includes(name) ===false){
            unique.push(name);
        }
    }
    return unique;
}
const result = removeDuplicate(names);
console.log(result);