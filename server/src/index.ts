import express from 'express'
import cors from 'cors'
import loadRoutes from './Router.js';
const app = express()
const port = 3000

app.use(express.json());
app.use(cors())

loadRoutes(app);

app.listen(port, () => {
  console.log(`Flourite server listening on port ${port}`)
})
