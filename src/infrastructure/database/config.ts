import configuration from "../config";

const config = configuration();

export class DatabaseConfig {
  static readonly DB_HOST = config.database.host;
  static readonly DB_PORT = config.database.port;
  static readonly DB_USERNAME = config.database.username;
  static readonly DB_PASSWORD = config.database.password;
  static readonly DB_NAME = config.database.database;
}
