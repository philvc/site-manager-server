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
        console.log('get dagRapport by date', input.date)
        const rapport = await DagRapport.find({ date: input.date })
        console.log('rapport', rapport)
        return rapport
    },
    createDagRapport: async (__, { input }) => {
        const date = format(new Date(), 'MMM-dd-yyyy')
        const newDagRapport = DagRapport.create({
            fieldA: input.fieldA,
            fieldB: input.fieldB,
            fieldC: input.fieldC,
            fieldD: input.fieldD,
            date
        })

        return newDagRapport
    },
    updateDagRapport: async (__, { input }) => {
        console.log('updateDag resolver')
        const { id, field, data } = input;
        const updatedDagRapport = await DagRapport.findByIdAndUpdate(id, { [field]: data }, { new: true })
        console.log('updatedDagRapport', updatedDagRapport)
        return updatedDagRapport
    }
}

module.exports = dagRapportResolvers