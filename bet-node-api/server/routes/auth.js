const authController = require('../controllers/AuthController');

module.exports=(router) =>{
     /**
     * login attemp
     */
    router
    .route('/auth/login')
    .post(authController.loginAttempt)

    /**
     * check token
     */
    router
    .route('/auth/user')
    .get(authController.CheckToken)
}

