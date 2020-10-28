_ = require('lodash')

module.exports.run = async (event) =>
    event.reduce((r, c) => _.merge(r, c), {})