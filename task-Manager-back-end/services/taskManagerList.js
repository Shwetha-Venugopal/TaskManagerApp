const express=require('express')
const {getAllTaskManagerList,updateTaskManager,deleteTaskManager, postTaskManager}=require('../controller/taskManagerList')
const router=express.Router()


router.get('/',getAllTaskManagerList)
router.post('/',postTaskManager )

router.put('/:id',updateTaskManager )

router.delete('/:id',deleteTaskManager)

module.exports=router