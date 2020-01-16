import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// 根 ApplicationModule 中已安装的 MongooseModule 来建立到数据库的连接
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  // forRoot() 方法完成与数据库的连接
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', { useNewUrlParser: true }),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }