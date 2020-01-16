// 创建了数据库接口
import { Document } from 'mongoose';

// 将 Post 类型的数据类型定义为字符串值
export interface Post extends Document {
    readonly title: string;
    readonly description: string;
    readonly body: string;
    readonly author: string;
    readonly date_posted: string
}