// backend/server.js
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello from Node API!' })
})

const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})
