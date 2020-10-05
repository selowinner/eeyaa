import { IsEmail, IsNotEmpty } from 'class-validator';
import { Sexe } from 'src/common/enum/GlobalEnum';

export class CreatifDto {  
  @IsNotEmpty()  id: number;
  @IsNotEmpty()  name: string;
  @IsNotEmpty()  level: number; // declare if client or creatif or admin
  @IsNotEmpty()  @IsEmail() email: string;
}


export class CreateCreatifDto {  
  @IsNotEmpty()  name: string;
  @IsNotEmpty()  pseudo: string;
  @IsNotEmpty()  password: string;
  @IsNotEmpty()  confirmPassword: string;
  @IsNotEmpty()  numero: string;
	@IsNotEmpty()  nationnalite: string;
  @IsNotEmpty()  sexe: Sexe;
  @IsNotEmpty()  isPro: boolean;
  @IsNotEmpty()  @IsEmail() email: string;
}
