
import express from "express"

const app = express()

app.use(express.json())

app.get("/", (request, response)=>{
    response.json({ api: "Home Rental Cars"})
})

app.listen(3335, ()=>console.log("server running"))
