export class ConflictError extends Error {
    constructor(status, message) {
        super(status, message);
        this.status = status;
        this.message = message;
    }
}

export class ValidationError extends Error {
    constructor(status, message) {
        super(status, message);
        this.status = status;
        this.message = message;
    }
}

export class NotFoundError extends Error {
    constructor(status, message) {
        super(status, message);
        this.status = status;
        this.message = message;
    }
}

export class InternalServerError extends Error {
    constructor(status, message) {
        super(status, message);
        this.status = status;
        this.message = message;
    }
}