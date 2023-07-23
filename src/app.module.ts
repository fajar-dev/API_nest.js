import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { User } from './users/user.entity';


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
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService],
})

export class AppModule {}
