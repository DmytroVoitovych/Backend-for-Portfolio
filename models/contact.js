
const { Schema, model } = require('mongoose');

const messageSchema = new Schema(  { // схема данных которые может принимать база / строго типизирована
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    
    jober: {
      type: String,
      required: [true, 'Set name for contact'],
  },
    message: { 
      type: String,
          }
},{versionKey:false, timestamps:true});


const Info = model('message', messageSchema);

module.exports = {
  Info
};