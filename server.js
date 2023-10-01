
require('dotenv').config()

const express = require('express');
const app = express();

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static("public"))
const stripe = require('stripe')(process.env.ddjjjf)

const items = new Map([]);

app.post('/create-checkout-session', (req, res) => {
    res.json( { url: 'HI' })
})
app.listen(4000)