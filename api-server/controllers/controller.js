'use strict';

var model = require('../models/models');

exports.list_all_phones = function (request, response) {
    var phonesResponse = new Object();
    phonesResponse.phones = model.phoneList;
    response.json(phonesResponse);
};