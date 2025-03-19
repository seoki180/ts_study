// import * as www from "./www"
import {app,hello} from "./www"
import People from "./class"

const p1 = new People()
app.get("/",(req,res)=>{
    res.send("hello")
    hello()
})

app.listen(3000)