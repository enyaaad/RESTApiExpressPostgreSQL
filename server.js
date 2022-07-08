const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;

require("./app/routes/test.routes")(app);
var corsOption ={
  origin:"http://localhost:8081"
};
app.use(cors(corsOption))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get(
    '/',(req, res) =>res.json({
        message:"welcome"
    })
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
