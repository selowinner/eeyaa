import { ClientDto } from 'src/clients/dto/CreateClient.dto';
import { ClientsEntity } from 'src/clients/schema/clients.entity';
import { CreatifDto } from 'src/users/dto/create-users.dto';
import { UsersEntity } from 'src/users/schema/users.entity';

export const toClientDto = (data: ClientsEntity): ClientDto => {  
  const { id, nameEntreprise, email, type } = data;
  const clientDto: ClientDto = { id, nameEntreprise, email, type, level: 2 };
  return clientDto;
};

export const toCreatifDto = (data: UsersEntity): CreatifDto => {  
  const { id, name, email } = data;
  const clientDto: CreatifDto = { id, name, email, level: 1 };
  return clientDto;
};