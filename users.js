const express = require("express");
const {NetanelModel} = require("../models/netanelModel")
const router = express.Router();

router.get("/", async(req,res) => {
    try{
        let data = await NetanelModel.find({});
        res.json(data);
    }
    catch(err){
        console.log(err);
        res.json({err})
    }
})

router.get("/:idGet", async(req,res) => {
    try{
        let data = await NetanelModel.findOne({_id:req.params.idGet});
        res.json(data);
    }
    catch(err){
        console.log(err);
        res.json({err})
    }
})

router.post("/",async(req,res) =>{
    let netanel = NetanelModel(req.body);
    await netanel.save();
    res.json(netanel);
})

router.delete("/:idDel",async(req,res) =>{
    try{
      let data = await NetanelModel.deleteOne({_id:req.params.idDel})
      res.json(data);
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})

router.put("/:idEdit",async(req,res) =>{
    try{
      let data = await NetanelModel.updateOne({_id:req.params.idEdit},req.body)
      res.json(data);
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})




module.exports = router;