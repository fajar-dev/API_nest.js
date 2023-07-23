import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';
import { Notes } from './notes/notes.entity';


@Module({
    // imports: [
    //   ConfigModule.forRoot({
    //     isGlobal: true,
    //     envFilePath: '.env',
    //   }),
    //   TypeOrmModule.forRootAsync({
    //     imports: [ConfigModule],
    //     useFactory: async (configService: ConfigService) => ({
    //       type: 'mysql',
    //       host: configService.get<string>('DB_HOST'),
    //       port: 3306,
    //       username: configService.get<string>('DB_USER'),
    //       password: configService.get<string>('DB_PASSWORD'),
    //       database: configService.get<string>('DB_NAME'),
    //       entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //       synchronize: true,
    //     }),
    //     inject: [ConfigService],
    //   }),
    //   TypeOrmModule.forFeature([Notes])
    // ],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Notes])
  ],
  controllers: [NotesController],
  providers: [NotesService],
})

export class AppModule {}
