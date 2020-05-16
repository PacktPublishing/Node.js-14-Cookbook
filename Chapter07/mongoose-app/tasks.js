const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/customers'


mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Customer = mongoose.model('Customer', {
    forename: String,
    surname: String
})

const customer_1 = new Customer({
    forename: 'Beth',
    surname: 'Griggs'
})

customer_1.save().then((doc) => {
    console.log('Added new customer', doc.forename, doc.surname)
})