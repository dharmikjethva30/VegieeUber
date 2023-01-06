const http = require('http');
const express = require('express');
const consolidate = require('consolidate');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const db = 'mongodb://localhost:27017/uber';
const socket = require('./socket');


app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));

app.use(bodyParser.json(
    {
        limit: '5mb'
    }
));

app.set('views','views');
app.use(express.static('./public'));
app.set('view engine','html');
app.engine('html',consolidate.handlebars);

mongoose.connect(db,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log("connection successful");
}).catch((err) => {console.log(err)
    });

app.use('/',routes);

const server = http.createServer(app);
server.listen(8000,() => {
    socket.initialize(server);
    console.log("server started");
}
);

