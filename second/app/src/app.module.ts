import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGO_DB_CONNECTION } from './config/configuration';
import { UserModule } from './users/user.module';

@Module({
  imports: [
  	MONGO_DB_CONNECTION,
	UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
