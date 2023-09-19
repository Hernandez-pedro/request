const express = require ('express')
const app = express()

// http://localhost:3000/hernandez
app.get('/:user/:password', (req, res) =>{
    const {user, password} = req.params
    if (user == 'hernandez' && password == '123'){
        res.json({msg:'inicio seccion exitoso'})
        return
    }
    res. json({msg:'fallo contraseña invalida'})
})

app.put('/', (request, response) =>{
    response.json({msg:'Hola PUT'})
})
app.patch('/', (request, response) =>{
    response.json({msg:'Hola PATCH'})
})
app.delete('/', (request, response) =>{
    response.json({msg:'Hola DELETE'})
})

/**
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listening on port 3000')
})