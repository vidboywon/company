const express = require("express")

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('HW')
})

app.listen(PORT, () => {
  console.log("is running")
})