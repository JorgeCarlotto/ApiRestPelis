const router = require('express').Router();

const apiPelisRouter = require('./api/pelis');

const apiUsersRouter = require('./api/users');

router.use('/pelis',apiPelisRouter);
router.use('/users',apiUsersRouter);

module.exports = router;