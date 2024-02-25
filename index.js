const express = require("express")
const path = require('path')
const ejs = require('ejs')
const app = new express()

app.set('view engine','ejs')

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})


app.listen(2000,()=>{
    console.log('App listening on port 2000')
})
