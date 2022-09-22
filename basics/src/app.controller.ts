import { Controller, Get, Redirect, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Redirect('home')
  home(){ }

  @Get('home')
  @Render('login_signup')
  getHello(){
  
  }
}
