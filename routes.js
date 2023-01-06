const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const operations = require('./db/operations');

router.get('/vendor', async (req, res) => {
    const latitude = Number(req.query.lat);
    const longitude = Number(req.query.long);
    const nearestvendor = await operations.fetchNearestvendor([longitude, latitude], 1000);

    res.json({
        police : nearestvendor
    });

});

router.get('/customer.html', (req, res) => {
    res.render('customer.html', {
        userId: req.query.userId
    });
});

router.get('/vendor.html', (req, res) => {
    res.render('vendor.html', {
        userId: req.query.userId
    });
});

router.get('/vendor/info', async (req, res) => {
    const userId = req.query.userId // extract userId from query params
    const copDetails = await Operations.fetchvendorDetails(userId);

    res.json({
        vendorDetails: vendorDetails
    });
});
module.exports = router;
