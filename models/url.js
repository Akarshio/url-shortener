const mongoose = require('mongoose');
const shortid = require('shortid');


 const urlSchema = mongoose.Schema({
         shortId: {
                type: String,
                default: shortid.generate

         },
         originalurl: {
                type: String,
                required: true


         },

         visitorcount:[{
              
         }]
})

const shortenUrl = mongoose.model('url', urlSchema);

module.exports = shortenUrl;