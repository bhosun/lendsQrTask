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
        "Tenure": "3 months",
        "RunningTime": "Jan-Jun"
    },
    {
        "id": 2,
        "Name": "Kia Kia",
        "Description": "Easy small loan",
        "Interest Rate": "3%",
        "Amount": 50000,
        "Tenure": "1.5 years",
        "RunningTime": "Jan-Jun"
    },
    {
        "id": 3,
        "Name": "Kia Kia",
        "Description": "Easy small loan",
        "Interest Rate": "3%",
        "Amount": 50000,
        "Tenure": "1.5 years",
        "RunningTime": "Jun-Dec"
    }
];

const user = [
    {
        "name": "Micheal Olivier",
        "email": "Adegbenro@gmail.com",
        "password": "788jnhcydy",
        "dateOfBirth": "08-11-09"
    },
    {
        "name": "Glover Olivier",
        "email": "Baddest@gmail.com",
        "password": "788jnhcydy",
        "dateOfBirth": "08-11-09"
    }
];

// STARTING ROUTE
app.get("/", (req, res) => {
    res.status(200).json({
        "status": "success",
        "message": "welcome to the Api for the lendsqr Task"
    });
});

// CREATE USER
app.post("/create", (req, res) => {
    const { name, email, password, dateOfBirth } = req.body;

    if(!name || !email ||  !password || !dateOfBirth) {
        res.status(200).json({
            "status": "failed",
            "message": "Kindly Input the right parameters!!"
        });
    }

    const newUser = {
        name, email, password, dateOfBirth
    };
    user.push(newUser);
    res.status(200).json({
        "status": "success",
        "message": "Successfully Created!"
    });
});

// LOGIN TO YOUR ACCOUNT AND GET YOUR BIODATA
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    // check the emails and password
    for(let i = 0; i < user.length; i++) {
        if((email == user[i].email) && (password == user[i].password)) {
            res.status(200).json({
                status: "success",
                message: user[i]
            });
        } else {
            res.status(400).json({
                status: "error",
                message: "Input the right password and email! Thanks"
            })
        }
    }
});

// GET LOANS AVAILABLE
app.get("/loans", (req, res) => {
    res.status(200).json({
        status: "success",
        message: loanData
    });
});

const loanDatabase = [
    {
        "email": "Gbolahan@yahoo.com",
        "loanName": "Kia Money"
    }
];

// USER TO APPLY FOR LOAN
app.post("/apply", (req, res) => {
    const { email, loanName, loanPeriod } = req.body;

    for(let i = 0; i < loanData.length; i++) {
        if((loanName == loanData[i].Name)) {
            const data = { email, loanName, loanPeriod };
            loanDatabase.push(data);
            res.status(200).json({
                status: "successfully Applied!!!"
            });
        } else {
            res.status(400).json({
                status: "Failed Input the right name"
            });
        }
    }
})

app.listen(3000, () => {
    console.log("The server just got started lets roll!");
})