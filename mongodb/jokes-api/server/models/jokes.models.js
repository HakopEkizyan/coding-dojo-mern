const mongoose = require('mongoose');

// const JokeSchema = new mongoose.Schema({
//     setup: { 
//         type: String 
//     },
//     punchline: { 
//         type: String 
//     }
// }, { timestamps: true });

const JokeSchema = new mongoose.Schema({
    setup:String,
    punchline:String
}, { timestamps: true });

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;