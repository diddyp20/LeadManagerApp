const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dispositionSchema = new Schema ({
    dispositionName:{type:String, required:true},
    dispositionDescription:{type:String, required:true}
});

const Disposition = mongoose.model('Disposition', dispositionSchema);

module.exports = Disposition;