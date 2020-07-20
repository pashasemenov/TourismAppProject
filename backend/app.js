const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
app.use(express.json());
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api', require('./routes/country.routes'));

const PORT = config.get('port') || 3000;

async function start() {
    try {
        mongoose.Promise = global.Promise;
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        app.listen(3000, () => {
            console.log(`App has been started on PORT: ${PORT}`);
        });

    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}

start();

