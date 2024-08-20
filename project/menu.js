document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const summaryList = document.getElementById('summary-list');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');

    items.forEach(item => {
        const decreaseButton = item.querySelector('.decrease');
        const increaseButton = item.querySelector('.increase');
        const quantityInput = item.querySelector('input[type="number"]');
        const priceElement = item.querySelector('.price');
        const price = parseFloat(priceElement.textContent.replace('₹', ''));

        decreaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 0) {
                quantity--;
                quantityInput.value = quantity;
                updateSummary(item, price, quantity);
            }
        });

        increaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
            updateSummary(item, price, quantity);
        });
    });

    function updateSummary(item, price, quantity) {
        const itemName = item.querySelector('h3').textContent;
        let listItem = document.querySelector(`#summary-list li[data-name="${itemName}"]`);

        if (quantity > 0) {
            if (!listItem) {
                listItem = document.createElement('li');
                listItem.dataset.name = itemName;
                listItem.innerHTML = `${itemName}: <span>₹${(price * quantity).toFixed(2)}</span>`;
                summaryList.appendChild(listItem);
            } else {
                listItem.innerHTML = `${itemName}: <span>₹${(price * quantity).toFixed(2)}</span>`;
            }
        } else if (listItem) {
            listItem.remove();
        }

        updateTotal();
    }

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('#summary-list li').forEach(item => {
            const amount = parseFloat(item.querySelector('span').textContent.replace('₹', ''));
            total += amount;
        });
        totalElement.textContent = `Total: ₹${total.toFixed(2)}`;
    }

    checkoutBtn.addEventListener('click', () => {
        // Redirect to checkout page
        window.location.href = 'checkout.html';
    });
});
