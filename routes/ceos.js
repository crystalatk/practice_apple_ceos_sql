'use strict';

const { getBySlug } = require('../models/ceoModel');

const express = require('express'),
    router = express.Router(), 
    ceoModel = require('../models/ceoModel');


router.get('/', async (req, res) => {
    const ceosData = await ceoModel.getAll();

    res.render('template', {
        locals: {
            title: "Apple CEO List",
            data: ceosData,
        },
        partials: {
            body: "partials/ceo-list",
        }
    });
});

router.get('/:slug', async (req, res) =>{
    const { slug } = req.params;
    const executive = await ceoModel.getBySlug(slug);
    if (executive) {
        res.render('template', {
            locals: {
                title: `CEO: ${executive.name}`,
                executive,
            },
            partials: {
                body: "partials/ceo-details",
            }
        });
    } else {
        res.status(404).send(`No CEO found that matches slug, ${slug}`);
    }
});

module.exports = router;