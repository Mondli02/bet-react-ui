const user = require('./user');
const tournament = require('./tournament');
const auth = require('./auth');

module.exports=(router) =>{
    user(router)
    tournament(router)
	auth(router)
}