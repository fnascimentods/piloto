const mongoose = require('mongoose')

const Product = mongoose.model('product') 

module.exports = {
    async index(require, response) {
        // Foi feita a desestruturação e page = 1 por default caso a query venha vazia
        const { page = 1 } = require.query
        // O primeiro objeto {} recebe as condições (where)
        const products = await Product.paginate({}, {page: page, limit: 10})

        return response.json(products)
    },

    async show(require, response) {
        const product = await Product.findById(require.params.id)

        return response.json(product)
    },

    async store(require, response) {
        const product = await Product.create(require.body)

        return response.json(product)
    },

    async update(require, response) {
        // se eu não passar o objeto {new: true} a função vai retornar o objeto antes de atualizar
        const product = await Product.findByIdAndUpdate(require.params.id, require.body, { new: true })

        return response.json(product)
    },

    async destroy(require, response) {
        const product = await Product.findByIdAndRemove(require.params.id)

        return response.send()
    }
}