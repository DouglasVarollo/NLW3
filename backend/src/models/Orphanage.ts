import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("orphanages")
class Orphanage {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	name: string;

	@Column()
	latitude: number;

	@Column()
	longitude: number;

	@Column()
	about: string;

	@Column()
	instructions: string;

	@Column()
	opening_hours: number;

	@Column()
	open_on_weekends: boolean;
}

export default Orphanage;
