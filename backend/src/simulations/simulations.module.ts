import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Simulation } from './simulation.entity';
import { SimulationsService } from './simulations.service';
import { SimulationsController } from './simulations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Simulation])],
  providers: [SimulationsService],
  controllers: [SimulationsController],
  exports: [SimulationsService],
})
export class SimulationsModule {}