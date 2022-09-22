import { Module } from '@nestjs/common';
import { adminModule } from './AdminDashboard/adminDashboard.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseModule } from './Database/database.module';
import { loginModule } from './login/login.module';
import { signupModule } from './signup/signup.module';
import { userDashboardModule } from './userDashboard/userDashboard.module';

@Module({
  imports: [loginModule,signupModule,databaseModule,userDashboardModule,adminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
