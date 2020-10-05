import { Controller, Get, Post, Request, Body, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginClientDto } from './clients/dto/CreateClient.dto';
import { ClientsService } from './clients/services/clients.service';
import { ResponseInterface } from './common/interfaces/ResponseInterface';
import { UsersService } from './users/service/users.service';

@Controller()
export class AppController {
  private logger: Logger;
  constructor(
    private readonly appService: AppService,
    private readonly clientsService: ClientsService,
    private readonly usersService: UsersService,
  ) { 
    this.logger = new Logger("App Controller Action");
  }

  @Post("/login")
  async login(@Request() req, @Body() loginClientDto: LoginClientDto): Promise<ResponseInterface | Error> {
    if (loginClientDto.isClient) {
      try {
        const jwt = await this.clientsService.findClientByLoginClientDto(loginClientDto);
        return {etat: true, ...jwt}
      } catch (error) {
        this.logger.error(error);
        return { etat: false, error };
      }
    } else {
      try {
        const jwt = await this.usersService.findCreatifByLoginCreatifDto(loginClientDto);
        return {etat: true, ...jwt}
      } catch (error) {
        this.logger.error(error);
        return { etat: false, error };
      }
    }
  }
}
