"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Rules_1 = require("../Controller/Rules");
const Alarms_1 = require("../Controller/Alarms");
const Daily_1 = require("../Controller/Daily");
const Reminder_1 = require("../Controller/Reminder");
const Todo_1 = require("../Controller/Todo");
const Modem = (0, express_1.Router)();
Modem.route('/')
    .get((_req, res) => res.send(`I'm ready papus`));
Modem.route('/rules')
    .get(Rules_1.Read)
    .post(Rules_1.Add)
    .delete(Rules_1.Delete);
Modem.route('/alarms')
    .get(Alarms_1.Read)
    .post(Alarms_1.Add)
    .delete(Alarms_1.Delete);
Modem.route('/daily')
    .get(Daily_1.Read)
    .post(Daily_1.Add)
    .delete(Daily_1.Delete);
Modem.route('/reminder')
    .get(Reminder_1.Read)
    .post(Reminder_1.Add)
    .delete(Reminder_1.Delete);
Modem.route('/todo')
    .get(Todo_1.Read)
    .post(Todo_1.Add)
    .delete(Todo_1.Delete);
exports.default = Modem;
