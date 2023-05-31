export class UpdateSettings{
    Update!:Settings
}                                       


export class Settings {
    public bio:string;
    public email:string;
    public image:string;
    public password:string;
    public username:string;
}

export class Comment{
    Comment!:Post
}

export class Post{

}
