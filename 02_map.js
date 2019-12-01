/*
    map

    the .map() method creates a new array with the results of calling a function for every array element.
*/


const items = [
    {name : 'hat', price : 100},
    {name : 'disc', price : 200},
    {name : 'computer', price : 700},
    {name : 'bike', price : 100},
    {name : 'necklace', price : 600},
    {name : 'purse', price : 200},
    {name : 'watch', price : 700}
]

const itemNames = items.map((item) => {
    return item.name;
})

console.log(items);
console.log(itemNames);

