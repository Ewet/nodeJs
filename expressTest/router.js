const express = require('express');
let app = express();

app.use((req, res) => {
    res.send('ok')
})

app.listen(3000,() => {
    console.log('running...')
})