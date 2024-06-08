
const getUser = (params) => {
    console.log("GEt user service", params);
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