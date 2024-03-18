// script.js

document.addEventListener('DOMContentLoaded', function() {
    const stripe = Stripe('secret_key');
    const elements = stripe.elements();
    const cardElement = elements.create('card');
    
    cardElement.mount('#card-element');

    const form = document.getElementById('payment-form');
    const errorElement = document.getElementById('card-errors');
    const quoteElement = document.getElementById('quote');
    
    const generateButton = document.getElementById('generate-btn');

    generateButton.addEventListener('click', fetchQuote);

    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            const { content, author } = data;
            const quoteText = `"${content}" - ${author}`;
            quoteElement.textContent = quoteText;
        } catch (error) {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to fetch quote. Please try again.';
        }
    }

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        try {
            const { token, error } = await stripe.createToken(cardElement);

            if (error) {
                errorElement.textContent = error.message;
            } else {
                const response = await fetch('/charge', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: token.id,
                        quote: quoteElement.textContent
                    })
                });

                if (response.ok) {
                    // Payment successful, deliver the quote to the user
                    console.log('Payment successful');
                } else {
                    // Payment failed, display error message
                    console.error('Payment failed');
                }
            }
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    });
});
