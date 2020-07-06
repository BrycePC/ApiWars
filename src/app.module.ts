import { Module } from '@nestjs/common';
import { HelloWorldController } from './controllers/hello-world.controller';
import { HelloWorldService } from './services/hello-world.service';
import { TerminusModule } from '@nestjs/terminus';
import { DbHealthService } from './services/db-health.service';
import { HealthController } from './controllers/health.controller';

@Module({
  imports: [TerminusModule],
  controllers: [HelloWorldController, HealthController],
  providers: [HelloWorldService, DbHealthService],
})
export class AppModule {}
