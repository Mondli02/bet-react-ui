const userController = require('../controllers/UserController');
const JwtAuthMiddleware = require('../middlewares/JwtAuthMiddleware')
module.exports=(router) =>{
    /**
     * get user
     */
    router
        .route('/user/:id')
        .get(JwtAuthMiddleware,userController.getUser)
    

     /**
     * add user
     */
    router
    .route('/user')
    .post(userController.addUser)

     /**
     * get all users
     */
    router
        .route('/users/')
        .get(JwtAuthMiddleware,userController.getAllUsers)
        
        
}

