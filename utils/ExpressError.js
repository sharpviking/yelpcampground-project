class ExpressError extends Error {
    constructor(message, statusCode) {
        super();
        this.maessage = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;
