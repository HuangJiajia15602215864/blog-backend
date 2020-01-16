// 创建了数据库 schema
import * as mongoose from 'mongoose';

// 使用 Mongoose 来定义将存储在数据库中的数据类型
export const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    body: String,
    author: String,
    date_posted: String
})