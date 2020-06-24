// modules
const { format } = require('date-fns')

// model
const { DagRapport } = require('../../models/dag-rapport')

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
    }
}

module.exports = dagRapportResolvers