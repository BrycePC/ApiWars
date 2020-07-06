import { Injectable } from '@nestjs/common';
import { HelloWorldResponse } from '../models/hello-world.response';

@Injectable()
export class HelloWorldService {
  getHello(): HelloWorldResponse {
    let response = new HelloWorldResponse();
    response.Message = 'Hello World';
    return response;
  }
}
