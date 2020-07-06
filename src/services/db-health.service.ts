import { Injectable } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult, HealthCheckError } from '@nestjs/terminus';


@Injectable()
export class DbHealthService extends HealthIndicator {

  async isHealthy(key: string, doFailTest?: boolean): Promise<HealthIndicatorResult> {

    //Checking db connectivity here - this is a dummy call for now - we will force failure if a test key is passed
    const isHealthy = !doFailTest;
    const result = this.getStatus('database', isHealthy);

    if (isHealthy) {
      return result;
    }
    throw new HealthCheckError('Database check failed', result);
  }
}