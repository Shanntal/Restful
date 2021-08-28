const { STRING, TEXT, DECIMAL, INTEGER, ENUM, UUID, UUIDV4, BOOLEAN} = require('sequelize');
const db = require('../db')

const Entry = db.define('entry', {
    id: {
        type: UUID,
        primaryKey: true,
        required: true,
        allowNull: false,
        unqiue: true,
        defaultValue: UUIDV4
    },
    content: TEXT
})

module.exports = Entry;