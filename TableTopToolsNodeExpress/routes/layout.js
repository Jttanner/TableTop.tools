"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.render('layout.html', { title: 'layout' });
});
exports.default = router;
//# sourceMappingURL=layout.js.map