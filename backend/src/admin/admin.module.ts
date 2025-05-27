import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { SimulationsModule } from '../simulations/simulations.module';
import { AdminController } from './admin.controller';

@Module({
  imports: [UsersModule, SimulationsModule],
  controllers: [AdminController],
})
export class AdminModule {}