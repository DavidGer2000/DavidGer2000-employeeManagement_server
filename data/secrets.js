require("dotenv").config();

exports.config = {
    mongoColection : process.env.MONGOSERVER,
    port : process.env.PORT
}