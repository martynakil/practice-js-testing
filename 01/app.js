function getProductList() {
    return [
        {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
        {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27}
    ]
}

// function getTotalPrice(productList) {
//     return productList.reduce( (product, acc) => {
//         return acc + product;
//     });

function getTotalPrice(productList) {



   return productList.reduce((acc, product) => {


   

   return (product.price * product.count * (1 - product.discount)) + (acc.price * acc.count * (1 - acc.discount))


   })
}


const totalPrice = getTotalPrice( getProductList() );
 // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)

console.log(totalPrice)