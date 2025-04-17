import { TypeOrmModule } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { DatabaseConfig } from "./config";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: DatabaseConfig.DB_HOST,
      port: DatabaseConfig.DB_PORT,
      username: DatabaseConfig.DB_USERNAME,
      password: DatabaseConfig.DB_PASSWORD,
      database: DatabaseConfig.DB_NAME,
      entities: [join(__dirname, "../../domain/entities/*.entity{.ts,.js}")],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
