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

const Tasks = sequelize.define('Task', {
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
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
export { Tasks }