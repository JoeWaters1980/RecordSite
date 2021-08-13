const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

app.use(cors());
app.use(express());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`)
})