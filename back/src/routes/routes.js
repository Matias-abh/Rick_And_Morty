const { Router } = require('express');
const { getFavs, postFav, deleteFav } = require('../controllers/controllersFavs.js');
const { getCharDetail } = require('../controllers/getCharDetail.js');
const { getCharById } = require('../controllers/getCharById');
const { getAllCharacters }  = require('../controllers/getAllCharacters.js');
const mainRouter = Router();

mainRouter.get('/character/:id', getCharById);
mainRouter.get('/detail/:detailId', getCharDetail);
mainRouter.get('/fav', getFavs);
mainRouter.post('/fav', postFav);
mainRouter.delete('/fav/:id', deleteFav);

mainRouter.get('/character', getAllCharacters)

module.exports = mainRouter;