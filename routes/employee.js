const express = require("express");
const router = express.Router();
const { EmployeeModel } = require("../models/employeeModel")

//get all employees
router.get("/", async (req, res) => {
    let perPage=30;
    let page=req.query.page?req.query.page-1:0;
    try {
        let data = await EmployeeModel.find({})
        .limit(perPage)
        .skip(page*perPage)
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.json({ err })
    }
})


// craete employee
router.post("/", async (req, res) => {
    try {
        let employee = EmployeeModel(req.body);
        await employee.save();
        res.json(employee);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ err: "post failed" })
    }
})


// delete employee
router.delete("/:idDel", async (req, res) => {
    try {
        let data = await EmployeeModel.deleteOne({ _id: req.params.idDel })
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})


// edit employee
router.put("/:idEdit", async (req, res) => {
    try {
        let data = await EmployeeModel.updateOne({ _id: req.params.idEdit }, req.body)
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})


module.exports = router;