import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from '../users/users.service';
import { SimulationsService } from '../simulations/simulations.service';

@Controller('admin')
@UseGuards(JwtAuthGuard)
export class AdminController {
  constructor(
    private readonly usersService: UsersService,
    private readonly simulationsService: SimulationsService,
  ) {}

  @Get('dashboard')
  async getDashboardStats() {
    const users = await this.usersService.findAll();
    const simulations = await this.simulationsService.findAll();

    return {
      totalUsers: users.length,
      totalSimulations: simulations.length,
      recentSimulations: simulations.slice(-5),
    };
  }
}