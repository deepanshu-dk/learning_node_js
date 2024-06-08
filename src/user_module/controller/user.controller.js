const userService = require('../service/user.service');

const getUser = (req, res) => {
    userService.getUser(2);
    // res.status(200);
    // res.json({ message: 'Welcome to get user the API!' });
    return res.status(200).json({
        status: true,
        response: "data ",
        message: "data created successfully"
    });
};

const postUser = (req, res) => {
    res.send('Welcome to post user the API!');
};

const deleteUser = (req, res) => {
    res.send('Welcome to delete user the API!');
};

module.exports = {
    getUser,
    postUser,
    deleteUser
}