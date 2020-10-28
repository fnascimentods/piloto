const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const produtoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

produtoSchema.plugin(mongoosePaginate)

mongoose.model('produto', produtoSchema)