// 在服务类AppService中，定义了getHello()方法，只返回了字符串 Hello World!
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
