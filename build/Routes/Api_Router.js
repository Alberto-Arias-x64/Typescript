"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Modem = (0, express_1.Router)();
Modem.route('/')
    .get((_req, res) => res.send("I'm ready papus"));
exports.default = Modem;
