"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/toolkit', function (req, res) {
    res.render('toolkit.html', { title: 'toolkit' });
});
exports.default = router;
//# sourceMappingURL=toolkit.js.map