const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency; 
// this is a new type that we have declared 
// this new currency type is added into Mongoose and that will add in a new type called currency 
// So we can make use of this in defining the schema in our application 



const commentSchema = new Schema({
    rating: {
        type: Number, 
        min: 1, 
        max: 5, 
        required: true,
    },
    comment: {
        type: String, 
        required: true, 
    },
    author: {
        type: String, 
        required: true, 

    }
    },{
        timestamps: true
    
});

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true, 
    },
    category: {
        type: String, 
        required: true, 
    },
    label: {
        type: String, 
        default: '', 
    },
    price: {
        type: Currency, 
        required: true, 
        min: 0, 
    }, 
    featured: {
        type: Boolean, 
        default: false
    },
    comments: [ commentSchema ] // array of commentSchema - comment document becomes a subdocument of dish
    // usage of subdocument of mongoose
},{
    timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;