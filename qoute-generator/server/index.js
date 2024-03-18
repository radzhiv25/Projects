// server/index.js

const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('publicable_key');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/charge', async (req, res) => {
    try {
        const { token, quote } = req.body;

        const charge = await stripe.charges.create({
            amount: 1000, // Amount in cents
            currency: 'usd',
            description: 'Random Quote Purchase',
            source: token,
        });

        // Here you can deliver the quote to the user or perform any other action on successful payment
        console.log('Payment successful:', charge);

        res.sendStatus(200);
    } catch (error) {
        console.error('Error processing payment:', error);
        res.sendStatus(500);
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
