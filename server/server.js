const path = require('path'); 
const express = require('express');

const app = express();
app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(4002, () => console.log(`port 4002 is working?`));