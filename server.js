require('dotenv').config()
const express = require('express')

const app = express();
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static("public"))
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);


const cart = new Map([
  [1, { price: 20, name: 'tory'}],
  [2, { price: 50, name: 'rex'}]
])

app.post('/create-checkout-session', async  (req, res) => {
    try{
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.cart.map(item => {
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
        success_url: `${process.env.SERVER_URL}/success.html`,
        cancel_url: `${process.env.SERVER_URL}/cancel.html`
      })
      res.json( { url: session.url });
    }

    catch(e){
        res.status(500).json({ error: e.message })
    }
    
})
app.listen(4000)