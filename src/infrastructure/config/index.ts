import { ConfigService } from '@nestjs/config';

export default () => {
  const configService = new ConfigService();

  return {
    port: configService.get<number>('PORT') || 3000,
    database: {
      host: configService.get<string>('DB_HOST') || 'localhost',
      port: configService.get<number>('DB_PORT') || 5432,
      username: configService.get<string>('DB_USERNAME') || 'user',
      password: configService.get<string>('DB_PASSWORD') || 'password',
      database: configService.get<string>('DB_NAME') || 'atletica',
    },
    // Add more configuration settings as needed
  };
};