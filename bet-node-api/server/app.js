const express  = require("express");
const mongoose  = require('mongoose');
const cors  = require('cors');
const bodyParser  = require('body-parser');

const routes = require('./routes/');

const app = express();
const router = express.Router();

router.use(bodyParser.urlencoded({extended:false})) // handle JSon returned.
router.use(bodyParser.json()); //handle json returned
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/betTestDB"

try{
    mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}catch(error){
    console.log(error)
}

let port = 5000 || process.env.PORT

routes(router)

//allow cross domain access
const corsOption = {
	origin: 'http://localhost:3001',
	credentials:true
}
app.use(cors(corsOption))
app.use(bodyParser.json())

app.use('/api',router) // declare routes by prefix 'api'

/**Start server */
app.set('port', (process.env.PORT || 5000));

app.listen(port,() => {
    console.log(`Server started as port: ${port}`)
});