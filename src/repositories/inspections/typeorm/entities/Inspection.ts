import {
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  Entity,
} from 'typeorm';
import Machine from 'repositories/machines/typeorm/entities/Machine';
import Bug from 'repositories/bugs/typeorm/entities/Bug';
import User from '../../../users/typeorm/entities/User';

@Entity('inspections')
class Inspection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  machine_id: string;

  @ManyToOne(() => Machine)
  @JoinColumn({ name: 'machine_id' })
  machine: Machine;

  @ManyToMany(() => Bug, { cascade: true })
  @JoinTable({
    name: 'inspection_bugs',
    joinColumns: [{ name: 'inspection_id' }],
    inverseJoinColumns: [{ name: 'bug_id' }],
  })
  bugs: Bug[];

  @Column()
  article: string;

  @Column()
  tag: string;

  @Column()
  amountSamples: number;

  @Column()
  amountParts: number;

  @Column()
  palconstLength: number;

  @Column()
  statusPalconst: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default Inspection;
