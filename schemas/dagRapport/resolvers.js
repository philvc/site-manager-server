// modules
const { format } = require('date-fns')

// model
const { DagRapport } = require('../../models/dag-rapport')

// utils
const { createHtmlString, createPdf } = require('./utils')

const dagRapportResolvers = {
    getDagRapports: async () => {
        const dagRapports = await DagRapport.find();
        return dagRapports

    },
    getDagRapportByDate: async (__, { input }) => {
        const rapport = await DagRapport.find({ date: input.date })
        return rapport
    },
    createDagRapport: async (__, { input }) => {
        const { date } = input;
        const newDagRapport = DagRapport.create({
            date,
        })

        return newDagRapport
    },
    updateDagRapport: async (__, { input }) => {
        const { id, field, data } = input;
        const updatedDagRapport = await DagRapport.findByIdAndUpdate(id, { [field]: data }, { new: true })
        return updatedDagRapport
    },
    getDagRapportPdf: async (__, { input }, { req, res }) => {
        const { id } = input;
        const rapport = await DagRapport.findByIdAndUpdate(id)
        // create html string
        const html = createHtmlString(rapport)

        const pdf = await createPdf(html)

        const stringPdf = pdf.toString('base64')
        console.log('stringPdf', stringPdf)

        return stringPdf
    }
}

module.exports = dagRapportResolvers