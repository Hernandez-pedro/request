const express = require ('express')

const app = express()

//http://localhost:3000/hernandez/123
app.get('/', (req, response) =>{
    response.json({msg: 'hello GET'})
})

app.get('/:user/:password', (req, response) =>{
    const {user, password} = req.params
    if (user == 'hernandez' && password =='123'){
        response.json({msg: 'Inicio de sesion exitoso'})
        return
    }
    response.json({msg: 'fallo en el usuario o contraseña'})
})

//http://localhost:3000/login?user=hernandez&password=123
app.get('/login', (req, response) =>{
    const {user, password} = req.query
    if (!user || !password){
        response.status(400).json({msg: 'you need to provide <user> and <password> parametros'})
    }


    if (user == 'tonatiuh' && password =='123'){
        response.json({msg: 'Sign in succesfully'})
        return
    }
    response.status({msg: 'wrong user or password'})
})

app.post('/', (req, response) =>{
    response.json({msg: 'hello POST'})
})
app.put('/', (req, response) =>{
    response.json({msg:'Hola PUT'})
})
app.patch('/', (req, response) =>{
    response.json({msg:'Hola PATCH'})
})
app.delete('/', (req, response) =>{
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