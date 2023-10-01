require('dotenv').config()

const express = require('express');
const app = express();

app.use(express.json())
app.use(express.static("public"))
const stripe = require('stripe')(process.env.ddjjjf)

const items = new Map([]);

app.listen(4000)