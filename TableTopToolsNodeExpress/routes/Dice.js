"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.render('DiceRoller.html', { title: 'Dice' });
});
exports.default = router;
//# sourceMappingURL=Dice.js.map