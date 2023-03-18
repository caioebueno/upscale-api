import * as express from 'express'
import * as cors from 'cors'
import { createServer } from 'http'
import { verifyExpressInformation } from 'upscale-api'

const app = express()
const PORT = 8888

app.use(express.json())
app.use(cors({
  origin: true,
  credentials: true
}))

app.use(verifyExpressInformation)

app.get('/query/:id', (req, res) => {
  res.send('Response')
})

const server = createServer(app)

server.listen(PORT, () => {
  console.log('Server started')
})
