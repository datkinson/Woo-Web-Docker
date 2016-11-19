const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello Woo Web'))
app.listen(80, () => console.log('App listening on port 80'))
