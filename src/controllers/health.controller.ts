import { Controller, Get, Header } from '@nestjs/common';
import { DNSHealthIndicator, HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { DbHealthService } from '../services/db-health.service';
import { async } from 'rxjs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private dns: DNSHealthIndicator,
    private dbHealthService: DbHealthService,
  ) {}

  @Get()
  @Header('Content-Type', 'application/json')
  @ApiTags('')
  @ApiOperation({operationId: 'GetHealth', summary: 'getHealth'})
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.dns.pingCheck('ping-outbound-check', 'http://google.com'),
      async() => this.dbHealthService.isHealthy('database'),
    ]);
  }
}
