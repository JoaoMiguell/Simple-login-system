const server = require('express')
const cadastrar = require('./scripts/cadastrar')
const login = require('./scripts/logarNaConta')

const route = server.Router()

route.get('/', (req, res) => res.render('criarConta-main', {page: 'CriarConta'}))
route.get('/login', (req, res) => res.render('login-main', {page: 'login'}))

route.post('/perfil', cadastrar.criar)
route.post('/login', login.logar)

module.exports = route