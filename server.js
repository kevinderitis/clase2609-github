const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.get('/ruta', (req, res) => {
    res.send('Ruta creada. ')
})

app.get('/ruta2', (req, res) => {
    res.send('Ruta 2 creada. ')
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log('Server running'))