"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const Router_1 = __importDefault(require("./Routes/Router"));
const Api_Router_1 = __importDefault(require("./Routes/Api_Router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static('Public'));
app.use((0, morgan_1.default)('tiny'));
app.use('/', Router_1.default);
app.use('/api', Api_Router_1.default);
const PORT = 3001;
app.listen(PORT, () => console.log(`Listen on port: ${PORT}`));
