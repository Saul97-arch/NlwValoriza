import { Exclude } from "class-transformer";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
// Uma entidade pode ser uma tabela, uma entidade usuário pode ser uma tabela usuário
// Entidade < - > ORM < - > BD (users)
@Entity("users")
class User {
    // No decorator se o nome diferir entre tabela feita no migration e no entity
    // Passa o nome da migration dentro do parâmetro do decorator
    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
       
    }
}

export { User };
