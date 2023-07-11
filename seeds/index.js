const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground')


mongoose.connect("mongodb+srv://sharpviking:l9a53607@cluster0.0maezhz.mongodb.net/test")
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.error('could not connect to MongoDB...'));


const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`

        })

        await camp.save();
    }

}

seedDB().then(() => {
    mongoose.connection.close();
})