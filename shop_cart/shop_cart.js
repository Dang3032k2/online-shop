function deleteItem(button) {
    var item = button.parentNode.parentNode;
    var itemList = item.parentNode;
    itemList.removeChild(item);
  }
  function decreaseQuantity(button, cartItemID) {
    var quantitySpan = button.nextElementSibling;
    var itemQuantity = parseInt(quantitySpan.textContent);
    itemQuantity -= 1;
    if (itemQuantity <= 0) {
      var cartItem = document.getElementById(cartItemID);
      cartItemList = cartItem.parentNode;
      cartItemList.removeChild(cartItem);
    } else {
      quantitySpan.textContent = itemQuantity;
      updateSubtotal(button, itemQuantity + 1, 'decrease');
    }
  }
  function increaseQuantity(button) {
    var quantitySpan = button.previousElementSibling;
    var itemQuantity = parseInt(quantitySpan.textContent);
    itemQuantity += 1;
    quantitySpan.textContent = itemQuantity;
    updateSubtotal(button, itemQuantity, 'increase');
  }
  function updateSubtotal(quantityBtn, itemQuantity, type) {
    var quantityElement = quantityBtn.parentNode.parentNode;
    var totalElement = quantityElement.nextElementSibling;
    var currentSubtotal = parseFloat(
      totalElement.textContent.replace('$', '')
    );
    var newSubtotal = null;
    if (type === 'increase')
      newSubtotal = (currentSubtotal / (itemQuantity - 1)) * itemQuantity;
    else if (type === 'decrease')
      newSubtotal = currentSubtotal - currentSubtotal / itemQuantity;
    totalElement.textContent = '$' + newSubtotal.toFixed(2);
  }