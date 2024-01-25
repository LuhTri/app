const { DuLich } = require('../models')

module.exports = {
    // [GET] /api/dulich
    get: async (req, res) => {
        try {
            const data = await DuLich.findAll()
            return res.json(data)
        } catch (err) {
            return res.status(500).json({
                status: err.status,
                msg: err.msg
            })
        }
    },

    // [GET] /api/dulich/:id
    getById: async (req, res) => {
        try {
            const params = req.params
            console.log(params)
            const data = await DuLich.findOne({
                where: { id: params.id }
            })
            return res.json(data)
        } catch(err) {
            return res.json(err)
        }
    }
}