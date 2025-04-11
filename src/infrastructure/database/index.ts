import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DatabaseConfig } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // or your preferred database type
      host: DatabaseConfig.DB_HOST,
      port: DatabaseConfig.DB_PORT,
      username: DatabaseConfig.DB_USERNAME,
      password: DatabaseConfig.DB_PASSWORD,
      database: DatabaseConfig.DB_NAME,
      entities: [__dirname + '/../domain/entities/*.entity{.ts,.js}'],
      synchronize: true, // set to false in production
    }),
  ],
})
export class DatabaseModule {}