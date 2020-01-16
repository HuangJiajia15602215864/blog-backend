import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema';

@Module({
  // 建立基于 BlogSchema 的 Post 模型
  // 使用 MongooseModule.forFeature() 定义在模块中应该注册哪些模型
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }])
 ],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule { }