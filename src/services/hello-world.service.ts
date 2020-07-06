import { Injectable } from '@nestjs/common';
import { HelloWorldResponse } from '../models/hello-world.response';

@Injectable()
export class HelloWorldService {
  getHello(): HelloWorldResponse {
    let response = new HelloWorldResponse('Hello World');
    return response;
  }
}
