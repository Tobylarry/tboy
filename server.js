require('dotenv').config()
const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const cors = require('cors')


const app = express();
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static("public"))
app.use(cors({
  origin: 'http://localhost:4500'
}))


const cart = new Map([
  [0, { price: 5000, name: 'Boogy Boyz Black Tshirt'}],
  [1, { price: 3500, name: 'Boogy Boyz star cap Red'}],
  [2, { price: 3000, name: 'Boogy Boyz star cap Blue'}],
  [3, { price: 3000, name: 'Boogy Boyz star cap Black'}],
  [4, { price: 3000, name: 'Boogy Boyz star cap Orange'}]
])

app.post('/create-checkout-session', async  (req, res) => {
    try{
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.items.map(item => {
          const storeItem = cart.get(item.id)
          return {
            price_data:{
              currency: 'usd',
              product_data: {
                name: storeItem.name
              },
              unit_amount: storeItem.price
            },
            quantity: item.quantity
          }
        }),
        success_url: `${process.env.SERVER_URL}/index.html`,
        cancel_url: `${process.env.SERVER_URL}/cart.html`
      })
      res.json( { url: session.url });
    }

    catch(e){
        res.status(500).json({ error: e.message })
    }
    
})
app.listen(4500)