import { AppError } from './app.error';

export class BadInput   {

    constructor(public originalError?: any) {
      console.log(originalError);
    }
}
