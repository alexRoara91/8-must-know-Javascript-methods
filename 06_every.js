/*
    every
    
    the .some() method cheks if all the elements of the array meets the specified conditions.
    
*/

const items = [
    {name : 'hat', price : 100},
    {name : 'disc', price : 200},
    {name : 'computer', price : 700},
    {name : 'bike', price : 100},
    {name : 'necklace', price : 600},
    {name : 'purse', price : 200},
    {name : 'watch', price : 2000}
]

const hasInexpensiveItems = items.every((item) => {
    //it will say "true" because all the elements in the array are less than 1000 in price
    //if we change at least one element to have a price over 1000 it will say false.
    return item.price <= 1000;
});


console.log(hasInexpensiveItems);