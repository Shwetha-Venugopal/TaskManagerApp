const tasks = [
    {
        id: 1,
        title: "Complete project report",
        description: "Finish the final report for the project and submit it to the manager.",
        status: "in-progress",
        priority: "high",
        dueDate: "2024-05-30",
        createdAt: "2024-05-24T08:30:00Z",
        updatedAt: "2024-05-24T12:00:00Z",
        assignedTo: "John Doe",
        tags: ["work", "report"]
    },
    {
        id: 2,
        title: "Buy groceries",
        description: "Purchase milk, eggs, bread, and fruits from the store.",
        status: "pending",
        priority: "medium",
        dueDate: "2024-05-25",
        createdAt: "2024-05-24T09:00:00Z",
        updatedAt: "2024-05-24T09:00:00Z",
        assignedTo: "Jane Smith",
        tags: ["personal", "shopping"]
    }
];


const getAllTaskManagerList=(req,res,next)=>{
    if(req.url!=='/'){
        const err=new Error('Not Found')
        err.status=404
        return res.send('Not Found')

    }
     res.status(200).json(tasks)
}

const updateTaskManager=(req,res,next)=>{
    let filteredTask=tasks.find((task)=>task.id===parseInt(req.params.id))
    if(!filteredTask){
        const err=new Error('No Task found in this Id')
        err.status=404
        return res.send('Not Found') 
    }
    const { title, description, status, priority, dueDate, assignedTo, tags } = req.body;
    if (title !== undefined) filteredTask.title = title;
    if (description !== undefined) filteredTask.description = description;
    if (status !== undefined) filteredTask.status = status;
    if (priority !== undefined) filteredTask.priority = priority;
    if (dueDate !== undefined) filteredTask.dueDate = dueDate;
    if (assignedTo !== undefined) filteredTask.assignedTo = assignedTo;
    if (tags !== undefined) filteredTask.tags = tags;
    filteredTask.updatedAt = new Date().toISOString();
    res.status(200).send(filteredTask)
}


const deleteTaskManager=(req,res,next)=>{
    const filteredTask=tasks.find((task)=>task.id===parseInt(req.params.id))
    if(!filteredTask){
        const err=new Error('No Task found in this Id')
        err.status=404
        return res.send('Not Found') 
    }
    let filTask=tasks.filter((task)=>task.id!==parseInt(req.params.id))
    res.status(200).send(filTask)
}


module.exports={
    deleteTaskManager,
    updateTaskManager,
    getAllTaskManagerList
}