const error=(err,req,res,next)=>{
    console.log(`${req.method}`)
    next()
}

module.exports=error