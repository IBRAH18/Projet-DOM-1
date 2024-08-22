// var items = [
//     {name: 'Chemise 1', image: './images/chemise 1.jpg', price: 15000, quantite_commande: 1, total: 15000},
//     {name: 'Chemise 2', image: './images/chemise 1.jpg', price: 10000, quantite_commande: 1, total: 10000},
//     {name: 'Polo', image: './images/polo 1.jpg', price: 7500, quantite_commande: 1, total: 7500},
//     {name: 'Sac', image: './images/Sac 1.jpg', price: 18000, quantite_commande: 1, total: 18000},
// ]

// const tbody = document.getElementsByTagName('tbody');


// const buildRow = (item = {name: '-', image: '-', price: 0, quantite_commande: 0, total: 0}) => {
//     return `
//         <tr>
//             <td class="py-4">
//                 <div class="flex items-center">
//                     <img class="h-16 w-16 mr-4" src="${item.image}" alt="Product image">
//                     <span class="font-semibold"> ${item.name} </span>
//                 </div>
//             </td>
//             <td class="py-4"> ${item.price} </td>
//             <td class="py-4">
//                 <div class="flex items-center">
//                     <button class="border rounded-md py-2 px-4 mr-2"> - </button>
//                     <span class="text-center w-8"> ${item.quantite_commande} </span>
//                     <button class="border rounded-md py-2 px-4 ml-2"> + </button>
//                 </div>
//             </td>
//             <td class="py-4"> ${item.total} </td>
//         </tr>
//     `
// }

// document.addEventListener('DOMContentLoaded', function() {
//     // console.log('tbody: ', tbody)
//     // tbody.appendChild(document.createElement('h1'))
//     document.body.appendChild(  document.createElement('<h1>Shopping Cart</h1>'));
//  }, false);

// window.onloadeddata = (event) => {
//     for (let data of items) {
//         // console.log('tbody: ', tbody)
//         // document.tbale.tbody.appendChild(buildRow(data))
//         // tbody.appendChild(buildRow(data))
//         // tbody.appendChild(document.createElement('h1'))
//     }
// };
