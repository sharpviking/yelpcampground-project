const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const Campground = require('./models/campground')


mongoose.connect("mongodb+srv://sharpviking:l9a53607@cluster0.0maezhz.mongodb.net/test")
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.error('could not connect to MongoDB...'));

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
    res.render('home')
})


app.get('/makecampground', async (req, res) => {
    const camp = new Campground({ title: 'My Backyard', description: 'cheap camping!' });
    await camp.save();
    res.send(camp);
})

app.listen(3000, () => {
    console.log('serving on Port 3000')
})