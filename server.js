require('dotenv').config();
import { cart } from './public/scripts/cart';

const express = require('express');
const app = express();

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static("public"))
const stripe = require('stripe')(process.env.ddjjjf)

let cartItems = cart;

app.post('/create-checkout-session',async  (req, res) => {
    try{
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.items,
        success_url: `${process.env.SERVER_URL}/success.html`,
        cancel_url: `${process.env.SERVER_URL}/cancel.html`
      })
    }
    catch(e){
        res.status(500).json({ error: e.message })
    }
    res.json( { url: 'HI' })
})
app.listen(4000)