import { Controller, Post, Body, Get, Request, Logger, Res, Query, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { ResponseInterface } from 'src/common/interfaces/ResponseInterface';
import { CreateCreatifDto } from '../dto/create-users.dto';

@Controller('users')
export class UsersController {
  private logger: Logger;
  constructor(private service: UsersService) {
    this.logger = new Logger("Users Controller Action");
  }
  @Post('/signup')
  async signup(@Request() req, @Body() creatif: CreateCreatifDto): Promise<ResponseInterface | Error> {
    if (creatif.password === creatif.confirmPassword) {
      try {
        const jwt = await this.service.create(creatif);
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
