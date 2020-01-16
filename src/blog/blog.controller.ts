// 控制器，与前端交互
// 引入处理 HTTP 请求所需的模块 
import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

// 装饰器
@Controller('blog')
export class BlogController {

    // 将 BlogService 注入到控制器，以使得拥有访问权限来使用 BlogService 文件中已经定义好的函数(依赖注入)
    constructor(private blogService: BlogService) { }

    // 从客户端接收 HTTP GET 请求时从数据库中获取所有文章，然后返回适当的响应
    @Get('posts')
    async getPosts(@Res() res) {
        const posts = await this.blogService.getPosts();
        return res.status(HttpStatus.OK).json(posts);
    }

    // 以 postID 作为参数，从数据库中获取一篇文章。
    // 除了传递给这个方法的 postID 参数之外，还实现了一个名为 ValidateObjectId() 的额外方法。
    // 这个方法实现了 Nest.js 中的 PipeTransform 接口。它是用于验证并确保可以在数据库中找到 postID 参数。
    @Get('post/:postID')
    async getPost(@Res() res, @Param('postID', new ValidateObjectId()) postID) {
        const post = await this.blogService.getPost(postID);
        if (!post) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(post);
    }

    // 处理 HTTP POST 请求，以便向数据库添加新的文章
    @Post('/post')
    async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
        const newPost = await this.blogService.addPost(createPostDTO);
        return res.status(HttpStatus.OK).json({
            message: "Post has been submitted successfully!",
            post: newPost
        })
    }

    // 编辑，接受 postID 的查询参数，并执行更新一篇文章的功能
    // 利用 ValidateObjectId 方法为您需要编辑文章提供适当的认证。
    @Put('/edit')
    async editPost(
        @Res() res,
        @Query('postID', new ValidateObjectId()) postID,
        @Body() createPostDTO: CreatePostDTO
    ) {
        const editedPost = await this.blogService.editPost(postID, createPostDTO);
        if (!editedPost) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Post has been successfully updated',
            post: editedPost
        })
    }

    // 删除,接受 postID 的查询参数，并从数据库中删除特定的文章
    @Delete('/delete')
    async deletePost(@Res() res, @Query('postID', new ValidateObjectId()) postID) {
        const deletedPost = await this.blogService.deletePost(postID);
        if (!deletedPost) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Post has been deleted!',
            post: deletedPost
        })
    }
}