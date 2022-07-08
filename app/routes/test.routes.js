module.exports = app =>{
    const test = require("../controllers/test.controller");
    let router = require("express").Router();
    router.post("/",test.create);
    router.get("/:id",test.findOne);
    router.put("/:id",test.update);
    router.delete("/:id",test.delete);
    router.delete("/:id",test.deleteAll);
    app.use('/api/test',router);
}