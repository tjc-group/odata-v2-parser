export class ResourceNotFoundError extends Error {
    constructor(resource?: string) {
        let message = `Resource ${resource} not founc`;
        super(message);
        this.message = message;
        this.name = (this as any).constructor.name;
        Error.captureStackTrace(this, ResourceNotFoundError);
    }
}