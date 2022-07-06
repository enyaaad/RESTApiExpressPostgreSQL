const express = require("express")
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();

var corsOption ={
  origin:"http://localhost:8081"
};


app.use(cors(corsOption))

app.get(
    '/',(req, res) =>res.send('hello world')
)
app.listen(port, ()=>console.log('sadasf'));


const db = require("./app/models");
db.sequelize.sync({
    force:true,
})  .then(()=>{
    console.log("synced");
})
    .catch((err)=>{
        console.log("failed sync" + err.message);
    });
