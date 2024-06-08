const userService = require('../service/user.service');

const getUser = (req, res) => {
    try {
        // throw new Error("This is a test error");
        userService.getUser(2);
        return res.status(200).json({
            status: true,
            response: "data ",
            message: "data created successfully"
        });    
    } catch (error) {
        return res.status(422).json({
            status: true,
            response: "data ",
            message: "Something went wrong!"
        }); 
    }
    
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