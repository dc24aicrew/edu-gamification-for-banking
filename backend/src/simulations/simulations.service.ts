import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Simulation, SimulationStatus } from './simulation.entity';

@Injectable()
export class SimulationsService {
  constructor(
    @InjectRepository(Simulation)
    private simulationsRepository: Repository<Simulation>,
  ) {}

  findAll(): Promise<Simulation[]> {
    return this.simulationsRepository.find({ 
      relations: ['facilitator'],
    });
  }

  findOne(id: number): Promise<Simulation> {
    return this.simulationsRepository.findOne({ 
      where: { id },
      relations: ['facilitator'],
    });
  }

  async create(simulationData: Partial<Simulation>): Promise<Simulation> {
    const simulation = this.simulationsRepository.create(simulationData);
    return this.simulationsRepository.save(simulation);
  }

  async update(id: number, simulationData: Partial<Simulation>): Promise<Simulation> {
    await this.simulationsRepository.update(id, simulationData);
    return this.findOne(id);
  }

  async updateStatus(id: number, status: SimulationStatus): Promise<Simulation> {
    await this.simulationsRepository.update(id, { status });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.simulationsRepository.delete(id);
  }
}