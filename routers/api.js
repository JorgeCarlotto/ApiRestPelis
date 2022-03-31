const router = require('express').Router();

const middleware = require('./middleware')

const apiPelisRouter = require('./api/pelis');

const apiUsersRouter = require('./api/users');

router.use('/pelis', middleware.checkToken, apiPelisRouter);
router.use('/users',apiUsersRouter);

module.exports = router;