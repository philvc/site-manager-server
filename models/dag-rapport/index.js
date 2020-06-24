const mongoose = require('mongoose');

const Schema = mongoose.Schema

const dagRapportSchema = new Schema({
    fieldA: { type: String, default: '' },
    fieldB: { type: String, default: '' },
    fieldC: { type: String, default: '' },
    fieldD: { type: String, default: '' },
    date: String,
}, {
    timestamps: true
})

module.exports.DagRapport = mongoose.model('dagRapports', dagRapportSchema)

