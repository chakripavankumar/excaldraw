export class NotFoundError extends Error {
    constructor (message : string){
        super();
        this.name =  "NotFoundError"
    }
}

export class UnauthorizeError  extends Error {
     constructor ( message : string){
        super();
        this.name = "UnauthorizedError"
     }
}