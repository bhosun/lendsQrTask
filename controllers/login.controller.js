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

const login = (req, res) => {
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
}

module.exports = login;