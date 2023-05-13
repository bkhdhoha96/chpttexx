const express = require('express');
const moment = require('moment');
const app = express();
app.set('view engine', 'ejs')
const port =3000

// Custom middleware to verify the time of the request
app.use((req, res, next) => {
  const now = moment();
  const dayOfWeek = now.format('dddd');
  const hour = now.hour();
  if (dayOfWeek !== 'Saturday' && dayOfWeek !== 'Sunday' && hour >= 9 && hour < 17) {
    next();
  } else {
    res.status(403).send('Sorry, the website is only available during working hours (Monday to Friday, from 9 to 17).');
  }
});

// Route handlers for the three pages
app.get('/', (req, res) => {
  res.send(`home`);
});

app.get('/services', (req, res) => {
  res.send(`services`);
});

app.get('/contact', (req, res) => {
  res.send(`contact`);
});

// Serve static files (including CSS)
app.use(express.static('public'));

// Start the server

app.get('/',(req,res) => {
    res.send('Hello !')
})

app.listen(port,() =>{
    console.log('example app listening on port $ {port}')
})