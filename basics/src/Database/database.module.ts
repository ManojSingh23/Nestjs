import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { userData } from "src/Entity/data.entity";
@Global()
@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '97163359',
        database: 'basics',
        entities: [userData],
        synchronize: true
    })]
})
export class databaseModule {}