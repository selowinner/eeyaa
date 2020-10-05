import { ProjectsEntity } from 'src/projects/schema/projects.entity';
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
import { TypeClient } from 'src/common/enum/ClientEnum';

@Entity()
export class ClientsEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ length: 25, default: '' })
	nameEntreprise: string;

	@Column({ default: '' })
	address: string;

	@Column({ default: '' })
	registreCommerce: string;

	@Column({ default: '' })
  describe: string;

  @Column({ default: '' })
	name: string;
  
  @Column({ length: 255 })
  password: string;

  @Column({ length: 50 })
	email: string;
	
	@Column({ default: TypeClient.PARTICULIER })
  type: string;

  @Column({ length: 50, default: '' })
  fonctions: string;

  @Column({ default: '' })
  logo: string;

  @Column({ default: '' })
  namePiece: string;

	@Column({ type: 'int' })
	recovery: number;

	@Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isWelcome: boolean;


  @OneToMany(() => ProjectsEntity, (projects) => projects.clients)
	projects: ProjectsEntity[];
	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;

}
