# atletica-api

This project is an API for managing an athletic organization (atletica) built using NestJS and TypeScript. 

## Features

- **Domain-Driven Design (DDD)**: The project follows DDD principles, organizing the code into distinct layers: application, domain, infrastructure, and presentation.
- **TypeScript**: The project is developed using TypeScript, providing type safety and modern JavaScript features.
- **Modular Architecture**: Each module is encapsulated, making the application scalable and maintainable.

## Project Structure

```
atletica-api
├── src
│   ├── application        # Application layer
│   ├── domain             # Domain layer
│   ├── infrastructure     # Infrastructure layer
│   └── presentation       # Presentation layer
├── test                   # Test directory
├── package.json           # NPM configuration
├── tsconfig.json          # TypeScript configuration
└── nest-cli.json          # Nest CLI configuration
```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd atletica-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run start
   ```

## Testing

To run the unit tests, use the following command:
```bash
npm run test
```

## License

This project is licensed under the MIT License.