const products =[
    {name: 'shirt', category: 'clothing'},
    {name: 'pants', category: 'clothing'},
    {name: 'Hat', category: 'accessories'},
    {name: 'Sunglasses', category: 'accessories'},
]

function filterbycategory(products){
    return function (category){
        return products.filter(product=> product.category===category)
    }

    
}
const filteredproducts = filterbycategory(products)('clothing')
console.log(filteredproducts);
