const express=require('express')
const app=express()
const cors = require('cors');
const taskManger=require('./services/taskManagerList')

app.use(cors());
app.use('/api/taskManagerList', taskManger)

app.listen(8000,()=>console.log('server running'))


