const performance = require('perf_hooks').performance;
const express = require('express');

const app = express();

const PORT = 3000;

app.get('/ping', (req,res) => {
    res.status(200).send("Ping");
});

app.get('/proxy', (req,res) => {
    result = () => res.status(200).send('Proxy');
    setTimeout(result, 5000);
});

app.get('/intensive', (req,res) => {
    variable = 0;
    timeout = performance.now() + 5000;
    while (performance.now() < timeout){
        variable += 1;
    }
    res.status(200).send('Intensive');
})

app.listen(PORT, () => {
    console.log("Listening at port: ", PORT);
});