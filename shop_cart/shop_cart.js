const deleteItem = (button) => {
  let item = button.parentNode.parentNode;
  let itemList = item.parentNode;
  itemList.removeChild(item);
};
const decreaseQuantity = (button, cartItemID) => {
  let quantitySpan = button.nextElementSibling;
  let itemQuantity = parseInt(quantitySpan.textContent);
  itemQuantity -= 1;
  if (itemQuantity <= 0) {
    let cartItem = document.getElementById(cartItemID);
    let cartItemList = cartItem.parentNode;
    cartItemList.removeChild(cartItem);
  } else {
    quantitySpan.textContent = itemQuantity;
    updateSubtotal(button, itemQuantity + 1, 'decrease');
  }
};
const increaseQuantity = (button) => {
  let quantitySpan = button.previousElementSibling;
  let itemQuantity = parseInt(quantitySpan.textContent);
  itemQuantity += 1;
  quantitySpan.textContent = itemQuantity;
  updateSubtotal(button, itemQuantity, 'increase');
};
const updateSubtotal = (quantityBtn, itemQuantity, type) => {
  let quantityElement = quantityBtn.parentNode.parentNode;
  let totalElement = quantityElement.nextElementSibling;
  let currentSubtotal = parseFloat(totalElement.textContent.replace('$', ''));
  let newSubtotal = null;
  if (type === 'increase')
    newSubtotal = (currentSubtotal / (itemQuantity - 1)) * itemQuantity;
  else if (type === 'decrease')
    newSubtotal = currentSubtotal - currentSubtotal / itemQuantity;
  totalElement.textContent = '$' + newSubtotal.toFixed(2);
};
