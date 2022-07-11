import { Sequelize, DataTypes } from 'sequelize'
import path from 'path'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '/Data_Base.sqlite'),
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const Daily_Routine = sequelize.define('Daily_Routine', { //Ready
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time_init: {
        type: DataTypes.TIME,
        allowNull: true
    },
    time_end:{
        type: DataTypes.TIME,
        allowNull: true
    }
}, {
    timestamps: false,
    createdAt: false
})
const Tasks = sequelize.define('Task', { //Ready
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: true
})
const Reminder = sequelize.define('Reminder', { //Ready
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time:{
        type:DataTypes.TIME,
        allowNull: false
    }
}, {
    timestamps: false,
    createdAt: false
})
const Alarms = sequelize.define('Alarms', { //Ready
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey: true
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
})
const Rules = sequelize.define('Rules', { //Ready
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    createdAt: true,
})

export { Daily_Routine, Tasks, Rules , Reminder , Alarms , sequelize}