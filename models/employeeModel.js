const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    IDentify:String,
    Name:String,
    Position:String,
    Salary:String
});


const EmployeeModel = mongoose.model("employees", employeeSchema);
exports.EmployeeModel = EmployeeModel;