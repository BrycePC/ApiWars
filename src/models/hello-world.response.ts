import { ApiPropertyOptional } from '@nestjs/swagger';

export class HelloWorldResponse {
  @ApiPropertyOptional()
  Message?: string;

  constructor(msg?: string) {
    if(msg) {
      this.Message = msg;
    }
  }
}