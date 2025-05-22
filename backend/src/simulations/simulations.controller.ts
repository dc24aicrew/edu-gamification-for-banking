import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { SimulationsService } from './simulations.service';
import { Simulation, SimulationStatus } from './simulation.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('simulations')
export class SimulationsController {
  constructor(private readonly simulationsService: SimulationsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Simulation[]> {
    return this.simulationsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Simulation> {
    return this.simulationsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() simulation: Partial<Simulation>): Promise<Simulation> {
    return this.simulationsService.create(simulation);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() simulation: Partial<Simulation>): Promise<Simulation> {
    return this.simulationsService.update(+id, simulation);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: SimulationStatus,
  ): Promise<Simulation> {
    return this.simulationsService.updateStatus(+id, status);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.simulationsService.remove(+id);
  }
}