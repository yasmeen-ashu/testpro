export class UpdateSettings{
    Update!:Settings
}                                       


export class Settings {
    public profile:string;
    public shortbio:string;
    public username:string;
    public email:string;
    public password:string;
}

export class Comment{
    Comment!:Post
}

export class Post{
    public body:string;

}