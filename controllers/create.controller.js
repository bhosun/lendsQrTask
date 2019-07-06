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

const createProfile = (req, res) => {
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
}

module.exports = createProfile;