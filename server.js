const express     = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// LOAN DATA
const loanData = [
    {
        "id": 1,
        "Name": "Ren Money",
        "Description": "Salary earners discounted loan",
        "Interest Rate": "5%",
        "Amount": 5000,
        "Tenure": "3 months"
    },
    {
        "id": 2,
        "Name": "Kia Kia",
        "Description": "Easy small loan",
        "Interest Rate": "3%",
        "Amount": 50000,
        "Tenure": "1.5 years"
    }
];

const user = [];

// STARTING ROUTE
app.get("/", (req, res) => {
    res.status(200).json({
        "status": "success",
        "message": "welcome to the Api for the lendsqr Task"
    });
})

app.listen(3000, () => {
    console.log("The server just got started lets roll!");
})