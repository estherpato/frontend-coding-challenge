'use strict';

module.exports = function (app) {
    var phoneList = require('../controllers/controller');

    app.route('/phones')
        .get(phoneList.list_all_phones);
};