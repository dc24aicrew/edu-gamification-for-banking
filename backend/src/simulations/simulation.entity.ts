import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';

export enum SimulationStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

@Entity('simulations')
export class Simulation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  scenarioId: string;

  @Column({ default: 60 })
  duration: number;

  @Column({ default: 100000 })
  budget: number;

  @Column({ default: 50 })
  initialNpsScore: number;

  @Column({ default: 80 })
  targetNpsScore: number;

  @Column({
    type: 'enum',
    enum: SimulationStatus,
    default: SimulationStatus.PENDING,
  })
  status: SimulationStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, user => user.id)
  facilitator: User;

  @Column()
  facilitatorId: number;
}