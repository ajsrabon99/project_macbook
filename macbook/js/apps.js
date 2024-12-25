// Function to get numeric value from an element
function getValue(id) {
  return parseInt(document.getElementById(id).innerText);
}

// Function to set value to an element
function setValue(id, value) {
  document.getElementById(id).innerText = value;
}

// Function to calculate and update the total price
function calculateTotal() {
  const basePrice = 1299;
  const memoryCost = getValue("memory-cost");
  const storageCost = getValue("storage-cost");
  const deliveryCost = getValue("delivery-cost");

  const totalPrice = basePrice + memoryCost + storageCost + deliveryCost;
  setValue("total-price", totalPrice);
  setValue("user-payment", totalPrice);
  return totalPrice;
}

// Event Listeners for Memory Buttons
document.getElementById("8gb-memory").addEventListener("click", function () {
  setValue("memory-cost", 0);
  calculateTotal();
});
document.getElementById("16gb-memory").addEventListener("click", function () {
  setValue("memory-cost", 180);
  calculateTotal();
});

// Event Listeners for Storage Buttons
document.getElementById("256gb-storage").addEventListener("click", function () {
  setValue("storage-cost", 0);
  calculateTotal();
});
document.getElementById("512gb-storage").addEventListener("click", function () {
  setValue("storage-cost", 100);
  calculateTotal();
});
document.getElementById("1tb-storage").addEventListener("click", function () {
  setValue("storage-cost", 180);
  calculateTotal();
});

// Event Listeners for Delivery Buttons
document.getElementById("late-delivery").addEventListener("click", function () {
  setValue("delivery-cost", 0);
  calculateTotal();
});
document.getElementById("early-delivery").addEventListener("click", function () {
  setValue("delivery-cost", 20);
  calculateTotal();
});

// Promo Code Functionality
document.getElementById("apply-btn").addEventListener("click", function () {
  const promoInput = document.getElementById("input-field").value.trim();
  const validPromo = "Ostad";
  const discountRate = 0.1; // 10% discount

  let totalPrice = calculateTotal();

  if (promoInput === validPromo) {
      const discountedTotal = totalPrice - totalPrice * discountRate;
      setValue("user-payment", discountedTotal.toFixed(2));
      alert("Promo code applied! You received a 10% discount.");
  } else {
      alert("Invalid promo code. Please try again.");
  }
});
