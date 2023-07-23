import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notes{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  content: string;

  @Column({ default: false })
  isActive: boolean;
}