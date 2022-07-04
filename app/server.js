import express from 'express'
const port = process.env.PORT || 3000;
import cors from 'cors'
const app = express();
const db = require("./models");

var corsOption ={
  origin:"http://localhost:8081"
};


app.use(cors(corsOption))

app.get(
    '/',(req, res) =>res.send('hello world')
)
app.listen(port, ()=>console.log('sadasf'))
db.sequelize.sync()
  .then(()=>{
    console.log("synced");
  })
  .catch((err)=>{
    console.log("failed sync" + err.message);
  });