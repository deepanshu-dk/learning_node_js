const errorHandler = (err, req, res, next) => {
    console.error(err.stack, "oooooooooo");

    res.status(err.status || 500).json({
        error: err.name || 'Internal Server Error',
        message: err.message || 'Something went wrong!'
    });
};

const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        error: 'Not Found',
        message: `The requested resource ${req.originalUrl} was not found on this server.`
    });
};

module.exports = {
    errorHandler,
    notFoundHandler
};