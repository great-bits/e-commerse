import express from "express"

const app = express()

app.get("/", (req, res)=>{
    res.send("hi")
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log(`server is run port ${PORT}`))