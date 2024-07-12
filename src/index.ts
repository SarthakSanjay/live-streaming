import express from 'express'
import http from 'http'
import path from 'path'

const app = express()
const server = http.createServer(app)

app.use(express.static(path.resolve('./src/public')))


server.listen(3210 , ()=>{
    console.log('server is running on port 3000');
})