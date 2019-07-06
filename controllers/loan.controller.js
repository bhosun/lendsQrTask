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

const getLoans = (req, res) => {
    res.status(200).json({
        status: "success",
        message: loanData
    });
}

module.exports = getLoans;