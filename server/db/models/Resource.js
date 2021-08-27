const { STRING, TEXT, DECIMAL, INTEGER, ENUM, UUID, UUIDV4, BOOLEAN } = require('sequelize');
const db = require('../db')

const Resource = db.define('resource', {
    id: {
        type: UUID,
        primaryKey: true,
        required: true,
        allowNull: false,
        unique: true,
        defaultValue: UUIDV4
    },
    title: {
        type: STRING,
        allowNull: true,
        required: false
    },
    type: {
        type: ENUM("quote", "poem", "book"),
        allowNumm: false,
        required: true,
        unique: false,
        validate: { notEmpty: true }
    },
    category: {
        type: ENUM("love", "stress & anxiety", "family", "mourning", "friendship", "art", "life", "pets", "history", "traveling", "independence", "mental health", "relationships", "affirmation", "body positivity", "self-love", "personal growth", "gratitude", "happiness", "career", "success", "wealth", "health"),
        allowNull: false,
        required: true,
        unique: false,
        validate: { notEmpty: true }
    },
    imageUrl: STRING,
    content: TEXT,
    author: STRING
})

module.exports = Resource;