const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3334;

const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + '/static'));

app.post('/ping', urlEncodedParser, (req, res) => {
    if(!req.body) {
        return res.sendStatus(404);
    }

    console.log('reques body', req.body);

    req.body.userLogin && res.send(`Логин бойца: ${req.body.userLogin}`);
});

app.listen(port, () => {
    console.log(`Express server listen on port:${port}`);
});
