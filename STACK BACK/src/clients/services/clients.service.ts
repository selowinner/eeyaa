import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcrypt';
import { ClientDto, CreateClientDto, LoginClientDto } from 'src/clients/dto/CreateClient.dto';
import { ClientsEntity } from 'src/clients/schema/clients.entity';
import { TypeClient } from 'src/common/enum/ClientEnum';
import { generateRecovery } from 'src/common/function/helper';
import { ResponseInterface, ResponseJwt } from 'src/common/interfaces/ResponseInterface';
import { toClientDto } from 'src/shared/mapper';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {

  constructor(
    @InjectRepository(ClientsEntity) private readonly clientsRepo: Repository<ClientsEntity>,
    private jwtService: JwtService
  ) { }
  

  async findOneForJWT(options?: object): Promise<ClientDto> {
    const user =  await this.clientsRepo.findOne(options);    
    return toClientDto(user);  
  }


  async findClientByLoginClientDto({ email, password }: LoginClientDto): Promise<ResponseJwt| Error> {    
    const client = await this.clientsRepo.findOne({ where: { email } });
    
    if (!client) {
        throw new HttpException('Client pas trouvé', HttpStatus.UNAUTHORIZED);    
    }
    
    // compare passwords    
    const areEqual = await compare(password, client.password);
    
    if (!areEqual) {
        throw new HttpException('Invalid mot de passe', HttpStatus.UNAUTHORIZED);    
    }
    
    const payload = toClientDto(client);
    const jwt = await this.jwtService.sign(payload);
    
    return { access_token: jwt }
  }

  async create(clientDto: CreateClientDto):  Promise<ResponseJwt| Error> {    
    const { nameEntreprise, password, email, name, type } = clientDto;
    
    // check if the user exists in the db    
    const userInDb = await this.clientsRepo.findOne({ 
      where: [
        { email },
        { name },
        { nameEntreprise },
        ] 
    });
    if (userInDb) {
        throw new HttpException('Ce Client existe déjà', HttpStatus.BAD_REQUEST);    
    }
    const recovery = generateRecovery();
    const newPass = await hash(password.trim(), Number(process.env.CRYPTO_DIGEST))
    const client: ClientsEntity = type === TypeClient.ENTREPRISE ? await this.clientsRepo.create({ nameEntreprise, password: newPass, email, type, recovery}): await this.clientsRepo.create({ name, password: newPass, email, recovery});
    await this.clientsRepo.save(client);

    const payload = toClientDto(client);
    const jwt = await this.jwtService.sign(payload);
    
    return { access_token: jwt } 
  }


}
