import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import * as mongoose from 'mongoose';

// ValidateObjectId 类
// transform 方法
// 任何带有无法在数据库中检索到的 postID 的应用中的前端 HTTP 请求都会被视为无效。
@Injectable()
export class ValidateObjectId implements PipeTransform<string> {
    async transform(value: string, metadata: ArgumentMetadata) {
        const isValid = mongoose.Types.ObjectId.isValid(value);
        if (!isValid) throw new BadRequestException('Invalid ID!');
        return value;
    }
}