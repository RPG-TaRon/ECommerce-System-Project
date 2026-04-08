"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
exports.handleError = handleError;
class ApiError extends Error {
    constructor(message) {
        super(message);
        this.name = "ApiError";
    }
}
exports.ApiError = ApiError;
function handleError(error) {
    if (error instanceof ApiError) {
        console.error(`API Error: ${error.message}`);
    }
    else if (error instanceof Error) {
        console.error(`Unexpected Error: ${error.message}`);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
//# sourceMappingURL=errorHandler.js.map