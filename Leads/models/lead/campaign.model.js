const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campaignSchema = new Schema ({
    campaignName:{type:String, required:true},
    campaignState:{type:String, required:false},
    campaignDescription:{type:String, required:true}
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;


