const mongoose = require('mongoose');

const password = 'odiseo';
const dbname = 'skills';
const uri = `mongodb+srv://odiseo:${password}@cluster0.ov1hj.mongodb.net/${dbname}?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(uri);
}