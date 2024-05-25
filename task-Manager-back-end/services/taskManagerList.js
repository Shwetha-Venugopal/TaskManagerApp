const express=require('express')
const {getAllTaskManagerList,updateTaskManager,deleteTaskManager}=require('../controller/taskManagerList')
const router=express.Router()


router.get('/',getAllTaskManagerList)

router.put('/:id',updateTaskManager )

router.delete('/:id',deleteTaskManager)

module.exports=router