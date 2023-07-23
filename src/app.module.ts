import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: '',
      database: 'laravel-be',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})

export class AppModule {}
