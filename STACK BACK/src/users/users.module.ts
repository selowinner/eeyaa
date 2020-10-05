import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './service/users.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { UsersEntity } from './schema/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ UsersEntity ]),
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: process.env.SESSION_SECRET,
      signOptions: {
        expiresIn: process.env.EXPIRES_IN
      }
    })
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
