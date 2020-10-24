const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const { Mongoose } = require('mongoose');
const leadsRouter = require('./routes/leads');
const campaignRouter = require('./routes/campaignRoute');
const dispoRouter = require('./routes/dispositionRoutes');
require('dotenv').config();

const Port = process.env.PORT;
const Uri = process.env.MONGODB;
const app = express();
app.use(cors());
app.use(bodyParser.json());

 mongoose.connect(Uri,  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
    });
//leads route
app.use('/', leadsRouter);
//campaign route
app.use('/campaigns/', campaignRouter);
//disposition route
app.use('/dispositions', dispoRouter);

app.listen(Port, ()=>{
    console.log(`Server is running on port: ${Port}`);
});