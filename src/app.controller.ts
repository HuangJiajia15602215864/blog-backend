// 控制器构造方法中引入了私有只读的服务类 AppService， 在 getHello() 方法中调动了服务类(AppService)中的 getHello() 方法。
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 定义了一个名为 getHello() 的方法，使用 @Get 注解，表示可以通过 Get 方法访问
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
