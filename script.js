const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
    const billValue = parseFloat(billInput.value); //  get bill input value as a float
    const tipValue = parseFloat(tipInput.value); // Get the tip percentage value
    const totalValue = billValue * (1 + tipValue / 100); // Calculate the total

    totalSpan.innerText = totalValue.toFixed(2); // Display the total amount with 2 decimal places
}

btnEl.addEventListener("click", calculateTotal); // event listener

