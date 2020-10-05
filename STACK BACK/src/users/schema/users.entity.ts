import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	JoinColumn,
	ManyToOne,
	OneToMany
} from 'typeorm';
import { CompetencesEntity } from 'src/competences/schema/competences.entity';
import { Sexe } from 'src/common/enum/GlobalEnum';

@Entity()
export class UsersEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ length: 25 })
	name: string;

	@Column({ length: 50 })
	pseudo: string;

	@Column({ length: 50 })
  numero: string;
  
  @Column({ length: 255 })
  password: string;

  @Column({ length: 50 })
  email: string;
  
  @Column() birthDate: Date;

  @Column({ length: 50 })
  nationnalite: string;

  @Column({ length: 50, default: "" })
  numberPiece: string;

  @Column({ length: 50, default: "" })
	namePiece: string;

	@Column({ default: Sexe.MASCULIN })
	sexe: Sexe;

	@Column({ type: 'int' })
	recovery: number;

	@Column({ type: "int", default: 0 })
  competences_id: number;

  // @ManyToOne(() => CompetencesEntity, (competences) => competences.users)
	// @JoinColumn({ name: 'competences_id' })
	// competences: CompetencesEntity;

	@Column({ default: true })
	isActive: boolean;
	
	@Column({ default: false })
	isPro: boolean;

	@Column({ default: false })
  isPremium: boolean;

  @Column({ default: true })
  isWelcome: boolean;


	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;

	@Column({default: null}) endDatePremium: Date;

}
