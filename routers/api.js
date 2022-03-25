const router = require('express').Router();

const apiPelisRouter = require('./api/pelis');

router.use('/pelis',apiPelisRouter);

module.exports = router;