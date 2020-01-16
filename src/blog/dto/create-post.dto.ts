// // 创建数据库将要存储的数据的数据传输对象
// 将 CreatePostDTO 类中的每个属性都标记为数据类型为 string，并标记为 readonly，以避免不必要的数据操作
export class CreatePostDTO {
    readonly title: string;
    readonly description: string;
    readonly body: string;
    readonly author: string;
    readonly date_posted: string
}