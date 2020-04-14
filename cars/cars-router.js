const express = require('express');
const knex = require('knex');

const knexfile = require('../knexfile');

const db = knex(knexfile.development);

const router = express.Router();

// POST request to create new car
router.post('/', (req, res) => {
    const newCar = req.body;
    db('cars').insert(newCar)
    .then(response => {
        db('cars').where({ VIN: newCar.VIN })
        .then(newEntry => {
            res.status(201).json(newEntry);
        })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new car.' })
    })
})

// GET request to read all cars
router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve cars.' })
    })
})

// GET request to read specific car
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('cars').where({ id }).first()
    .then(car => {
        res.json(car)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve car data.' })
    })
})

module.exports = router;