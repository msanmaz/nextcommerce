import products from '../../../products'

export default (req, res) => {
    const { query: { id } } = req
    const product = products.find((p) => p._id === id)
    res.json(product)
  }