/*
    some
    
    the .some() method cheks if at least one element of the array meets the specified conditions.
    
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


const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
});

console.log(hasInexpensiveItems);