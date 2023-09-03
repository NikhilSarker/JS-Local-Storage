// Add Product function added
const addProduct = () => {
  const product_field = document.getElementById('product_field');
  const quantity_field = document.getElementById('quantity_field');
  const product = product_field.value;
  const quantity = quantity_field.value;
  product_field.value = '';
  quantity_field.value = '';
  displayProduct(product, quantity);
  saveProductToLocalStorage(product, quantity)
  // console.log(product_field_value, quantity_field_value);
}
const displayProduct = (product, quantity) => {
  const product_container = document.getElementById('product_container');
  const li = document.createElement('li');
  li.style.listStyle = 'none';
  li.innerText = `${product} : ${quantity} `;
  product_container.appendChild(li);


}

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
   
  }
  return cart;
}


const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
}

const displayProductFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  // console.log(savedCart);
  for(const product in savedCart){
    const quantity = savedCart[product];
    displayProduct(product, quantity )
    // console.log(product, quantity);
  }
}
displayProductFromLocalStorage();