/*
    filter

    the .filter() method creates an array flled with all array 
    elements that pass a test (provided as a function);
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

const filteredItems = items.filter((item) => {
    return item.price <= 200
})

console.log(items);
console.log(filteredItems);

