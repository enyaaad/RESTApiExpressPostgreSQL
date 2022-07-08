const db = require("../models");
const Test = db.seqModule;
const op = db.Sequelize.Op;

exports.create = (req,res) =>{
    if(!req.body.ticket){
        res.status(400).send({
            message:"Ticket cannot be empty!"
        });
        return;
    }
    const ticket = {
        body:req.body.ticket
    };
    ticket.create(ticket)
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "some error occured while creating ticket"
            })
        })
};

exports.findOne = (req,res) =>{
    const id = req.params.id;
    Test.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });
};

exports.findAll = (req,res) =>{
    const ticket = req.query.ticket;
    let condition = ticket ? {title: {[op.iLike]:`%${ticket}%`}} : null;
    Test.findAll({where:condition})
        .then(data=>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "some error occured while retrieving tickets"
            });
        });
}
exports.update = (req,res) =>{
    const id = req.params.id;
    Test.update(req.body,{
        where:{id:id}
    })
        .then(num =>{
            if(num===1){
                res.send({
                    message:"ticket updated successfully"
                });
            } else{
                res.send({
                    message:`cannot update ticket with id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:"error updating ticket with id" + id
            });
        });
};
exports.delete = (req,res) => {
    const id = req.params.id;
    Test.destroy({
        where:{id:id}
    })
        .then(num=>{
            if(num===1){
                res.send({
                    message:"ticket deleted successfully"
                })
            } else {
                res.send({
                    message:`cannot delete ticket with id=${id}`
                })
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:"error while deleting ticket with id" + id
            })
        })
};

exports.deleteAll = (req, res) => {
 Test.destroy({
     where: {},
     truncate:false
 })
     .then(nums=>{
         res.send({message:`${nums} tickets were deleted succsessfully`})
     })
     .catch(err=>{
         res.status(500).send({
             message:err.message || "some error while deleting ticket"
         });
     });
};
