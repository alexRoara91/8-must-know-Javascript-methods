/*
    find

    Is used to get the first element in the aray that
    satisfies the provided condition.

    
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

const foundItem = items.find((item) => {
    return item.name === 'disc';
})

console.log(items);
console.log(foundItem);

