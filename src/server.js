const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static( path.join(__dirname, '..', 'dist', 'user-detection-webclient') ))
app.use('*', function(req, res) {
  let indexPath = path.join(__dirname, '..', 'dist', 'user-detection-webclient', 'index.html')
  res.sendFile(indexPath)
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`)
})
