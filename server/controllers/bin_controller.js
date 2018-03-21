let bins = {
  'A': 'Shelf A',
  'B': 'Shelf B',
  'C': 'Shelf C',
  'D': 'Shelf D'
};

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