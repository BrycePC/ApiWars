import { Injectable } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult, HealthCheckError } from '@nestjs/terminus';


@Injectable()
export class DbHealthService extends HealthIndicator {

  async isHealthy(key: string): Promise<HealthIndicatorResult> {

    //Checking db here - a dummy call for now
    const isHealthy = true;
    const result = this.getStatus('database', isHealthy);

    if (isHealthy) {
      return result;
    }
    throw new HealthCheckError('Database check failed', result);
  }
}