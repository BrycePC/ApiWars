import { Controller, Get, Header, Query } from '@nestjs/common';
import { DNSHealthIndicator, HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { DbHealthService } from '../services/db-health.service';
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
  @ApiOperation({operationId: 'GetHealth', summary: 'getHealth',
    description: 'Returns http status=200 if service is running normally.'
    + ' Use <host>/health?dofail=true to demo failure'})
  @HealthCheck()
  check(@Query() query) {
    const doForceDbFailureTest = (query && query.dofail) ? true: false;
    return this.health.check([
      () => this.dns.pingCheck('ping-outbound-check', 'http://google.com'),
      async() => this.dbHealthService.isHealthy('database', doForceDbFailureTest),
    ]);
  }
}
