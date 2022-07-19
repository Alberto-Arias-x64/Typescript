"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.Alarms = exports.Reminder = exports.Rules = exports.Tasks = exports.Daily_Routine = void 0;
const sequelize_1 = require("sequelize");
const path_1 = __importDefault(require("path"));
const sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: path_1.default.join(__dirname, '/Data_Base.sqlite'),
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
exports.sequelize = sequelize;
const Daily_Routine = sequelize.define('Daily_Routine', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    time_init: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true
    },
    time_end: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true
    }
}, {
    timestamps: false,
    createdAt: false
});
exports.Daily_Routine = Daily_Routine;
const Tasks = sequelize.define('Task', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: true
});
exports.Tasks = Tasks;
const Reminder = sequelize.define('Reminder', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false
    }
}, {
    timestamps: false,
    createdAt: false
});
exports.Reminder = Reminder;
const Alarms = sequelize.define('Alarms', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    time: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
});
exports.Alarms = Alarms;
const Rules = sequelize.define('Rules', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    createdAt: true,
});
exports.Rules = Rules;
