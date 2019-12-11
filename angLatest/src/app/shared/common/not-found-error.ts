import {AppError} from './app.error';

export class NotFoundError   {

    constructor(public originalError?: any) {
    }

}
