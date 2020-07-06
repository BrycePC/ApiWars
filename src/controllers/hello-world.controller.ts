import { Controller, Get, Header } from '@nestjs/common';
import { HelloWorldService } from './../services/hello-world.service';
import { ApiResponse, ApiExtension, ApiTags, ApiOperation } from '@nestjs/swagger';
import { HelloWorldResponse } from '../models/hello-world.response';


@Controller('hello')
export class HelloWorldController {
  constructor(private readonly appService: HelloWorldService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  @ApiTags('')
  @ApiOperation({operationId: 'GetHelloWorld', summary: 'getHelloWorld'})
  @ApiResponse({ status: 200,
      description: 'Successful response',
      type: HelloWorldResponse
  }
    )
  @ApiExtension('x-operation-settings',
    { CollectParameters: false,
      AllowDynamicQueryParameters: false,
      AllowDynamicFormParameters: false,
      IsMultiContentStreaming: false
    })
  getHello(): HelloWorldResponse {
    return this.appService.getHello();
  }
}
