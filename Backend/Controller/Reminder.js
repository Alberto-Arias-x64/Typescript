"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Add = exports.Read = void 0;
const Data_Base_1 = require("../Data/Data_Base");
const Read = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Data = yield Data_Base_1.Reminder.findAll();
    return (res.json(Data));
});
exports.Read = Read;
const Add = (req, res) => {
    const Data = req.body;
    if (Data.name === '')
        return (res.status(400).json({ error: 'empty string' }));
    Data_Base_1.Reminder.create({
        name: Data.name,
        date: Data.date,
        time: Data.time,
    })
        .then(() => Read(req, res))
        .catch((error) => {
        return (res.status(400).json({ error: error.errors[0].message }));
    });
};
exports.Add = Add;
const Delete = (req, res) => {
    const Data = req.body;
    Data_Base_1.Reminder.destroy({
        where: {
            id: Data.id
        }
    })
        .then(() => Read(req, res))
        .catch(() => {
        return (res.status(400).json({ error: 'id no found' }));
    });
};
exports.Delete = Delete;
