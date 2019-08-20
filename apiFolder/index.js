const express = require('express');
const router = express.Router();
const cors = require('cors')
const weapons = require('./weaponsFolder')

router.use(express.json());
router.use(cors());

router.use('/weapons', weapons);

router.all('/', function(request, response){
    response.json({
        "weapons": `http://localhost:${process.env.PORT}`
    })
})

module.exports = router;