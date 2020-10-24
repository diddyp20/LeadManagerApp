const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const leadSchema = new Schema({
    firstName:{type:String, required:false},
    lastName:{type: String, required: false},
    Address:{type: String, required: false},
    City: {type: String, required: false},
    Zip: {type: String, required: false},
    Xencall: {type: String, required: false},
    Type: {type: String, requred: false},
    Phone:{ type: String, required:false}
});

const Leads = mongoose.model('Leads', leadSchema);

module.exports = Leads;