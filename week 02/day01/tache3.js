
const Cart = [
  {
    name: "T-shirt",
    price: 15000,
    quantity: 2
  },
  {
    name: "Jean",
    price: 25000,
    quantity: 1
  },
  {
    name: "Chaussures",
    price: 35000,
    quantity: 1
  }
];

// calcule du total des produits present dans la cart
function calculateTotalItems(cart) {
  let a = 0; 
  for (let i=0; i < Cart.length; i++) {
    a = a + cart[i].quantity;
  };
  return a;
};
let c = calculateTotalItems(Cart);
console.log('Nombre d\'articles :' + ' ' + c);

// calcule du sous-total du panier
function calculateSubtotal(cart) {
  let b = 0;
  for (let i=0; i < Cart.length; i++) {
    b = b + (cart[i].quantity * cart[i].price);
  };
  return b;
};
let d = calculateSubtotal(Cart);
console.log('sous-total :' + ' ' + d + ' ' +'FCFA');

// calcule du prix moyen du panier
function calculateAveragePrice(cart) {
let
}

// application de la remise 
function calculateDiscount(total) {

}

// generation de la facture
function generateCartSummary(cart) {

}