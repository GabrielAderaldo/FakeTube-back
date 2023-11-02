import express from 'express'
import DbClient from './db/dbClient'
import TypeOfConnections from './db/dbEnum'
import Cell from './cells/cells'
import AuthController from './Controller/authController'
require('dotenv').config()

const port = process.env.PORT || 3000
const cell = process.env.WITH_CELL_CONNECTED

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const authController = new AuthController()
//const clientCell = new Cell(cell ?? '')
//clientCell.choseCellToUse()
const client = new DbClient({typeOfConnection:TypeOfConnections.URL}
    ,{database:'',host:'',password:'',port:0,user:''}
    ,{url:process.env.WITH_URL_DB_IS_CONNECTED!})

app.post('/register',authController.register.bind(authController))

app.listen(port,function(){
    console.log('Iniciando o servidor na porta '+port)
    client.connect()

})