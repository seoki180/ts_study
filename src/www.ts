import express from "express"

const app = express()
function hello(){
    console.log("hello")
}


// export default app
export {app,hello}