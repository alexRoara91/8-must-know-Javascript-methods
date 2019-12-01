/*
    forEach

    It runs the indicated function once it is defined for each element in the array.
    
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

items.forEach((item) =>{
    console.log(item.name);
});

