import { Module,Global } from '@nestjs/common';
import{databaseProviders} from './database.providers'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import config from '../config';
@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
         inject: [config.KEY],
          useFactory: async (configService: ConfigType<typeof config>) => {
            const { username, host, dbName, password, port } = configService.mysql;
           
            return {
              type: 'mysql',
              host:'host.docker.internal',
              port,
              username,
              password,
              database: dbName,
              synchronize: false,
              autoLoadEntities: true,
            };
          },
        }),
      ],
    providers:[...databaseProviders],
    exports:[...databaseProviders]
})
export class DatabaseModule {}
