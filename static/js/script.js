document.addEventListener("DOMContentLoaded", function() {
    const minusBtn = document.querySelector(".btn-minus");
    const plusBtn = document.querySelector(".btn-plus");
    const qtyInput = document.querySelector(".qty-input");

    minusBtn.addEventListener("click", () => {
        let current = parseInt(qtyInput.value);
        if (current > 1) {
            qtyInput.value = current - 1;
        }
    });

    plusBtn.addEventListener("click", () => {
        let current = parseInt(qtyInput.value);
        if (current < 10) { // চাইলে max value পরিবর্তন করো
            qtyInput.value = current + 1;
        }
    });
});


function updateQuantity(itemId, change) {
        // Update item quantity dynamically
        const input = event.target.parentElement.querySelector('.quantity-input');
        let value = parseInt(input.value) + change;
        if (value >= 1) {
            input.value = value;
            // Send the updated quantity to the server via AJAX or form submission
        }
    }



// ajax request to update the cart


