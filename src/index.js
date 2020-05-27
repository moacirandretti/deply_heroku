const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (request, response) => {
    return response.json({
        Status: "Servidor Online!"
    })
})



app.listen(process.env.PORT || 3335, () =>
    "Servidor Node Funcionando perfeitamente!"
)