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

const loanDatabase = [
    {
        "email": "Gbolahan@yahoo.com",
        "loanName": "Kia Money"
    }
];

const apply = (req, res) => {
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
}

module.exports = apply;