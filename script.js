const nameInput = document.getElementById('customerName');
const addressInput = document.getElementById('customerAddress');
const startButton = document.getElementById('startOrder');
const feeDisplay = document.getElementById('fee');

function checkInputs() {
    startButton.disabled = !(nameInput.value.trim() && addressInput.value.trim());
}

nameInput.addEventListener('input', checkInputs);
addressInput.addEventListener('input', checkInputs);

addressInput.addEventListener('input', () => {
    const fee = addressInput.value.trim() ? 5.00 : 0.00;
    feeDisplay.textContent = `R$${fee.toFixed(2)}`;
});

startButton.addEventListener('click', () => {
    localStorage.setItem('customerName', nameInput.value.trim());
    localStorage.setItem('customerAddress', addressInput.value.trim());
    alert(`Olá ${nameInput.value.trim()}! Endereço salvo: ${addressInput.value.trim()}`);
    // window.location.href = 'pag2.html';
});