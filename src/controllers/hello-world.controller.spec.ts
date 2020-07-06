import { Test, TestingModule } from '@nestjs/testing';
import { HelloWorldController } from './hello-world.controller';
import { HelloWorldService } from '../services/hello-world.service';

describe('HelloWorldController', () => {
  let appController: HelloWorldController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldController],
      providers: [HelloWorldService],
    }).compile();

    appController = app.get<HelloWorldController>(HelloWorldController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
