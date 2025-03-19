import express from "express"


const app = express()

const body ={
    id : 12,
    user : "seokki"
}


app.get("/",(req,res)=>{
    res.send(body)
    console.log(req.headers)
})

app.listen(3000,()=>{
    console.log("hello wolrd")
})


