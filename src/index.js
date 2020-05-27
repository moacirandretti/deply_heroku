const express = require('express')

const app = express()
app.use(express.json())


app.get('/', (request, response) => {
    return response.json({
        Status: "Servidor Online!"
    })
})



app.listen(3335, () =>
    "Servidor Node Funcionando!"
)