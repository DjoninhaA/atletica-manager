// src/domain/repositories/index.ts

export interface IAtleticaRepository {
    findAll(): Promise<Atletica[]>;
    findById(id: string): Promise<Atletica | null>;
    create(atletica: Atletica): Promise<Atletica>;
    update(id: string, atletica: Atletica): Promise<Atletica | null>;
    delete(id: string): Promise<void>;
}

// Add other repository interfaces as needed