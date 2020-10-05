import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateClientDto {  
  nameEntreprise: string;
  name: string;
  type: string;
  @IsNotEmpty() password: string;
  @IsNotEmpty() confirmPassword: string;
  @IsNotEmpty()  @IsEmail()  email: string;
}


export class LoginClientDto {
  readonly isClient: boolean;
  @IsNotEmpty() @IsEmail()  readonly email: string;
  @IsNotEmpty()  readonly password: string;
}

export class ClientDto {  
  @IsNotEmpty()  id: number;
  @IsNotEmpty()  nameEntreprise: string;
  @IsNotEmpty()  type: string;
  @IsNotEmpty()  level: number; // declare if client or creatif or admin
  @IsNotEmpty()  @IsEmail() email: string;
}
