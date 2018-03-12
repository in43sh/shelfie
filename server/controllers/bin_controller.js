let bins = ['Shelf A', 'Shelf B', 'Shelf C', 'Shelf D'];

module.exports = {
  create (req, res) {
    
  },

  getAll (req, res) {
    res.status(200).send(bins);
  },

  getOne (req, res) {

  },

  delete (req, res) {

  }
}