const mongoose = require('mongoose');

const Schema = mongoose.Schema

const dagRapportSchema = new Schema({
    fieldA: String,
    fieldB: String,
    fieldC: String,
    fieldD: String,
    date: String,
}, {
    timestamps: true
})

module.exports.DagRapport = mongoose.model('dagRapports', dagRapportSchema)

