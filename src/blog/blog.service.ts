// 服务类，与数据库交互
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';// 导入POST接口
import { CreatePostDTO } from './dto/create-post.dto';// 导入数据传输对象

// 装饰器
@Injectable()
export class BlogService {

    // 将Post模型注入到BlogService类中
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

    // 定义了博客操作的方法，将通过后端 API 来与 MongoDB 数据库进行的适当交互
    // 从数据库中获取所有文章
    async getPosts(): Promise<Post[]> {
        const posts = await this.postModel.find().exec();
        return posts;
    }

    // 从数据库中检索一篇文章
    async getPost(postID): Promise<Post> {
        const post = await this.postModel
            .findById(postID)
            .exec();
        return post;
    }

    // 添加一篇新文章
    async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
        const newPost = await this.postModel(createPostDTO);
        return newPost.save();
    }

    // 更新一篇文章
    async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
        const editedPost = await this.postModel
            .findByIdAndUpdate(postID, createPostDTO, { new: true });
        return editedPost;
    }

    // 删除特定的文章
    async deletePost(postID): Promise<any> {
        const deletedPost = await this.postModel
            .findByIdAndRemove(postID);
        return deletedPost;
    }

}