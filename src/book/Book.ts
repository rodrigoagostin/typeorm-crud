import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
	@PrimaryGeneratedColumn()
	id?: number;
	@Column({ nullable: false })
	name!: string;
	@Column({ nullable: false })
	author!: string;
}
