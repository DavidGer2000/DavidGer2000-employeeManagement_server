
const indexR = require("./index")
const employeeR = require("./employee")


exports.routesInit = (app) => {
    app.use("/",indexR)
    app.use("/employee",employeeR)
}