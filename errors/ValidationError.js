class ValidationError extends Error {
    constructor(data = {}, ...params) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ValidationError);
        }

        this.data = data;
    }
}

module.exports = ValidationError;
