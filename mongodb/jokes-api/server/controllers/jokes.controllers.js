const Joke = require('../models/jokes.models');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err })
        });
}

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then((oneJoke) => res.json(oneJoke))
        .catch((err) => {
            res.json({ messae: "Something went wrong", error: err })
        });
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => res.json(newJoke))
        .catch((err) => {
            res.json({ messae: "Something went wrong", error: err })
        });
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedJoke) => res.json(updatedJoke))        
        .catch((err) => {
            res.json({ messae: "Something went wrong", error: err })
        });
}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((deletedJoke) => res.json(deletedJoke))
        .catch((err) => {
            res.json({ messae: "Something went wrong", error: err })
        });
}