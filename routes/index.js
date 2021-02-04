const express = require('express');
const router = express.Router();

const salesController = require('../controllers').sales;

router.get('/', (request, response) => {
    response.json({ info: 'server is up and running' });
})

router.post('/api/sales', salesController.list);
router.post('/api/addSale', salesController.add);

module.exports = router;