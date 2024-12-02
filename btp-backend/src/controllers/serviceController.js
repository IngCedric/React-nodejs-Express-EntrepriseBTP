const services = require('../data/service.json');

exports.getAllService = (req, res) => {
    res.json(services)
}