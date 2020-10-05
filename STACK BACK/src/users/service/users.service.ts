import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { UsersEntity } from 'src/users/schema/users.entity';
import { LoginClientDto } from 'src/clients/dto/CreateClient.dto';
import { toCreatifDto } from 'src/shared/mapper';
import { CreateCreatifDto } from '../dto/create-users.dto';
import { generateRecovery } from 'src/common/function/helper';
import { ResponseInterface, ResponseJwt } from 'src/common/interfaces/ResponseInterface';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UsersEntity) private readonly usersRepo: Repository<UsersEntity>,
    private jwtService: JwtService
  ) { }


  async findCreatifByLoginCreatifDto({ email, password }: LoginClientDto): Promise<ResponseJwt| Error> {    
    const creatif = await this.usersRepo.findOne({ where: { email } });
    
    if (!creatif) {
        throw new HttpException('Creatif pas trouvé', HttpStatus.UNAUTHORIZED);    
    }
    
    // compare passwords    
    const areEqual = await compare(password, creatif.password);
    
    if (!areEqual) {
        throw new HttpException('Invalid mot de passe', HttpStatus.UNAUTHORIZED);    
    }
    
    const payload = toCreatifDto(creatif);
    const jwt = await this.jwtService.sign(payload);
    
    return { access_token: jwt }
  }

  async create(creatifDto: CreateCreatifDto):  Promise<ResponseJwt| Error> {    
    const { pseudo, password, email, name, numero, sexe,nationnalite, isPro  } = creatifDto;
    
    // check if the user exists in the db    
    const userInDb = await this.usersRepo.findOne({ 
      where: [
        { email },
        { name },
        { pseudo },
        ] 
    });
    if (userInDb) {
        throw new HttpException('Ce Creatif existe déjà. Veuillez changer de nom, pseudo, ou email', HttpStatus.BAD_REQUEST);    
    }
    const recovery = generateRecovery();
    const newPass = await hash(password.trim(), Number(process.env.CRYPTO_DIGEST))
    const creatif: UsersEntity = await this.usersRepo.create({ pseudo, password:newPass, email, name, numero, sexe,nationnalite, isPro, recovery});
    await this.usersRepo.save(creatif);

    const payload = toCreatifDto(creatif);
    const jwt = await this.jwtService.sign(payload);
    
    return { access_token: jwt } 
  }
}
