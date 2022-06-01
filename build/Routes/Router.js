"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Modem = (0, express_1.Router)();
Modem.route('/')
    .get((_req, res) => res.redirect('./index.html'));
exports.default = Modem;
