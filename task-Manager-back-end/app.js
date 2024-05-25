const express=require('express')
const taskModel=require('./Model/dbSchema')
const app=express()
const cors = require('cors');
const taskManger=require('./services/taskManagerList')
app.use(express.json());
app.use(cors());
app.use('/api/taskManagerList', taskManger)

app.listen(8000,()=>console.log('server running'))


