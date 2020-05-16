export class ResourceNotFoundError extends Error {
    resource: string;
    constructor(resource?: string) {
        let message = `Resource ${resource} not found`;
        super(message);
        this.message = message;
        this.resource = resource;
        this.name = (this as any).constructor.name;
        Error.captureStackTrace(this, ResourceNotFoundError);
    }
}