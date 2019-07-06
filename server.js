const express     = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const createRoute = require("./routes/create.route");
const loginRoute = require("./routes/login.route");
const loans = require("./routes/loan.route");
const apply = require("./routes/apply.route");

// STARTING ROUTE
app.get("/", (req, res) => {
    res.status(200).json({
        "status": "success",
        "message": "welcome to the Api for the lendsqr Task"
    });
});

app.use("/", createRoute);
app.use("/", loginRoute);
app.use("/", loans);
app.use("/", apply);

app.listen(3000, () => {
    console.log("The server just got started lets roll!");
})