/*
    reduce
    
    the .some() method cheks if all the elements of the array meets the specified conditions.
    
*/

const items = [
    {name : 'hat', price : 100},
    {name : 'disc', price : 200},
    {name : 'computer', price : 700},
    {name : 'bike', price : 100},
    {name : 'necklace', price : 600},
    {name : 'purse', price : 200},
    {name : 'watch', price : 1000}
]

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
},0);

console.log(total);
//The cero here count as a starting point for the currentTotal