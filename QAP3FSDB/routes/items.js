const express = require('express');
const router = express.Router();
module.exports=router;
const db = require('../database/Database'); // Assuming this file handles database connection

// Display all items
router.get('/', async (req, res) => {
    try {
        const items = await db.query('SELECT * FROM items');
        res.render('index', { items: items.rows });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Form to add a new item
router.get('/new', (req, res) => {
    res.render('new'); // Display a form to add a new item
});

// Add a new item
router.post('/', async (req, res) => {
    try {
        const { name, quantity } = req.body;
        await db.query('INSERT INTO items (name, quantity) VALUES ($1, $2)', [name, quantity]);
        res.redirect('/');
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Form to edit an existing item
router.get('/:id/edit', async (req, res) => {
    try {
        const { id } = req.params;
        const item = await db.query('SELECT * FROM items WHERE id = $1', [id]);
        res.render('edit', { item: item.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Update an existing item
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, quantity} = req.body;
        await db.query('UPDATE items SET id=$1, name = $2 WHERE quantity = $3', [id, name, quantity]);
        res.redirect('/');
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Delete an item
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM items WHERE id = $1', [id]);
        res.redirect('/');
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;