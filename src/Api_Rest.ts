import express from 'express'
const app = express()

app.use(express.json())

const PORT:number = 3001

app.get('/api',(_req,res) => res.send("I'm ready papus"))

app.listen(PORT, () =>{
    console.log(`Listen on port: ${PORT}`)
})