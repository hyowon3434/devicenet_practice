const express = require('express')
const dbConnect = require('./config/dbConnect')
const app = express();

app.set('view engine', 'ejs')
app.set('view', './views')

dbConnect()

app.get('/', (req, res)=> {
    res.send('Hello, Node!~')
}) 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/contacts', require('./routes/contactRoutes'))

app.listen(3000, () => {
    console.log('Server is Running')
})