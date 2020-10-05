import { Controller, Post, Body, Get, Request, Logger, Res, Query, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport'
import { ClientsService } from '../services/clients.service';
import { ResponseInterface } from 'src/common/interfaces/ResponseInterface';
import { CreateClientDto, LoginClientDto } from '../dto/CreateClient.dto';

@Controller('clients')
export class ClientsController {
  private logger: Logger;
  constructor(private service: ClientsService) {
    this.logger = new Logger("Clients Controller Action");
  }


  @Post('/signup')
  async signup(@Request() req, @Body() client: CreateClientDto): Promise<ResponseInterface | Error> {
    
    if (client.password === client.confirmPassword) {
      try {
        const jwt = await this.service.create(client);
        return {etat: true, ...jwt}
      } catch (error) {
        this.logger.error(error.message());
        return { etat: false, error };
      }
    }
    else {
      return { etat: false, error: new Error('Le mot de passe ne correspond pas à la confirmation') }
    }
  }
}
